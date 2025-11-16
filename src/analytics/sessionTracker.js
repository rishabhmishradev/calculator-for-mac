// src/analytics/sessionTracker.js
import { ref, push, set, update, serverTimestamp, runTransaction } from "firebase/database";
import { rtdb } from "../firebase/config";
import { getDeviceInfo, getBatteryInfo } from "./deviceInfo";
import { trackLocation } from "./locationTracker";

/**
 * startSession(userId, initialPage = "home")
 * - creates a push-key session under sessions/{userId}/{sessionKey}
 * - stores device snapshot + (async) location trigger
 * - returns sessionKey (string) or null
 */
let activeSession = { id: null, userId: null, pageStartTs: null, currentPage: null };

export const startSession = async (userId, initialPage = "home") => {
  try {
    const sessionRef = push(ref(rtdb, `sessions/${userId}`));
    const sessionKey = sessionRef.key;
    const device = getDeviceInfo();
    const battery = await getBatteryInfo();
    if (battery) device.battery = battery;

    // store baseline session with device snapshot
    const payload = {
      startTime: serverTimestamp(),
      initialPage: initialPage || null,
      pages: {},
      pageLoads: 1,
      referrer: (typeof document !== "undefined" && document.referrer) ? document.referrer : null,
      url: (typeof window !== "undefined" && window.location && window.location.href) ? window.location.href : null,
      utm: (() => {
        try {
          const p = new URLSearchParams(window.location.search);
          const out = {};
          ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(k => {
            if (p.has(k)) out[k] = p.get(k);
          });
          return Object.keys(out).length ? out : null;
        } catch { return null; }
      })(),
      device,
      clientStart: Date.now(),
    };

    await set(sessionRef, payload);

    // async: start location tracking (no await required)
    trackLocation(userId).catch(()=>{});

    activeSession = { id: sessionKey, userId, pageStartTs: Date.now(), currentPage: initialPage || "home" };
    try { localStorage.setItem("activeSessionId", sessionKey); } catch {}

    return sessionKey;
  } catch (e) {
    console.error("startSession error", e);
    return null;
  }
};

/**
 * trackPage(userId, pageName)
 * - writes duration for previous page and creates new page entry
 * - increments pageLoads using runTransaction for atomicity
 */
export const trackPage = async (userId, pageName) => {
  try {
    const sid = activeSession.id || localStorage.getItem("activeSessionId");
    if (!sid) return;

    const now = Date.now();

    // previous page duration
    if (activeSession.currentPage) {
      const prev = activeSession.currentPage;
      const timeSpent = now - (activeSession.pageStartTs || now);
      await update(ref(rtdb, `sessions/${userId}/${sid}/pages/${prev}`), {
        timeSpent: timeSpent,
        lastVisited: serverTimestamp(),
      });
    }

    // atomic increment pageLoads
    const pageLoadsRef = ref(rtdb, `sessions/${userId}/${sid}/pageLoads`);
    await runTransaction(pageLoadsRef, (current) => {
      if (current === null) return 1;
      return (current || 0) + 1;
    });

    // set current page entry
    await set(ref(rtdb, `sessions/${userId}/${sid}/pages/${pageName}`), {
      timeSpent: 0,
      firstVisited: serverTimestamp(),
      lastVisited: serverTimestamp(),
    });

    activeSession.currentPage = pageName;
    activeSession.pageStartTs = now;
  } catch (e) {
    console.error("trackPage error", e);
  }
};

/**
 * endSession(userId)
 * - writes final page duration + endTime + durationMs
 */
export const endSession = async (userId) => {
  try {
    const sid = activeSession.id || localStorage.getItem("activeSessionId");
    if (!sid) return;

    const now = Date.now();

    // write last page duration
    if (activeSession.currentPage) {
      const prev = activeSession.currentPage;
      const timeSpent = now - (activeSession.pageStartTs || now);
      await update(ref(rtdb, `sessions/${userId}/${sid}/pages/${prev}`), {
        timeSpent: timeSpent,
        lastVisited: serverTimestamp(),
      });
    }

    // compute durationMs from clientStart if available, else approximate with now
    const sessionRef = ref(rtdb, `sessions/${userId}/${sid}`);
    // set endTime and durationMs
    await update(sessionRef, {
      endTime: serverTimestamp(),
      durationMs: now - (activeSession.pageStartTs || now),
    });

    // cleanup
    activeSession = { id: null, userId: null, pageStartTs: null, currentPage: null };
    try { localStorage.removeItem("activeSessionId"); } catch {}
  } catch (e) {
    console.error("endSession error", e);
  }
};

import { ref, set, serverTimestamp } from "firebase/database";
import { rtdb } from "../firebase/config";

let currentPage = "home";
let pageStartTime = Date.now();
let sessionIdRef = null;

export const initPageTracker = (userId, sessionId) => {
  sessionIdRef = { userId, sessionId };
};

export const trackPage = (pageName) => {
  if (!sessionIdRef) return;

  const now = Date.now();

  // save old page data
  set(ref(rtdb, `sessions/${sessionIdRef.userId}/${sessionIdRef.sessionId}/pages/${currentPage}`), {
    timeSpent: now - pageStartTime,
    lastVisited: serverTimestamp(),
  });

  // start new page
  currentPage = pageName;
  pageStartTime = now;
};

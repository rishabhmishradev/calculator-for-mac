// src/analytics/locationTracker.js
import { ref, set, serverTimestamp } from "firebase/database";
import { rtdb } from "../firebase/config";

/**
 * trackLocation(userId)
 * - fetches IP-based location and writes to RTDB under `location/{userId}`
 * - stores city, region, country, ip, org, postal, timezone, asn, lastUpdated
 * - returns the location object or null on failure
 *
 * Note: ipapi.co used; replace endpoint with your paid provider in production.
 */
export const trackLocation = async (userId) => {
  try {
    const resp = await fetch("https://ipapi.co/json/");
    if (!resp.ok) throw new Error("Location API failed");
    const data = await resp.json();

    const loc = {
      ip: data.ip || null,
      city: data.city || null,
      region: data.region || null,
      region_code: data.region_code || null,
      country: data.country_name || null,
      country_code: data.country || null,
      postal: data.postal || null,
      org: data.org || null,
      asn: data.asn || null,
      timezone: data.timezone || null,
      utc_offset: data.utc_offset || null,
      lastUpdated: serverTimestamp(),
    };

    await set(ref(rtdb, `location/${userId}`), loc);
    return loc;
  } catch (e) {
    console.warn("trackLocation error:", e);
    return null;
  }
};

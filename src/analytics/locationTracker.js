import { ref, set, serverTimestamp } from "firebase/database";
import { rtdb } from "../firebase/config";

export const trackLocation = async (userId) => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    set(ref(rtdb, `location/${userId}`), {
      city: data.city,
      region: data.region,
      country: data.country_name,
      timezone: data.timezone,
      lastUpdated: serverTimestamp(),
    });
  } catch (e) {
    console.log("Location error", e);
  }
};

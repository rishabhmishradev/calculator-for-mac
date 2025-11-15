import { ref, set, serverTimestamp } from "firebase/database";
import { rtdb } from "../firebase/config";
import { getDeviceInfo } from "./deviceInfo";

let sessionId = null;
let sessionStart = null;

export const startSession = (userId) => {
  sessionId = crypto.randomUUID();
  sessionStart = Date.now();

  set(ref(rtdb, `sessions/${userId}/${sessionId}`), {
    startTime: serverTimestamp(),
    device: getDeviceInfo(),
  });
};

export const endSession = (userId) => {
  if (!sessionId) return;

  const end = Date.now();

  set(ref(rtdb, `sessions/${userId}/${sessionId}/endTime`), serverTimestamp());
  set(ref(rtdb, `sessions/${userId}/${sessionId}/duration`), end - sessionStart);
};

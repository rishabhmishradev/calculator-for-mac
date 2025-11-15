import { ref, push, serverTimestamp } from "firebase/database";
import { rtdb } from "../firebase/config";

export const initCrashLogger = (userId) => {
  window.onerror = function (msg, url, line, col, error) {
    push(ref(rtdb, `crashes/${userId}`), {
      msg,
      url,
      line,
      col,
      stack: error?.stack,
      time: serverTimestamp(),
    });
  };
};

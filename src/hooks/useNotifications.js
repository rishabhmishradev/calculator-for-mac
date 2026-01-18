import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../firebase/config";
import { rtdb } from "../firebase/config";
import { ref, set } from "firebase/database";

const VAPID_KEY =
  "BBQ93jERORO4fsQpJyScu2wH7MNzCaq3tY6NwN9tv_lRbw_w3_YDUgspftwzAhNf80QP8QOWRC7TPdWYQiCYs";

export const initNotifications = async (userName) => {
  try {
    if (!messaging) {
      console.warn("Messaging not supported");
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission !== "granted") return;

    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
    });

    if (token) {
      await set(ref(rtdb, `fcmTokens/${userName}`), token);
      console.log("✅ FCM token saved:", token);
    }
  } catch (err) {
    console.error("❌ FCM error", err);
  }
};

// ✅ Foreground notification
if (messaging) {
  onMessage(messaging, (payload) => {
    new Notification(payload.notification?.title || "New message", {
      body: payload.notification?.body,
      icon: "/icon-512.png",
    });
  });
}

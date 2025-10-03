import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyB87mpvHRLT1bjn8Tcqor7qzulV-T68vE0",
  authDomain: "chat-40d42.firebaseapp.com",
  databaseURL: "https://chat-40d42-default-rtdb.asia-southeast1.firebasedatabase.app", 
  projectId: "chat-40d42",
  storageBucket: "chat-40d42.appspot.com",
  messagingSenderId: "1080730028272",
  appId: "1:1080730028272:web:18a313652e0ee721035a35",
  measurementId: "G-HG8E0J3W2W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);

// Initialize Firebase Messaging
export const messaging = getMessaging(app);

// Request notification permission and get FCM token
export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      // Get FCM token
      const token = await getToken(messaging, {
        vapidKey: 'BBQ93jERORO4fSQpJyYScu2vwH7MNzCaq3tY6NwN9tv_1Rbv_w3_YDUgspftwzAhNf80QP8QOWRC7TPdWYQiCYs' // You'll need to generate this
      });
      console.log('FCM Token:', token);
      return token;
    } else {
      console.log('Notification permission denied');
      return null;
    }
  } catch (error) {
    console.error('Error getting notification permission:', error);
    return null;
  }
};

// Listen for foreground messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

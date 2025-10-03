// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyB87mpvHRLT1bjn8Tcqor7qzulV-T68vE0",
  authDomain: "chat-40d42.firebaseapp.com",
  databaseURL: "https://chat-40d42-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-40d42",
  storageBucket: "chat-40d42.appspot.com",
  messagingSenderId: "1080730028272",
  appId: "1:1080730028272:web:18a313652e0ee721035a35"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);
  
  const notificationTitle = payload.notification.title || 'New Message';
  const notificationOptions = {
    body: payload.notification.body || 'You have a new message',
    icon: '/penguin.png', // Your app icon
    badge: '/penguin.png',
    tag: 'message-notification',
    requireInteraction: true,
    // Play notification sound
    silent: false,
    sound: '/', // Add a notification sound file to public folder
    vibrate: [200, 100, 200],
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  event.notification.close();

  // Open the app when notification is clicked
  event.waitUntil(
    clients.openWindow('/')
  );
});

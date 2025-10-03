// public/firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB87mpvHRLT1bjn8Tcqor7qzulV-T68vE0",
  authDomain: "chat-40d42.firebaseapp.com",
  projectId: "chat-40d42",
  storageBucket: "chat-40d42.appspot.com",
  messagingSenderId: "1080730028272",
  appId: "1:1080730028272:web:18a313652e0ee721035a35",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("📩 Background message received: ", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/penguin.png", // apna icon daal sakta hai
  });
});

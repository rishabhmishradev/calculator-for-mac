import { useEffect, useState } from 'react';
import { requestNotificationPermission, onMessageListener } from '../firebase/config';

export const useNotifications = (currentUser) => {
  const [notificationToken, setNotificationToken] = useState(null);

  // Play notification sound
  const playNotificationSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.volume = 0.7;
    audio.play().catch(err => console.log('Sound play error:', err));
  };

  // Show browser notification with sound
  const showNotification = (title, body, sender) => {
    if (Notification.permission === 'granted') {
      const notification = new Notification(title, {
        body,
        icon: '/penguin.png',
        badge: '/penguin.png',
        tag: 'message-notification',
        requireInteraction: false,
        silent: false,
        vibrate: [200, 100, 200],
        data: { sender }
      });

      // Play sound
      playNotificationSound();

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      // Auto close after 5 seconds
      setTimeout(() => notification.close(), 5000);
    }
  };

  // Initialize notifications
  useEffect(() => {
    if (!currentUser) return;

    const initNotifications = async () => {
      // Request permission and get token
      const token = await requestNotificationPermission();
      if (token) {
        setNotificationToken(token);
        console.log('FCM Token registered:', token);
        
        // Save token to database (optional)
        // You can save this to Firebase Database or Firestore
      }
    };

    initNotifications();

    // Listen for foreground messages
    onMessageListener()
      .then((payload) => {
        console.log('Foreground message received:', payload);
        
        const title = payload.notification?.title || 'New Message';
        const body = payload.notification?.body || 'You have a new message';
        const sender = payload.data?.sender || 'Unknown';

        // Show notification only if sender is not current user
        if (sender !== currentUser.name) {
          showNotification(title, body, sender);
        }
      })
      .catch((err) => console.log('Failed to receive message:', err));
  }, [currentUser]);

  return { notificationToken, showNotification };
};

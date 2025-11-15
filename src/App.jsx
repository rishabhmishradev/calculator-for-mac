import React, { useState, useEffect } from "react";
import { ref, onValue, set } from "firebase/database";
import { rtdb } from "./firebase/config";

// Components
import AuthScreen from "./components/AuthScreen";
import Navigation from "./components/Navigation";
import ChatRoom from "./components/ChatRoom";
import GamesSection from "./components/GamesSection";
import CreativeZone from "./components/CreativeZone";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeSection, setActiveSection] = useState("chat");
  const [messages, setMessages] = useState([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [userPresence, setUserPresence] = useState({ isOnline: false, lastSeen: null });
  const [usersMap, setUsersMap] = useState({});
  const [impersonateUser, setImpersonateUser] = useState(null);

  const [gameStates, setGameStates] = useState({
    rps: { scores: { player1: 0, player2: 0 } },
    tictactoe: {
      board: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
      scores: { X: 0, O: 0 },
    },
  });

  // Load User from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("chatUser");
    if (savedUser) setCurrentUser(JSON.parse(savedUser));
  }, []);

  // Online/Offline
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Real-time Messages
  useEffect(() => {
    if (!currentUser) return;

    const messagesRef = ref(rtdb, "messages");
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messagesList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setMessages(
          messagesList.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        );
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Track Own Presence
  useEffect(() => {
    if (!currentUser) return;

    const userRef = ref(rtdb, `users/${currentUser.name}`);

    set(userRef, {
      name: currentUser.name,
      isOnline: true,
      lastSeen: Date.now(),
    });

    const interval = setInterval(() => {
      set(userRef, {
        name: currentUser.name,
        isOnline: true,
        lastSeen: Date.now(),
      });
    }, 30000);

    return () => {
      clearInterval(interval);
      set(userRef, {
        name: currentUser.name,
        isOnline: false,
        lastSeen: Date.now(),
      });
    };
  }, [currentUser]);

  // Fetch All Users
  useEffect(() => {
    const usersRef = ref(rtdb, "users");
    const unsubscribe = onValue(usersRef, (snapshot) => {
      setUsersMap(snapshot.val() || {});
    });

    return () => unsubscribe();
  }, []);

  // Game States Listener
  useEffect(() => {
    if (!currentUser) return;

    const gameRef = ref(rtdb, "gameStates");
    const unsubscribe = onValue(gameRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setGameStates(data);
    });

    return () => unsubscribe();
  }, [currentUser]);

  const updateGameState = (newState) => {
    setGameStates(newState);
    set(ref(rtdb, "gameStates"), newState);
  };

  // If not logged in → Show Auth
  if (!currentUser) {
    return <AuthScreen setCurrentUser={setCurrentUser} isOnline={isOnline} />;
  }

  return (
    <div className="h-screen w-screen bg-gray-950 flex flex-col overflow-hidden">
      <Navigation
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        isOnline={isOnline}
        userPresence={userPresence}
        usersMap={usersMap}
        setImpersonateUser={setImpersonateUser}   
      />

      <main className="flex-1 flex flex-col overflow-hidden">
  {activeSection === "chat" && (
    <ChatRoom
      currentUser={currentUser}
      isOnline={isOnline}
      messages={messages}
      usersMap={usersMap}
    />
  )}

  {activeSection === "games" && (
    <GamesSection
      gameStates={gameStates}
      updateGameState={updateGameState}
      isOnline={isOnline}
    />
  )}

  {activeSection === "creative" && <CreativeZone />}
</main>

    </div>
  );
};

export default App;

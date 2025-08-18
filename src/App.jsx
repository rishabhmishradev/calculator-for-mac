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
  const [gameStates, setGameStates] = useState({
    rps: { scores: { player1: 0, player2: 0 } },
    tictactoe: {
      board: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
      scores: { X: 0, O: 0 },
    },
  });

  // Online/Offline Status
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

  // Real-time Messages Listener
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

  // Real-time Game State Sync
  useEffect(() => {
    if (!currentUser) return;

    const gameRef = ref(rtdb, "gameStates");
    const unsubscribe = onValue(gameRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setGameStates(data);
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  const updateGameState = (newGameStates) => {
    setGameStates(newGameStates);
    if (currentUser) {
      const gameRef = ref(rtdb, "gameStates");
      set(gameRef, newGameStates);
    }
  };

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
    />

    <main className="flex-1 flex flex-col overflow-hidden">
      {activeSection === "chat" && (
        <ChatRoom
          currentUser={currentUser}
          isOnline={isOnline}
          messages={messages}
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

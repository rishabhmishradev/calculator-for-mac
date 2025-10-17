import React, { useEffect, useRef, useState } from "react";
import { ref, push, set, serverTimestamp, onValue } from "firebase/database";
import { rtdb } from "../firebase/config";
import { Send } from "lucide-react";

const ChatRoom = ({ currentUser, isOnline, messages, usersMap }) => {
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [typingStatus, setTypingStatus] = useState({});
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef(null);

  // ✅ Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // ✅ Typing indicator listener
  useEffect(() => {
    const typingRef = ref(rtdb, "typing");
    const unsubscribe = onValue(typingRef, (snapshot) => {
      const data = snapshot.val() || {};
      setTypingStatus(data);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Update typing status in DB
  const updateTypingStatus = (status) => {
    if (!currentUser) return;
    const typingRef = ref(rtdb, `typing/${currentUser.name}`);
    set(typingRef, {
      name: currentUser.name,
      isTyping: status,
      timestamp: Date.now(),
    });
  };

  // ✅ Handle input typing
  const handleTyping = (e) => {
    setNewMessage(e.target.value);
    if (!isTyping) {
      setIsTyping(true);
      updateTypingStatus(true);
    }

    clearTimeout(handleTyping.timeout);
    handleTyping.timeout = setTimeout(() => {
      setIsTyping(false);
      updateTypingStatus(false);
    }, 2000);
  };

  // ✅ Send message
  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const messagesRef = ref(rtdb, "messages");
    const messageData = {
      text: newMessage,
      sender: currentUser.name,
      createdAt: serverTimestamp(),
    };

    push(messagesRef, messageData);
    setNewMessage("");
    updateTypingStatus(false);
    setIsTyping(false);
  };

  // ✅ Scroll handling
  const handleScroll = () => {
    if (!messagesContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
    const atBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollButton(!atBottom);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Show other users typing
  const activeTypingUsers = Object.entries(typingStatus)
    .filter(([name, data]) => name !== currentUser.name && data.isTyping)
    .map(([name]) => name);

  return (
    <div className="flex flex-col flex-1 bg-black text-white">
      {/* Chat Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-3"
        onScroll={handleScroll}
        ref={messagesContainerRef}
      >
        {messages.map((msg) => {
          const isOwn = msg.sender === currentUser.name;
          return (
            <div
              key={msg.id}
              className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl shadow-md ${
                  isOwn
                    ? "bg-purple-600 text-white rounded-br-none"
                    : "bg-gray-800 text-gray-200 rounded-bl-none"
                }`}
              >
                <p className="text-sm break-words">{msg.text}</p>
                <span className="text-[10px] text-gray-400 block mt-1">
                  {msg.sender}
                </span>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Typing Indicator */}
      {activeTypingUsers.length > 0 && (
        <div className="px-4 py-1 text-xs text-gray-400 animate-pulse">
          {activeTypingUsers.join(", ")} typing...
        </div>
      )}

      {/* Input Bar */}
      <div className="flex items-center gap-2 border-t border-gray-800 bg-gray-900 px-4 py-3">
        <input
          type="text"
          placeholder={
            isOnline ? "Type a message..." : "You are offline. Messages paused."
          }
          value={newMessage}
          onChange={handleTyping}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 bg-gray-800 text-white placeholder-gray-500 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          disabled={!isOnline}
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-all"
          disabled={!isOnline}
        >
          <Send size={18} />
        </button>
      </div>

      {/* Scroll to Bottom Button */}
      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-24 right-6 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition"
        >
          ↓
        </button>
      )}
    </div>
  );
};

export default ChatRoom;

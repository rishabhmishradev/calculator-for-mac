import React, { useState, useEffect, useRef } from "react";
import { ref, push, serverTimestamp } from "firebase/database";
import { rtdb } from "../firebase/config";
import { Send, MessageCircle, Wifi, WifiOff } from "lucide-react";

const ChatRoom = ({ currentUser, isOnline, messages }) => {
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (newMessage.trim() && currentUser && isOnline) {
      try {
        const messagesRef = ref(rtdb, "messages");
        await push(messagesRef, {
          text: newMessage,
          sender: currentUser.name,
          timestamp: serverTimestamp(),
          createdAt: new Date().toISOString(),
        });
        setNewMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const addEmoji = (emoji) => {
    setNewMessage(newMessage + emoji);
  };

  return (
    <div className="flex flex-col flex-1 w-full bg-gray-900 overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 sm:p-4">
        <div className="flex">
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-1">Chat App 💬</h2>
            <p className="text-purple-100 text-xs sm:text-sm">Start Messaging</p>
          </div>
          <div
            className={`flex items-center space-x-1 text-xs sm:text-sm ${
              isOnline ? "text-green-200" : "text-red-200"
            }`}
          >
            {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
            <span className="hidden sm:inline">
              {isOnline ? "Connected" : "Offline"}
            </span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gradient-to-b from-gray-50 to-white">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-8 sm:mt-16">
            <MessageCircle
              size={48}
              className="sm:w-16 sm:h-16 mx-auto mb-3 opacity-30"
            />
            <p className="text-base sm:text-lg mb-2">No messages yet</p>
            <p className="text-xs sm:text-sm">Start the conversation! 🚀</p>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === currentUser.name
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs sm:max-w-sm px-3 py-2 sm:px-4 sm:py-3 rounded-2xl shadow-sm ${
                    message.sender === currentUser.name
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-white text-gray-800 border border-gray-100"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <p
                      className={`text-xs font-medium ${
                        message.sender === currentUser.name
                          ? "text-purple-200"
                          : "text-purple-600"
                      }`}
                    >
                      {message.sender}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {message.text}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === currentUser.name
                        ? "text-purple-200"
                        : "text-gray-500"
                    }`}
                  >
                    {message.createdAt
                      ? new Date(message.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "Sending..."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
     <div className="p-2 sm:p-4 bg-white border-t border-gray-100">
        {/* Emoji Bar */}
        <div className="flex space-x-1 sm:space-x-2 mb-2 overflow-x-auto scrollbar-hide">
          {["😊", "😂", "❤️", "👍", "🎉", "🔥", "💯", "🤔", "😍", "🥳"].map(
            (emoji) => (
              <button
                key={emoji}
                onClick={() => addEmoji(emoji)}
                className="text-base sm:text-xl hover:bg-gray-100 rounded-lg p-1 sm:p-2 flex-shrink-0 transition-colors"
              >
                {emoji}
              </button>
            )
          )}
        </div>

        {/* Input & Send */}
        <div className="flex space-x-2 sm:space-x-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder={
              isOnline ? "Type your message... " : "No internet connection"
            }
            disabled={!isOnline}
            className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
          />
          <button
            onClick={sendMessage}
            disabled={!isOnline || !newMessage.trim()}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-400 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all shadow-lg"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;

import React, { useState, useEffect, useRef } from "react";
import { ref, push, serverTimestamp } from "firebase/database";
import { rtdb } from "../firebase/config";
import { Send, MessageCircle, Smile } from "lucide-react";

const ChatRoom = ({ currentUser, isOnline, messages }) => {
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // 👇 Function to scroll to bottom
  const scrollToBottom = (behavior = "auto") => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior });
    }
    // Alternative method - scroll container to bottom
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  // 👇 Always keep user at bottom - no matter what
  useEffect(() => {
    scrollToBottom("auto");
  }, []); // Initial mount

  useEffect(() => {
    scrollToBottom("auto"); // Instant scroll for all message updates
  }, [messages]); // Every time messages change

  // 👇 Force bottom position on any container change
  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isTyping]); // Also when typing indicator appears/disappears

  // Handle typing indicator
  const handleInputChange = (e) => {
    setNewMessage(e.target.value);

    if (e.target.value.trim()) {
      if (!isTyping) {
        setIsTyping(true);
      }

      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      typingTimeoutRef.current = setTimeout(() => {
        setIsTyping(false);
      }, 1500);
    } else {
      setIsTyping(false);
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    }
  };

  const sendMessage = async () => {
    if (newMessage.trim() && currentUser && isOnline) {
      try {
        setIsTyping(false);
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }

        const messagesRef = ref(rtdb, "messages");
        await push(messagesRef, {
          text: newMessage,
          sender: currentUser.name,
          timestamp: serverTimestamp(),
          createdAt: new Date().toISOString(),
        });
        setNewMessage("");
        setShowEmojiPicker(false);
        
        // 👇 Immediately force scroll to bottom after sending
        setTimeout(() => {
          scrollToBottom("auto");
          if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
          }
        }, 50);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const addEmoji = (emoji) => {
    const newText = newMessage + emoji;
    setNewMessage(newText);
    setShowEmojiPicker(false);

    if (!isTyping) {
      setIsTyping(true);
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 1500);
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const emojiList = ["😊", "😂", "❤️", "👍", "🎉", "🔥", "💯", "🤔", "😍", "🥳"];

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Messages Container */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-zinc-900 to-black"
        style={{ 
          scrollBehavior: 'auto', // Changed to auto for instant scrolling
          overflowAnchor: 'none' // Prevents automatic scroll adjustment
        }}
      >
        {messages.length === 0 ? (
          <div className="text-center text-zinc-400 mt-32">
            <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <h3 className="text-xl font-semibold mb-2 text-zinc-300">No messages yet</h3>
            <p className="text-zinc-500">Start the conversation ✨</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === currentUser?.name ? "justify-end" : "justify-start"
                }`}
              >
                <div className="max-w-xs sm:max-w-sm lg:max-w-md">
                  <div
                    className={`px-4 py-3 rounded-2xl shadow-lg ${
                      message.sender === currentUser?.name
                        ? "bg-gradient-to-r from-amber-500 to-yellow-600 text-black"
                        : "bg-gradient-to-r from-zinc-800 to-zinc-700 text-white border border-zinc-600"
                    }`}
                  >
                    {message.sender !== currentUser?.name && (
                      <p className="text-xs font-semibold text-amber-400 mb-2 tracking-wide">
                        {message.sender}
                      </p>
                    )}
                    <p className="text-sm leading-relaxed mb-2">{message.text}</p>
                    <p
                      className={`text-xs opacity-70 ${
                        message.sender === currentUser?.name ? "text-black" : "text-zinc-400"
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
              </div>
            ))}

            
        {/* 👇 Invisible div for scrolling reference */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="p-4 bg-zinc-900">
        {showEmojiPicker && (
          <div className="mb-4 p-3 bg-zinc-800 rounded-xl border border-zinc-700">
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {emojiList.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => addEmoji(emoji)}
                  className="text-xl p-2 hover:bg-zinc-700 rounded-lg transition-colors hover:scale-110 transform"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors border border-zinc-700"
            disabled={!isOnline}
          >
            <Smile className="w-5 h-5 text-amber-400" />
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder={isOnline ? "Type a message..." : "No connection"}
              disabled={!isOnline}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all disabled:opacity-50"
            />
            {newMessage && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>

          <button
            onClick={sendMessage}
            disabled={!isOnline || !newMessage.trim()}
            className="p-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 disabled:from-zinc-700 disabled:to-zinc-600 text-black rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        {isOnline && (
          <div className="flex items-center justify-center mt-3">
            <div className="flex items-center space-x-2 text-xs text-zinc-500">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Connected</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatRoom;

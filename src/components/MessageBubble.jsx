import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import { useLongPress } from "../utils/useLongPress";
import { editMessage, deleteMessage } from "../utils/messageActions";

const MessageBubble = ({ message, currentUser, menuOpenId, setMenuOpenId }) => {
  // ✅ Long press hook yaha safe hai
  const longPressHandlers = useLongPress(() => {
    if (message.sender === currentUser.name && !message.deleted) {
      const action = window.prompt("Type: edit or delete");
      if (action === "edit") {
        const newText = prompt("Edit message:", message.text);
        if (newText && newText.trim()) {
          editMessage(message.id, newText.trim());
        }
      } else if (action === "delete") {
        deleteMessage(message.id);
      }
    }
  }, 600);

  return (
    <div
      className={`flex ${
        message.sender === currentUser.name ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`relative max-w-[80%] sm:max-w-sm px-3 py-2 sm:px-4 sm:py-3 rounded-2xl shadow-sm break-words ${
          message.sender === currentUser.name
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            : "bg-white text-gray-800 border border-gray-100"
        }`}
        {...longPressHandlers}
      >
        <p
          className={`text-[10px] sm:text-xs font-medium mb-1 ${
            message.sender === currentUser.name
              ? "text-purple-200"
              : "text-purple-600"
          }`}
        >
          {message.sender}
        </p>

        <p
          className={`text-sm sm:text-base ${
            message.deleted ? "italic opacity-60" : ""
          }`}
        >
          {message.text}
        </p>

        {message.edited && !message.deleted && (
          <p className="text-[10px] italic mt-1 opacity-70">(edited)</p>
        )}

        <p
          className={`text-[10px] sm:text-xs mt-1 ${
            message.sender === currentUser.name
              ? "text-purple-200"
              : "text-gray-500"
          }`}
        >
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>

        {message.sender === currentUser.name && !message.deleted && (
          <div className="hidden sm:block absolute top-1 right-1">
            <button
              onClick={() =>
                setMenuOpenId(menuOpenId === message.id ? null : message.id)
              }
              className="p-1 hover:bg-white/20 rounded-full"
            >
              <MoreVertical size={16} />
            </button>

            {menuOpenId === message.id && (
              <div className="absolute right-0 mt-1 bg-white text-gray-800 rounded-lg shadow-lg text-sm z-10">
                <button
                  onClick={() => {
                    const newText = prompt("Edit message:", message.text);
                    if (newText && newText.trim()) {
                      editMessage(message.id, newText.trim());
                    }
                    setMenuOpenId(null);
                  }}
                  className="block w-full px-3 py-1 hover:bg-gray-100 text-left"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => {
                    deleteMessage(message.id);
                    setMenuOpenId(null);
                  }}
                  className="block w-full px-3 py-1 hover:bg-gray-100 text-left"
                >
                  ❌ Delete
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;

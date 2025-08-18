import React from "react";
import { User } from "lucide-react";
import { ref, set, serverTimestamp } from "firebase/database";
import { rtdb } from "../firebase/config";

const Navigation = ({ currentUser, setCurrentUser, setActiveSection, activeSection, isOnline }) => {
  const navItems = [
    { id: "chat", label: "Chat" },
    { id: "games", label: "Games" },
    { id: "creative", label: "Creative" },
  ];

  const handleLogout = () => {
    if (currentUser) {
      const userRef = ref(rtdb, `users/${currentUser.name}`);
      set(userRef, {
        name: currentUser.name,
        lastSeen: serverTimestamp(),
        isOnline: false,
      });
    }
    setCurrentUser(null);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-8 h-8 flex items-center justify-center">
              <User className="text-white" size={14} />
            </div>
            <span className="font-semibold text-gray-800 text-sm">
              {currentUser?.name}
            </span>
            <div
              className={`w-2 h-2 rounded-full ${
                isOnline ? "bg-green-400" : "bg-red-400"
              }`}
            ></div>
          </div>

          <div className="flex space-x-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`px-3 py-1 rounded-lg ${
                  activeSection === id
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-50"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

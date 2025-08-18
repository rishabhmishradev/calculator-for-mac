import React from "react";
import { LogOut } from "lucide-react";

const Navigation = ({ currentUser, setCurrentUser, setActiveSection, activeSection, isOnline }) => {
  const handleLogout = () => {
    // LocalStorage se user delete karo
    localStorage.removeItem("chatUser");

    // State reset karo
    setCurrentUser(null);
    setActiveSection("chat");
  };

  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-4 py-2 shadow-md">
      <div className="flex gap-4">
        <button
          onClick={() => setActiveSection("chat")}
          className={`${activeSection === "chat" ? "text-purple-400" : ""}`}
        >
          Chat
        </button>
        <button
          onClick={() => setActiveSection("games")}
          className={`${activeSection === "games" ? "text-purple-400" : ""}`}
        >
          Games
        </button>
        <button
          onClick={() => setActiveSection("creative")}
          className={`${activeSection === "creative" ? "text-purple-400" : ""}`}
        >
          Creative
        </button>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-300">{currentUser?.name}</span>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg text-sm"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

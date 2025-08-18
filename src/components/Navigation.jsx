import React, { useState } from "react";
import { LogOut, MessageCircle, Gamepad2, Palette, Menu, X } from "lucide-react";

const Navigation = ({ currentUser, setCurrentUser, setActiveSection, activeSection }) => {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("chatUser");
    setCurrentUser(null);
    setActiveSection("chat");
    setOpen(false);
  };

  const navItems = [
    { key: "chat", label: "Chat", icon: <MessageCircle size={18} /> },
    { key: "games", label: "Games", icon: <Gamepad2 size={18} /> },
    { key: "creative", label: "Creative", icon: <Palette size={18} /> },
  ];

  const NavButton = ({ item, isMobile = false }) => (
    <button
      onClick={() => {
        setActiveSection(item.key);
        if (isMobile) setOpen(false);
      }}
      className={`flex items-center gap-2 text-sm font-medium transition-all duration-200
        ${
          activeSection === item.key
            ? "text-purple-400 md:border-b-2 md:border-purple-400 md:pb-1"
            : "text-gray-300 hover:text-purple-300"
        }`}
    >
      {item.icon}
      <span>{item.label}</span>
    </button>
  );

  return (
    <header className="sticky top-0 z-50">
      <nav className="backdrop-blur-md bg-gray-900/95 border-b border-gray-800 text-white px-4 md:px-8 py-3 shadow-lg">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          {/* Left: Brand / Menu */}
          <div className="flex items-center gap-3">
            {/* Brand */}
            <div className="text-lg font-semibold tracking-wide">PrivateSpace</div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8 ml-6">
              {navItems.map((item) => (
                <NavButton key={item.key} item={item} />
              ))}
            </div>
          </div>

          {/* Right: User + Logout (desktop) */}
          <div className="hidden md:flex items-center gap-5">
            <span className="text-sm font-medium text-gray-200 bg-gray-800 px-4 py-1.5 rounded-full shadow">
              {currentUser?.name}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-800/60 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-80" : "max-h-0"
          }`}
        >
          <div className="pt-3 pb-4 border-t border-gray-800">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavButton key={item.key} item={item} isMobile />
              ))}
            </div>

            <div className="mt-4 h-px bg-gray-800" />

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-200 bg-gray-800 px-3 py-1.5 rounded-full">
                {currentUser?.name}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-sm font-medium shadow-md transition-all"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

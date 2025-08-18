import React, { useState, useEffect } from "react";
import { ref, set, serverTimestamp } from "firebase/database";
import { rtdb } from "../firebase/config";
import { Lock, Wifi, WifiOff } from "lucide-react";

const AuthScreen = ({ setCurrentUser, isOnline }) => {
  const [name, setName] = useState("");
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // check localStorage
    const savedUser = localStorage.getItem("chatUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, [setCurrentUser]);

  const handleLogin = () => {
    const validUsers = {
      Rishabh: "1234",
      Saman: "chudail",
    };

    if (validUsers[name] === passcode) {
      const user = { name, id: name };
      setCurrentUser(user);
      localStorage.setItem("chatUser", JSON.stringify(user)); // ✅ save to localStorage
      setError("");

      const userRef = ref(rtdb, `users/${name}`);
      set(userRef, {
        name,
        lastSeen: serverTimestamp(),
        isOnline: true,
      });
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md border border-gray-700">
        <div className="text-center mb-6">
          <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
            <Lock className="text-purple-400" size={20} />
          </div>
          <h1 className="text-xl font-bold text-white mb-2">CHAT APP</h1>
          <p className="text-sm text-gray-400">Enter your credentials to access</p>
          <div
            className={`flex items-center justify-center mt-2 text-xs ${
              isOnline ? "text-green-400" : "text-red-400"
            }`}
          >
            {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
            <span className="ml-1">{isOnline ? "Online" : "Offline"}</span>
          </div>
        </div>

        <div className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            className="w-full px-4 py-2 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-500"
          />
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Passcode"
            onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            className="w-full px-4 py-2 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-500"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            onClick={handleLogin}
            disabled={!isOnline}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl transition"
          >
            {isOnline ? "Login" : "No Internet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;

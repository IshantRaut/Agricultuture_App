import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("currentUser");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (userObj) => {
    localStorage.setItem("currentUser", JSON.stringify(userObj));
    localStorage.setItem("isLoggedIn", "true");
    setUser(userObj);
    window.dispatchEvent(new Event("authChange"));
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token"); 
    setUser(null);
    window.dispatchEvent(new Event("authChange"));
  };

  useEffect(() => {
    const syncUser = () => {
      const stored = localStorage.getItem("currentUser");
      setUser(stored ? JSON.parse(stored) : null);
    };
    window.addEventListener("storage", syncUser);
    window.addEventListener("authChange", syncUser);
    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("authChange", syncUser);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

import React, { createContext, useContext, useState, memo } from "react";


const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("token"));

  const login = () => {
    sessionStorage.setItem("token", true);

    setIsLoggedIn(true);
  };

  const logout = () => {
    sessionStorage.setItem("token", "");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default memo(AuthProvider);
export function useAuth() {
  return useContext(AuthContext);
}

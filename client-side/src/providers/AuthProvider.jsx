import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      try {
        const response = await fetch(`${API_URL}/users/api`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Failed to fetch user data");

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [token, API_URL]); // Added API_URL to the dependency array

  const logIn = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const authInfo = {
    user,
    token,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;

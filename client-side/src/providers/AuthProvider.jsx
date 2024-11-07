import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userdata, setUserData] = useState(null);
  const [user, setUser] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      try {
        const response = await fetch(`${API_URL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Failed to fetch user data");

        const userData = await response.json();
        setUser(userData);
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [token, API_URL]); // Added API_URL to the dependency array

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };
  const createUser = async (name, email, password, role) => {
    try {
      const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          password,
          role, // Adjust based on your role system
        }),
      });

      const result = await response.json();
      if (response.ok) {
        const userData = { email };
        setUser(userData);
        localStorage.setItem("token", result.token);
        setToken(result.token); // Update the token state
      } else {
        throw new Error(result.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Rethrow the error to handle it in the component
    }
  };

  const signIn = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/users/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        const { userId } = result;
        const userData = { email, userId };
        setUser(userData);
        localStorage.setItem("token", result.token);
        setToken(result.token); // Update the token state
      } else {
        throw new Error(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      throw error; // Rethrow the error to handle it in the component
    }
  };
  const authInfo = {
    user,
    token,
    logOut,
    createUser,
    signIn,
    userdata,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://investkoree-backend.onrender.com/api";

  useEffect(() => {
    // Check for session token in local storage
    const token = localStorage.getItem("sessionToken");
    if (token) {
      // If token exists, fetch user details using the token
      fetchUserData(token);
    } else {
      setLoading(false);
    }
  }, [API_URL]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch(`${API_URL}/users/me`, {
        method: "get",
        credentials: "include",
        headers: {
          Authorization: `Session ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }

      const userData = await response.json();
      setUser(userData); // This should update the user state
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
      localStorage.removeItem("sessionToken");
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (email, password, name) => {
    setLoading(true);
    try {
      // Create user in your backend API
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username: name,
          password,
          role: "investor",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create user");
      }

      const data = await response.json();
      // Store session token in localStorage
      localStorage.setItem("sessionToken", data.sessionToken);

      // Fetch user data after registration
      await fetchUserData(data.sessionToken);
    } catch (error) {
      toast.error("Error creating user: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign in");
      }

      const data = await response.json();
      localStorage.setItem("sessionToken", data.sessionToken);

      // Fetch user data after login
      await fetchUserData(data.sessionToken); // This should set the user state

      toast.success("Sign in successful!");
    } catch (error) {
      toast.error("Error signing in: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      localStorage.removeItem("sessionToken"); // Clear the session token from localStorage on logout
      setUser(null);
      setIsAuthenticated(false);
      toast.success("Signed out successfully!");
    } catch (error) {
      toast.error("Error signing out: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const authInfo = {
    user,
    loading,
    createUser,
    logOut,
    isAuthenticated,
    setUser,
    signIn,
    fetchUserData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

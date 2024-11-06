import { createContext, useEffect, useState, useContext } from "react";

import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userdata, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const API_URL =
    import.meta.env.VITE_API_URL || "https://investkoree-backend.onrender.com";

  useEffect(() => {
    const token = localStorage.getItem("jwt"); // Retrieve JWT token from localStorage
    if (token) {
      fetchUserData(token); // Fetch user data if token exists
    } else {
      setLoading(false); // No token, stop loading
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch(`${API_URL}/api/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch user data");

      const data = await response.json();
      setUserData(data);
      setUser(data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (email, password, name) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username: name,
          role: "investor", // Or dynamically set the role based on your logic
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create user");
      }

      const data = await response.json();
      // Store JWT token in localStorage
      localStorage.setItem("jwt", data.token);

      // Set user state with JWT token and user details
      setUser({ ...data.user, jwt: data.token });
      setIsAuthenticated(true);
      toast.success("User  created successfully!");
    } catch (error) {
      toast.error("Error creating user: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      // Fetch user credentials from backend
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email and password to the backend
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign in");
      }

      const data = await response.json();
      // Store JWT token in localStorage
      localStorage.setItem("jwt", data.token);

      setUser({ ...data.user, jwt: data.token }); // Set user state with JWT token and user details
      setIsAuthenticated(true);
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
      localStorage.removeItem("jwt");
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

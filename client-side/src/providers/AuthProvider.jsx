import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userdata, setUserData] = useState(null);
  const [user, setUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:10000";
  const navigate = useNavigate();
  const selectPost = (post) => {
    setSelectedPost(post); // Set the selected post
  };

  const clearSelectedPost = () => {
    setSelectedPost(null); // Clear the selected post
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;
      setLoading(true); // Set loading to true when fetching starts

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
      } finally {
        setLoading(false); // Set loading to false when fetching completes
      }
    };

    fetchUser();
  }, [token, API_URL]);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUserData(null);
  };

  const createUser = async (name, email, password, role) => {
    setLoading(true); // Set loading to true when registration starts
    try {
      const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password, role }),
      });

      const result = await response.json();
      if (response.ok) {
        const userData = { email, role };
        setUser(userData);
        localStorage.setItem("token", result.token);
        setToken(result.token);
      } else {
        throw new Error(result.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    } finally {
      setLoading(false); // Set loading to false when registration completes
    }
  };

  const foundersignIn = async (email, password) => {
    setLoading(true); // Set loading to true when sign-in starts
    try {
      const response = await fetch(`${API_URL}/users/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        const { userId, role } = result;

        if (role !== "founder") {
          throw new Error("Access denied: Only founders can log in here.");
        }

        const userData = { email, userId, role };
        setUser(userData);
        localStorage.setItem("token", result.token);
        setToken(result.token);
        navigate("/founderdashboard");
        toast.success("Login successful");
      } else {
        throw new Error(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setLoading(false); // Set loading to false when sign-in completes
    }
  };
  const investorsignIn = async (email, password) => {
    setLoading(true); // Set loading to true when sign-in starts
    try {
      const response = await fetch(`${API_URL}/users/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        const { userId, role } = result;

        if (role !== "investor") {
          throw new Error("Access denied: Only investors can log in here.");
        }

        const userData = { email, userId, role };
        setUser(userData);
        localStorage.setItem("token", result.token);
        setToken(result.token);
        navigate("/investordashboard");
        toast.success("Login successful");
      } else {
        throw new Error(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setLoading(false); // Set loading to false when sign-in completes
    }
  };
  const adminsignIn = async (email, password) => {
    setLoading(true); // Set loading to true when sign-in starts
    try {
      const response = await fetch(`${API_URL}/users/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        const { userId, role } = result;

        if (role !== "admin") {
          throw new Error("Access denied: Only admins can log in here.");
        }

        const userData = { email, userId, role };
        setUser(userData);
        localStorage.setItem("token", result.token);
        setToken(result.token);
        navigate("/admindashboard");
        toast.success("Login successful");
      } else {
        throw new Error(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setLoading(false); // Set loading to false when sign-in completes
    }
  };
  const authInfo = {
    user,
    token,
    logOut,
    createUser,
    foundersignIn,
    adminsignIn,
    investorsignIn,
    userdata,
    loading,
    selectedPost,
    selectPost,
    clearSelectedPost,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;

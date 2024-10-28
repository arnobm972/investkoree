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
    // Check if a JWT token exists in localStorage
    const token = localStorage.getItem("jwt");
    if (token) {
      // Optionally, you can fetch user details using the token
      fetch(`${API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed to fetch user details");
        })
        .then((userData) => {
          setUser(userData);
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.error(error);
          setUser(null);
          setIsAuthenticated(false);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const createUser = async (email, password, name) => {
    setLoading(true);
    try {
      // Send user data to your API for registration
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username: name,
          password,
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
      setLoading(false);
      return data.user; // Return the user data
    } catch (error) {
      setLoading(false);
      toast.error("Error creating user: " + error.message);
      throw error;
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
      setLoading(false);
      return data.user; // Return the user data
    } catch (error) {
      setLoading(false);
      toast.error("Error signing in: " + error.message);
      throw error;
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      localStorage.removeItem("jwt"); // Clear the JWT token from localStorage on logout
      setLoading(false);
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      setLoading(false);
      toast.error("Error signing out: " + error.message);
      throw error;
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

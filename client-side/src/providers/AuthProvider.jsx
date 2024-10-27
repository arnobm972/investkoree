import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://investkoree-backend.onrender.com/api";

  useEffect(() => {
    // Check for JWT token in local storage
    const token = localStorage.getItem("jwt");
    if (token) {
      // If token exists, fetch user details using the token
      fetch(`${API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch user details");
          }
          return response.json();
        })
        .then((userData) => {
          setUser(userData);
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          localStorage.removeItem("jwt"); // Remove invalid token
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [API_URL]);

  const createUser = async (email, password, name) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });
      const token = await user.getIdToken(); // Get the Firebase token

      // Send the token to the backend for JWT creation
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Attach Firebase token
        },
        body: JSON.stringify({
          email,
          username: name,
          role: "investor", // Or dynamically set the role based on your logic
        }),
      });

      const data = await response.json();
      // Store JWT token in localStorage
      localStorage.setItem("jwt", data.token);

      // Set user state with JWT token and user details
      setUser({ ...user, jwt: data.token });
      setIsAuthenticated(true);
      toast.success("User created successfully!");
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
      await signOut(auth);
      localStorage.removeItem("jwt"); // Clear the JWT token from localStorage on logout
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setLoading(false);
        setIsAuthenticated(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = async (email, password, name) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });
      setUser(user);
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
      // Set user state with JWT token and user details
      setUser({ ...user, jwt: data.token });

      setLoading(false);
      setIsAuthenticated(true);
      return user;
    } catch (error) {
      setLoading(false);
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
      setUser({ ...data.user, jwt: data.token }); // Set user state with JWT token and user details

      setLoading(false);
      setIsAuthenticated(true);
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
      await signOut(auth);
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

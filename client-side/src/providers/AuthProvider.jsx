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
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt && !user) {
      // Fetch user details with JWT
      fetchUserDetails(jwt);
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setIsAuthenticated(!!currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch(`${API_URL}/users/details`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const userDetails = await response.json();
        setUser({ ...user, ...userDetails });
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("jwt"); // Clean up if token is invalid
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const createUser = async (email, password, name) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });
      const token = await user.getIdToken();

      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email, username: name, role: "investor" }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Backend registration failed");
      }

      const data = await response.json();
      localStorage.setItem("jwt", data.token);
      setUser({ ...user, jwt: data.token });
      setIsAuthenticated(true);
    } catch (error) {
      toast.error("Error creating user: " + error.message);
      signOut(auth); // Clean up Firebase user on failure
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign in");
      }

      const data = await response.json();
      localStorage.setItem("jwt", data.token);
      setUser({ ...data.user, jwt: data.token });
      setIsAuthenticated(true);
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
      localStorage.removeItem("jwt");
      setUser(null);
      setIsAuthenticated(false);
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
    signIn,
    logOut,
    isAuthenticated,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

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
  const [userType, setUserType] = useState(null);

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
  const createUser = async (email, password, name, userType) => {
    setLoading(true);
    try {
      // Create user with email and password
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update the user profile with the display name
      await updateProfile(user, { displayName: name });

      // Update the user state with the newly updated user information
      if (userType) {
        setUser({ ...user, displayName: name, userType });
      } else {
        setUser({ ...user, displayName: name });
      }

      // Stop loading and set the user as authenticated
      setLoading(false);
      setIsAuthenticated(true);

      return user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signIn = async (email, password, userType) => {
    setLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      setIsAuthenticated(true);
      if (userType) {
        setUser({ ...user, userType });
      } else {
        setUser(user);
      }
      // console.log(user);

      return user;
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
    userType,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

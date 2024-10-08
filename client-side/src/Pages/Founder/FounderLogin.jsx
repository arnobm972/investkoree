import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";

const FounderLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const { createUser, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const password = form.get("u_signin_pass");
    const email = form.get("u_signin_email");

    try {
      await signIn(email, password, "founder");
      toast.success("Successfully Logged In");
      navigate("/founderdashboard");
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      toast.success("Successfully Logged In");
      navigate("/founderdashboard");
    } catch (error) {
      console.error(error);
      toast.error("Google sign-in failed. Please try again.");
    }
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("u_signup_name");
    const password = form.get("u_signup_password");
    const confirmPassword = form.get("u_signup_cpassword");
    const email = form.get("u_signup_email");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const minLength = 6;

    if (!uppercaseRegex.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!lowercaseRegex.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    if (password.length < minLength) {
      setError(`Password must be at least ${minLength} characters long`);
      return;
    }

    try {
      await createUser(email, password, name, "founder");
      toast.success("Successfully Registered");
      navigate("/founderdashboard");
    } catch (error) {
      console.error(error);
      toast.error("Error registering user. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  const togglePasswordVisibility3 = () => {
    setShowPassword3(!showPassword3);
  };
  return (
    <div className={`signcontainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Founder Sign in</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Email Address"
                name="u_signin_email"
                required
              />
            </div>
            <div className="input-field relative">
              <i className="fas fa-lock"></i>
              <input
                type={showPassword3 ? "text" : "password"}
                placeholder="Password"
                name="u_signin_pass"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility3}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword3 ? (
                  <i className="fas fa-eye"></i>
                ) : (
                  <i className="fas fa-eye-slash"></i>
                )}
              </button>
            </div>
            <input type="submit" value="Login" className="login-btn solid" />
            <button
              type="button"
              onClick={handleGoogleSignin}
              className="google-login-btn  mt-4"
            >
              <i className="fab fa-google"></i> Sign in with Google
            </button>
          </form>

          <form action="" className="sign-up-form" onSubmit={handleRegister}>
            <h2 className="title">Founder Sign up</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Full Name"
                name="u_signup_name"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email Address"
                name="u_signup_email"
                required
              />
            </div>
            <div className="input-field relative">
              <i className="fas fa-lock"></i>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="u_signup_password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword ? (
                  <i className="fas fa-eye"></i>
                ) : (
                  <i className="fas fa-eye-slash"></i>
                )}
              </button>
            </div>
            <div className="input-field relative">
              <i className="fas fa-lock"></i>
              <input
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirm Password"
                name="u_signup_cpassword"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility2}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword2 ? (
                  <i className="fas fa-eye"></i>
                ) : (
                  <i className="fas fa-eye-slash"></i>
                )}
              </button>
            </div>
            <input type="submit" className="login-btn" value="Sign up" />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Register now and start experiencing your new journey with us!</p>
            <button
              className="panel-btn transparent"
              id="sign-up-btn"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>What are you waiting for? Login now!</p>
            <button
              className="panel-btn transparent"
              id="sign-in-btn"
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FounderLogin;

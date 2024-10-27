import { useEffect, useState, useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Loader from "../../shared/Loader";

const InvestorLogin = () => {
  const { user, createUser, signIn, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState({
    login: false,
    register: false,
    confirm: false,
  });
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState({ login: false, register: false });
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    // Redirect to dashboard if user is logged in
    if (user) {
      navigate("/investordashboard");
    }
  }, [navigate, user]);

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Handle Login Submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading((prev) => ({ ...prev, login: true }));
    setError(null); // Reset error before login attempt

    const form = new FormData(e.currentTarget);
    const email = form.get("u_signin_email");
    const password = form.get("u_signin_pass");

    try {
      // Sign in user and get Firebase ID token
      const loggedInUser = await signIn(email, password); // signIn should return user and ID token
      const token = await loggedInUser.user.getIdToken(); // Get Firebase ID token

      // Fetch user details using the Firebase ID token
      const userResponse = await fetch(`${API_URL}/users/details`, {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure the token is sent for user details
        },
      });

      if (!userResponse.ok) {
        const errorResponse = await userResponse.json();
        throw new Error(
          errorResponse.message || "Failed to fetch user details"
        );
      }

      const userDetails = await userResponse.json();
      const userData = { firebaseUID: loggedInUser.user.uid, ...userDetails };

      // Update user in context
      setUser(userData);
      toast.success("Login successful");
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again."); // More generic error message
    } finally {
      setIsLoading((prev) => ({ ...prev, login: false }));
    }
  };

  // Handle Registration Submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading((prev) => ({ ...prev, register: true }));

    const form = new FormData(e.currentTarget);
    const username = form.get("u_signup_name");
    const email = form.get("u_signup_email");
    const password = form.get("u_signup_password");
    const confirmPassword = form.get("u_signup_cpassword");

    // Verify all fields have values
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      setIsLoading((prev) => ({ ...prev, register: false }));
      return;
    }

    // Validate password
    const passwordValidations = [
      {
        regex: /[A-Z]/,
        message: "Password must contain at least one uppercase letter",
      },
      {
        regex: /[a-z]/,
        message: "Password must contain at least one lowercase letter",
      },
      {
        regex: /.{6,}/,
        message: "Password must be at least 6 characters long",
      },
    ];

    for (const validation of passwordValidations) {
      if (!validation.regex.test(password)) {
        setError(validation.message);
        setIsLoading((prev) => ({ ...prev, register: false }));
        return;
      }
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading((prev) => ({ ...prev, register: false }));
      return;
    }

    try {
      // Create user in Firebase
      const userData = await createUser(email, password, username);
      const token = await userData.user.getIdToken(); // Get Firebase ID token

      // Send user details to your API
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use Firebase token for authorization
        },
        body: JSON.stringify({ email, username, password, role: "investor" }), // Send password for backend storage
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Failed to register");
      }

      toast.success("Registration successful");
    } catch (err) {
      console.error("Registration error:", err);
      toast.error(err.message || "Registration error");
      setError(err.message || "Registration error");
    } finally {
      setIsLoading((prev) => ({ ...prev, register: false }));
    }
  };

  return (
    <div className={`signcontainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Login Form */}
          <form
            onSubmit={handleLogin}
            className="sign-in-form sm:mr-4 xs:mr-4 xxs:mr-4 "
          >
            <h2 className="lg:text-4xl text-black mb-2 md:text-2xl sm:text-lg xxs:text-lg xs:text-lg">
              Investor Sign in
            </h2>
            {error && <p className="error-message">{error}</p>}
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="Email Address"
                name="u_signin_email"
                required
              />
            </div>
            <div className="input-field relative">
              <i className="fas fa-lock"></i>
              <input
                type={showPassword.login ? "text" : "password"}
                placeholder="Password"
                name="u_signin_pass"
                required
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("login")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword.login ? (
                  <i className="fas fa-eye"></i>
                ) : (
                  <i className="fas fa-eye-slash"></i>
                )}
              </button>
              {isLoading.login && <Loader />}
            </div>
            <input
              type="submit"
              value={isLoading.login ? "Logging in..." : "Login"}
              className="login-btn solid lg:w-96 sm:w-36 xxs:w-24 xs:w-32 md:lg:w-80"
              disabled={isLoading.login}
            />
          </form>

          {/* Register Form */}
          <form
            onSubmit={handleRegister}
            className="sign-up-form xs:ml-4 sm:ml-4 xxs:ml-4"
          >
            <h2 className="lg:text-4xl text-black mb-2 md:text-2xl sm:text-lg xxs:text-lg xs:text-lg">
              Investor Sign up
            </h2>
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
                type={showPassword.register ? "text" : "password"}
                placeholder="Password"
                name="u_signup_password"
                required
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("register")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword.register ? (
                  <i className="fas fa-eye"></i>
                ) : (
                  <i className="fas fa-eye-slash"></i>
                )}
              </button>
            </div>
            <div className="input-field relative">
              <i className="fas fa-lock"></i>
              <input
                type={showPassword.confirm ? "text" : "password"}
                placeholder="Confirm Password"
                name="u_signup_cpassword"
                required
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirm")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword.confirm ? (
                  <i className="fas fa-eye"></i>
                ) : (
                  <i className="fas fa-eye-slash"></i>
                )}
              </button>
              {isLoading.register && <Loader />}
            </div>
            <input
              type="submit"
              value={isLoading.register ? "Registering..." : "Sign up"}
              className="login-btn solid lg:w-96 sm:w-36 xxs:w-24 xs:w-32 md:lg:w-80"
              disabled={isLoading.register}
            />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Here?</h3>
            <p>
              Sign up to create an account and access exclusive features for
              investors.
            </p>
            <button
              className="login-btn transparent"
              id="sign-up-btn"
              onClick={() => setIsSignUpMode(true)}
            >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              If you already have an account, log in to access your dashboard
              and investment details.
            </p>
            <button
              className="login-btn transparent"
              id="sign-in-btn"
              onClick={() => setIsSignUpMode(false)}
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

export default InvestorLogin;

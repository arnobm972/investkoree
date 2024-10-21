import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authslice";
import Loader from "../../shared/Loader";

const InvestorLogin = () => {
  const [showPassword, setShowPassword] = useState({
    login: false,
    register: false,
    confirm: false,
  });
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/investordashboard");
    }
  }, [navigate, userInfo]);

  // Reset errors when switching between login and signup modes
  useEffect(() => {
    setError(null);
  }, [isSignUpMode]);

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    const form = new FormData(e.currentTarget);
    const name = form.get("u_signup_name");
    const password = form.get("u_signup_password");
    const confirmPassword = form.get("u_signup_cpassword");
    const email = form.get("u_signup_email");
    const role = "Investor";

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

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
        return;
      }
    }

    try {
      const res = await register({ email, password, name, role }).unwrap();
      dispatch(setCredentials(res));
      navigate("/investordashboard");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setError(null);

    const form = new FormData(e.currentTarget);
    const email = form.get("u_signin_email");
    const password = form.get("u_signin_pass");

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials(res));
      console.log(res);
      navigate("/investordashboard");
      toast.success("Logged in Successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className={`signcontainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form
            onSubmit={handleLogin}
            className="sign-in-form sm:mr-4 xs:mr-4 xxs:mr-4"
          >
            <h2 className="lg:text-4xl text-black mb-2  md:text-2xl sm:text-lg  xxs:text-lg xs:text-lg">
              Investor Sign in
            </h2>
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
              {isLoginLoading && <Loader />}
            </div>
            <input
              type="submit"
              value={isLoginLoading ? "Logging in..." : "Login"}
              className="login-btn solid lg:w-96 sm:w-36 xxs:w-24 xs:w-32 md:lg:w-80"
              disabled={isLoginLoading}
            />
          </form>

          <form
            className="sign-up-form xs:ml-4 sm:ml-4 xxs:ml-4"
            onSubmit={handleRegister}
          >
            <h2 className="lg:text-4xl text-black mb-2  md:text-2xl sm:text-lg xxs:text-lg xs:text-lg">
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
              {isRegisterLoading && <Loader />}
            </div>
            <input
              type="submit"
              value={isRegisterLoading ? "Signing up..." : "Sign up"}
              className="login-btn   lg:w-96 sm:w-36 xxs:w-24 xs:w-32 md:lg:w-80 solid"
              disabled={isRegisterLoading}
            />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel sm:mr-6 xs:mr-6 xxs:mr-6">
          <div className="content">
            <h3>New here?</h3>
            <p>Sign up to access exclusive features!</p>
            <button
              className="login-btn2  lg:w-96 sm:w-36 xxs:w-24 xs:w-32 md:lg:w-80 transparent"
              onClick={() => setIsSignUpMode(true)}
            >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel sm:ml-6 xs:ml-6 xxs:ml-6">
          <div className="content">
            <h3>One of us?</h3>
            <p>Log in to access your account.</p>
            <button
              className="login-btn2 lg:w-96 sm:w-36 xxs:w-24 xs:w-32 md:lg:w-80  transparent"
              onClick={() => setIsSignUpMode(false)}
            >
              Log in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default InvestorLogin;

import { useState } from "react";
import loginlogo from "../assets/logo.png";
import loginimg from "../assets/login-img.png";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="gap-56 flex ">
      <div className="w-[600px]">
        <img src={loginimg} alt="Login Image" className="login-img" />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <img src={loginlogo} alt="" />
        </div>
        <h2 className="text-2xl text-black font-bold mt-4 mb-4">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border border-blue-400 rounded py-2 px-3 text-gray-700  w-[400px] leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border border-blue-400 rounded py-2 px-3 text-gray-700  w-[400px] leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded  py-2 px-3  border-blue-400 text-gray-700 leading-tight  w-[400px] focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 top-44 left-[1195px] flex items-center pr-3 focus:outline-none"
            >
              {showPassword ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </button>
            <label htmlFor="remember" className="text-col text-sm">
              Remember me
            </label>
          </div>
          <div className="flex items-center justify-between">
            <Link to={"/dashboard"}>
              <button
                type="submit"
                className="login-btn hover:bg-blue-700 text-white font-bold py-2 px-4 w-[400px]  rounded focus:outline-none focus:shadow-outline"
              >
                Sign up
              </button>
            </Link>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:text-blue-700">
              Login here
            </a>
          </p>
        </div>
        <div className="mt-4 text-center"></div>
      </div>
    </div>
  );
};

export default Signup;

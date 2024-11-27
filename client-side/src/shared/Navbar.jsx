import { useState, useEffect, useRef } from "react"; // Import useState
import logo from "../assets/ll.png";
import { useNavigate, NavLink, Link } from "react-router-dom"; // Import Link
import { toast } from "react-toastify";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import notification icon
import { useAuth } from "../providers/AuthProvider";
import Notifications from "./Notifications";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:10000";
  const navigate = useNavigate();
  const { userdata, logOut } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleSignOut = () => {
    logOut();
    toast.success("Signed Out Successfully");
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null); // Close dropdowns when clicking outside
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);
  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="navbar px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-16 w-36" src={logo} alt="logo" />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="lg:hidden block">
          <button
            onClick={toggleMenu}
            className="sm:text-base xs:text-base xxs:text-base sm:font-medium xs:font-medium xxs:font-medium lg:text-2xl"
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Full Navbar for Larger Screens */}
        <div className={`hidden lg:flex flex-1 justify-center items-center`}>
          <ul
            ref={dropdownRef}
            className="lg:font-bold lg:text-lg sm:text-sm xs:text-sm xxs:text-sm sm:font-medium xs :font-medium xxs:font-medium menu menu-horizontal gap-8 px-1 flex"
          >
            <li>
              <NavLink
                to="/"
                className="hover:bg-salmon transition mt-2 hover:text-white p-2 rounded"
                activeclassname="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/founderlogin"
                className="hover:bg-salmon transition mt-2 hover:text-white p-2 rounded"
                activeclassname="active"
              >
                Get Funded
              </NavLink>
            </li>
            <li>
              <details open={activeDropdown === "category"}>
                <summary
                  onClick={(e) => {
                    e.preventDefault(); // Prevent native toggle behavior
                    toggleDropdown("category");
                  }}
                  className="hover:bg-salmon mt-2 p-2 rounded hover:text-white"
                >
                  Category
                </summary>
                {activeDropdown === "category" && (
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <NavLink
                        to="/shariah"
                        className="hover:bg-salmon transition sm:mb-2 xs:mb-2 xxs:mb-2 hover:text-white p-2 rounded"
                        activeclassname="active"
                      >
                        Shariah
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/stocks"
                        className="hover:bg-salmon transition sm:mb-2 xs:mb-2 xxs:mb-2 hover:text-white p-2 rounded"
                        activeclassname="active"
                      >
                        Stocks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/fixedreturn"
                        className="hover:bg-salmon transition hover:text-white p-2 rounded"
                        activeclassname="active"
                      >
                        Fixed Return
                      </NavLink>
                    </li>
                  </ul>
                )}
              </details>
            </li>
            <li>
              {userdata ? (
                <div className="flex items-center logout-container">
                  {userdata.role === "investor" && (
                    <Link
                      to="/investordashboard"
                      className="hover:bg-salmon transition hover:text-white p-2 rounded"
                    >
                      MyProfile
                    </Link>
                  )}
                  {userdata.role === "founder" && (
                    <Link
                      to="/founderdashboard"
                      className="hover:bg-salmon transition hover:text-white p-2 rounded"
                    >
                      MyProfile
                    </Link>
                  )}
                  {userdata.role === "admin" && (
                    <NavLink
                      to="/admindashboard"
                      onClick={toggleMenu}
                      className="hover:bg-salmon  hover:text-white transition p-2 rounded"
                    >
                      MyProfile
                    </NavLink>
                  )}
                  <div
                    onClick={handleSignOut}
                    className="hover:bg-salmon transition lg:ml-8 hover:text-white p-2 rounded cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              ) : (
                <details open={activeDropdown === "login"}>
                  <summary
                    onClick={(e) => {
                      e.preventDefault(); // Prevent native toggle behavior
                      toggleDropdown("login");
                    }}
                    className="hover:bg-salmon mt-2 p-2 rounded hover:text-white"
                  >
                    Login
                  </summary>
                  {activeDropdown === "login" && (
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li>
                        <NavLink
                          to="/investorlogin"
                          className="hover:bg-salmon transition hover:text-white p-2 lg:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2 rounded"
                          activeclassname="active"
                        >
                          Investor
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/founderlogin"
                          className="hover:bg-salmon transition hover:text-white p-2 rounded"
                          activeclassname="active"
                        >
                          Founder
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </details>
              )}
            </li>
            <li>
              {userdata && (
                <Notifications API_URL={API_URL} userId={userdata._id} />
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-start p-4 bg-white shadow-lg">
            <ul className="lg:font-bold sm:text-sm xs:text-sm xxs:text-sm sm:font-medium xs:font-medium xxs:font-medium lg:text-lg gap-4">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  className="hover:bg-salmon transition p-2 rounded"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/founderlogin"
                  onClick={toggleMenu}
                  className="hover:bg-salmon transition p-2 rounded"
                >
                  Get Funded
                </NavLink>
              </li>
              <li>
                <details open={activeDropdown === "category"}>
                  <summary
                    onClick={() => toggleDropdown("category")}
                    className="hover:bg-salmon hover:text-white transition p-2 rounded cursor-pointer"
                  >
                    Category
                  </summary>
                  {activeDropdown === "category" && (
                    <ul className="bg-base-100 p-2">
                      <li>
                        <NavLink
                          to="/shariah"
                          onClick={toggleMenu}
                          className="hover:bg-salmon transition p-2 rounded"
                        >
                          Shariah
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/stocks"
                          onClick={toggleMenu}
                          className="hover:bg-salmon transition p-2 rounded"
                        >
                          Stocks
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/fixedreturn"
                          onClick={toggleMenu}
                          className="hover:bg-salmon transition p-2 rounded"
                        >
                          Fixed Return
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </details>
              </li>
              <li>
                {userdata ? (
                  <div className="flex flex-col">
                    {userdata.role === "investor" && (
                      <NavLink
                        to="/investordashboard"
                        onClick={toggleMenu}
                        className="hover:bg-salmon hover:text-white transition p-2 rounded"
                      >
                        MyProfile
                      </NavLink>
                    )}
                    {userdata.role === "founder" && (
                      <NavLink
                        to="/founderdashboard"
                        onClick={toggleMenu}
                        className="hover:bg-salmon hover:text-white transition p-2 rounded"
                      >
                        MyProfile
                      </NavLink>
                    )}
                    {userdata.role === "admin" && (
                      <NavLink
                        to="/admindashboard"
                        onClick={toggleMenu}
                        className="hover:bg-salmon hover:text-white transition p-2 rounded"
                      >
                        MyProfile
                      </NavLink>
                    )}
                    <div
                      onClick={handleSignOut}
                      className="hover:bg-salmon transition p-2 rounded cursor-pointer"
                    >
                      Logout
                    </div>
                  </div>
                ) : (
                  <details open={activeDropdown === "login"}>
                    <summary
                      onClick={() => toggleDropdown("login")}
                      className="hover:bg-salmon hover:text-white transition p-2 rounded cursor-pointer"
                    >
                      Login
                    </summary>
                    {activeDropdown === "login" && (
                      <ul className="bg-base-100 p-2">
                        <li>
                          <NavLink
                            to="/investorlogin"
                            onClick={toggleMenu}
                            className="hover:bg-salmon transition p-2 rounded"
                          >
                            Investor
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/founderlogin"
                            onClick={toggleMenu}
                            className="hover:bg-salmon transition p-2 rounded"
                          >
                            Founder
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </details>
                )}
              </li>
              <li>
                {userdata && (
                  <Notifications
                    className="h-5 w-5"
                    API_URL={API_URL}
                    userId={userdata._id}
                  />
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

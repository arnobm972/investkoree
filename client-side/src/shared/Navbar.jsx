import { useState } from "react"; // Import useState
import logo from "../assets/ll.png";
import { useNavigate, NavLink, Link } from "react-router-dom"; // Import Link
import { toast } from "react-toastify";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../providers/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Destructure user and logOut from AuthContext
  const { userdata, logOut } = useAuth();

  const handleSignOut = () => {
    logOut(); // Call the logout function from context
    toast.success("Signed Out Successfully");
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="navbar  px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-16 w-36" src={logo} alt="logo" />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="lg:hidden block">
          <button
            onClick={toggleMenu}
            className=" sm:text-base xs:text-base xxs:text-base sm:font-medium xs:font-medium xxs:font-medium lg:text-2xl"
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Full Navbar for Larger Screens */}
        <div className={`hidden lg:flex flex-1 justify-center items-center`}>
          <ul className="lg:font-bold lg:text-lg sm:text-sm xs:text-sm xxs:text-sm sm:font-medium xs:font-medium xxs:font-medium menu menu-horizontal gap-8 px-1 flex">
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
              <details>
                <summary className="hover:bg-salmon mt-2 hover:text-white transition p-2 rounded">
                  Category
                </summary>
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
              </details>
            </li>
            <li>
              {userdata ? (
                <div className="flex items-center logout-container">
                  {/* Conditional rendering for Dashboard link based on role */}
                  {userdata.role === "investor" && (
                    <Link
                      to="/investordashboard"
                      className="hover:bg-salmon transition hover:text-white p-2 rounded"
                    >
                      Dashboard
                    </Link>
                  )}
                  {userdata.role === "founder" && (
                    <Link
                      to="/founderdashboard"
                      className="hover:bg-salmon transition hover:text-white p-2 rounded"
                    >
                      Dashboard
                    </Link>
                  )}
                  <div
                    onClick={handleSignOut}
                    className="hover:bg-salmon transition hover:text-white p-2 rounded cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              ) : (
                <details>
                  <summary className="hover:bg-salmon mt-2 hover:text-white p-2 transition rounded">
                    Login
                  </summary>
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
                </details>
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
              <li className="xxs:mt-2 xs:mt-2 sm-mt-2 ">
                <NavLink
                  to="/founderlogin"
                  onClick={toggleMenu}
                  className="hover:bg-salmon transition p-2 rounded"
                >
                  Get Funded
                </NavLink>
              </li>
              <li>
                <details>
                  <summary className="hover:bg-salmon hover:text-white transition p-2 rounded">
                    Category
                  </summary>
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
                    <li className="xxs:mt-2 xs:mt-2 sm:mt-2">
                      <NavLink
                        to="/stocks"
                        onClick={toggleMenu}
                        className="hover:bg-salmon transition p-2 rounded"
                      >
                        Stocks
                      </NavLink>
                    </li>
                    <li className="xxs:mt-2 xs:mt-2 sm:mt-2">
                      <NavLink
                        to="/fixedreturn"
                        onClick={toggleMenu}
                        className="hover:bg-salmon transition p-2 rounded"
                      >
                        Fixed Return
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                {userdata ? (
                  <div className="flex items-center sm:flex-col xs:flex-col xxs:flex-col">
                    {/* Conditional rendering for Dashboard link based on role */}
                    {userdata.role === "investor" && (
                      <NavLink
                        to="/investordashboard"
                        onClick={toggleMenu}
                        className="hover:bg-salmon transition p-2 rounded"
                      >
                        My Profile
                      </NavLink>
                    )}
                    {userdata.role === "founder" && (
                      <NavLink
                        to="/founderdashboard"
                        onClick={toggleMenu}
                        className="hover:bg-salmon transition p-2 rounded"
                      >
                        My Profile
                      </NavLink>
                    )}
                    <div
                      onClick={handleSignOut}
                      className="hover:bg-salmon transition lg:ml-2 p-2 rounded cursor-pointer"
                    >
                      Log Out
                    </div>
                  </div>
                ) : (
                  <details>
                    <summary className="hover:bg-salmon transition p-2 rounded">
                      Login
                    </summary>
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
                      <li className="xxs:mt-2 xs:mt-2 sm:mt-2">
                        <NavLink
                          to="/founderlogin"
                          onClick={toggleMenu}
                          className="hover:bg-salmon transition p-2 rounded"
                        >
                          Founder
                        </NavLink>
                      </li>
                    </ul>
                  </details>
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

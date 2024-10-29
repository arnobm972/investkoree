import { useState, useContext } from "react";
import logo from "../assets/ll.png";
import { useNavigate, NavLink } from "react-router-dom";

import { toast } from "react-toastify";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import hamburger and close icons

const Navbar = () => {
  const token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [isOpen, setIsOpen] = useState(false); // Track whether the mobile menu is open

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/api/users`, {
          header: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) fetchUsers();
    else;
  }, [token, navigate]);
  const handleSignOut = async () => {
    localStorage.removeItem("token");
    toast.success("Signed Out Successfully");
    navigate("/");
  };

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="navbar px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-16 w-36" src={logo} alt="logo" />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="lg:hidden block">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Full Navbar for Larger Screens */}
        <div className={`hidden lg:flex flex-1 justify-center items-center`}>
          <ul className="font-bold text-lg menu menu-horizontal gap-8 px-1 flex">
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
              {token ? (
                <div className="flex items-center logout-container">
                  <span className="mr-2 hover:bg-salmon transition hover:text-white p-2 rounded">
                    {users.Name || users.email}{" "}
                  </span>
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
            <ul className="font-bold text-lg gap-4">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  className="hover:bg-salmon transition p-2 rounded"
                >
                  Home
                </NavLink>
              </li>
              <li className="xxs:mt-2 xs:mt-2 sm-mt-2">
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
                  <summary className="hover:bg-salmon transition p-2 rounded">
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
                    <li className="xxs:mt-4 xs:mt-4 sm-mt-4">
                      <NavLink
                        to="/stocks"
                        onClick={toggleMenu}
                        className="hover:bg-salmon transition p-2 rounded"
                      >
                        Stocks
                      </NavLink>
                    </li>
                    <li className="xxs:mt-4 xs:mt-4 sm-mt-4">
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
                {token ? (
                  <div className="flex items-center">
                    <span className="mr-2 hover:bg-salmon transition p-2 rounded">
                      {users.Name || users.email}{" "}
                    </span>
                    <div
                      onClick={handleSignOut}
                      className="hover:bg-salmon transition p-2 rounded cursor-pointer"
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
                      <li className="xxs:mt-4 xs:mt-4 sm-mt-4">
                        <NavLink
                          to="/founderlogin"
                          onClick={toggleMenu}
                          className="hover:bg-salmon transition p-2 xxs:mt-4 xs:mt-4 rounded"
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

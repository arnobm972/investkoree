import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/ll.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await fetch(`${API_URL}/users/api`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Failed to fetch user data");

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Signed Out Successfully");
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="navbar px-6 py-3 flex justify-between items-center">
        <img className="h-16 w-36" src={logo} alt="logo" />
        <div className="lg:hidden block">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <div className={`hidden lg:flex flex-1 justify-center items-center`}>
          <ul className="font-bold text-lg menu menu-horizontal gap-8 px-1 flex">
            <li>
              <NavLink
                to="/"
                className="hover:bg-salmon transition p-2 rounded"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/founderlogin"
                className="hover:bg-salmon transition p-2 rounded"
              >
                Get Funded
              </NavLink>
            </li>
            <li>
              {user ? (
                <div className="flex items-center logout-container">
                  <span className="mr-2 hover:bg-salmon transition p-2 rounded">
                    {user.name || user.email}
                  </span>
                  <div
                    onClick={handleSignOut}
                    className="hover:bg-salmon transition p-2 rounded cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              ) : (
                <NavLink
                  to="/investorlogin"
                  className="hover:bg-salmon transition p-2 rounded"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
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
              {user ? (
                <div className="flex items-center">
                  <span className="mr-2 hover:bg-salmon transition p-2 rounded">
                    {user.name || user.email}
                  </span>
                  <div
                    onClick={handleSignOut}
                    className="hover:bg-salmon transition p-2 rounded cursor-pointer"
                  >
                    Log Out
                  </div>
                </div>
              ) : (
                <NavLink
                  to="/investorlogin"
                  onClick={toggleMenu}
                  className="hover:bg-salmon transition p-2 rounded"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

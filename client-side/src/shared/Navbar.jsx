import { useState, useEffect } from "react"; // Import useState
import logo from "../assets/ll.png";
import { useNavigate, NavLink, Link } from "react-router-dom"; // Import Link
import { toast } from "react-toastify";
import { AiOutlineMenu, AiOutlineClose, AiOutlineBell } from "react-icons/ai"; // Import notification icon
import { useAuth } from "../providers/AuthProvider";
import axios from "axios";
import { io } from "socket.io-client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const navigate = useNavigate();
  const { userdata, logOut } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0); // Track unread notifications
  const [showNotifications, setShowNotifications] = useState(false); // State to toggle notification display

  useEffect(() => {
    const socket = io(`${API_URL}`);

    // Ensure userId is available from userdata
    const userId = userdata ? userdata._id : null; // Assuming userdata has _id property

    if (userId) {
      socket.emit("join", userId);

      socket.on("notification", (notification) => {
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          notification,
        ]);
        setUnreadCount((prevCount) => prevCount + 1); // Increment unread count
        toast(notification.message); // Show toast notification
      });

      const fetchNotifications = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/adminpost/notifications/${userId}`
          );
          setNotifications(response.data);
          setUnreadCount(response.data.filter((n) => !n.read).length); // Count unread notifications
        } catch (error) {
          console.error("Error fetching notifications:", error);
        }
      };

      fetchNotifications();
    }

    return () => {
      socket.disconnect();
    };
  }, [userdata, API_URL]); // Added userdata to dependencies

  const handleSignOut = () => {
    logOut();
    toast.success("Signed Out Successfully");
    navigate("/");
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (showNotifications) {
      // If notifications are being viewed, mark them as read
      setUnreadCount(0);
      // Optionally, you can mark notifications as read in the backend
      // axios.post(`${API_URL}/api/notifications/read`, { userId: userdata._id });
    }
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
                    className="hover:bg-salmon transition lg:ml-4 hover:text-white p-2 rounded cursor-pointer"
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
            <li>
              <div className="relative hover:bg-salmon ">
                <AiOutlineBell
                  className="text-2xl  transition mt-2 cursor-pointer"
                  onClick={handleNotificationClick}
                />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                    {unreadCount}
                  </span>
                )}
                {showNotifications && (
                  <div className="absolute lg:left-0 bg-white shadow-lg rounded mt-2 p-2 mr-2">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div key={notification._id} className="p-2 border-b">
                          {notification.message}
                        </div>
                      ))
                    ) : (
                      <div>No notifications</div>
                    )}
                  </div>
                )}
              </div>
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
                      className="hover:bg-salmon transition  p-2 rounded cursor-pointer"
                    >
                      Log Out
                    </div>
                  </div>
                ) : (
                  <details>
                    <summary className="hover:bg-salmon  hover:text-white transition p-2 rounded">
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

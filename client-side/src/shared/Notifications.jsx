import { useState, useEffect, useRef } from "react";
import { AiOutlineBell } from "react-icons/ai";
import axios from "axios";
import { io } from "socket.io-client";

const Notifications = ({ API_URL, userId }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const socket = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    // Initialize socket connection
    socket.current = io(API_URL);

    if (userId) {
      socket.current.emit("join", userId);

      const fetchNotifications = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/adminpost/notifications/${userId}`
          );
          const fetchedNotifications = response.data || [];
          setNotifications(fetchedNotifications);
          setUnreadCount(fetchedNotifications.filter((n) => !n.read).length);
        } catch (error) {
          console.error("Error fetching notifications:", error);
          alert("Unable to fetch notifications. Please try again later.");
        }
      };

      fetchNotifications();

      // Listen for notifications-read event
      const handleNotificationsRead = ({
        userId: notifiedUserId,
        notifications: updatedNotifications,
      }) => {
        if (notifiedUserId === userId) {
          // Update notifications after being marked as read
          setNotifications(updatedNotifications);
          setUnreadCount(updatedNotifications.filter((n) => !n.read).length);
        }
      };

      socket.current.on("notifications-read", handleNotificationsRead);

      return () => {
        socket.current.off("notifications-read", handleNotificationsRead);
        socket.current.disconnect();
      };
    }
  }, [userId, API_URL]);

  const markAllAsRead = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/adminpost/notifications/read/${userId}`
      );

      // Update notifications state with the response data
      setNotifications(response.data.notifications); // Update with the latest notifications
      setUnreadCount(0); // Reset unread count
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  return (
    <div
      className="relative hover:bg-salmon hover:text-white right-6"
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center gap-1 p-2 rounded  transition"
      >
        <AiOutlineBell className="text-2xl" />
        {unreadCount > 0 && (
          <span className="bg-red-500 text-white rounded-full text-xs px-1">
            {unreadCount}
          </span>
        )}
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 top-12 bg-white shadow-lg rounded w-80 z-10">
          <div className="p-4">
            {notifications.length > 0 ? (
              <div>
                <ul className="max-h-48 w-80 right-6 overflow-y-auto">
                  {notifications.map((notification) => (
                    <li
                      key={notification._id}
                      className={`p-2 rounded text-xs text-gray-500 ${
                        notification.read ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      {notification.message}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={markAllAsRead}
                  className="mt-2 text-xs text-blue-500 hover:underline"
                >
                  Mark all as read
                </button>
              </div>
            ) : (
              <p className="text-gray-500">No notifications</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Notifications;

import { useState, useEffect } from "react";
import { AiOutlineBell } from "react-icons/ai"; // Notification Icon
import axios from "axios";
import { io } from "socket.io-client";

const Notifications = ({ API_URL, userId }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const socket = io(API_URL);

    if (userId) {
      socket.emit("join", userId);

      socket.on("notifications-read", ({ userId: notifiedUserId }) => {
        if (notifiedUserId === userId) {
          setUnreadCount(0); // Reset unread count
          setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
        }
      });
    }

    return () => {
      socket.disconnect();
    };
  }, [userId, API_URL]);

  const markAllAsRead = async () => {
    try {
      await axios.put(`${API_URL}/adminpost/notifications/read/${userId}`);
      setNotifications((prev) =>
        prev.map((n) => ({
          ...n,
          read: true,
        }))
      );
      setUnreadCount(0);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  return (
    <details className="relative lg:mt-2">
      <summary className="cursor-pointer flex items-center gap-1 p-2 rounded hover:bg-salmon hover:text-white transition">
        <AiOutlineBell className="text-2xl" />
        {unreadCount > 0 && (
          <span className="bg-red-500 text-white rounded-full text-xs px-1">
            {unreadCount}
          </span>
        )}
      </summary>
      <div className="absolute right-0 top-2 bg-white shadow-lg rounded w-64">
        <div className="p-4">
          {notifications.length > 0 ? (
            <div>
              <ul className="max-h-48  overflow-y-auto">
                {notifications.map((notification) => (
                  <li
                    key={notification._id}
                    className={`p-2 rounded ${
                      notification.read
                        ? "bg-gray-100"
                        : "bg-yellow-100 font-semibold"
                    }`}
                  >
                    {notification.message}
                  </li>
                ))}
              </ul>
              <button
                onClick={markAllAsRead}
                className="mt-2 text-blue-500 hover:underline"
              >
                Mark all as read
              </button>
            </div>
          ) : (
            <p className="text-gray-500">No notifications</p>
          )}
        </div>
      </div>
    </details>
  );
};

export default Notifications;

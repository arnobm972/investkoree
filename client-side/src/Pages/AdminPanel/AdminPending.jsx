import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminPending = () => {
  const [posts, setPosts] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchPendingPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/adminpost/pending`); // Ensure this matches your route
        setPosts(response.data);
      } catch (error) {
        toast.error("Error fetching pending posts: " + error.message);
      }
    };

    fetchPendingPosts();
  }, [API_URL]);

  const handleAccept = async (post) => {
    try {
      const response = await axios.post(`${API_URL}/adminpost/accept`, {
        postId: post._id, // Send the post._id as postId
        userId: post.userId, // Assuming you have userId in the post object
      });
      if (response.status === 200) {
        toast.success("Post accepted successfully!");
        // Optionally, you can remove the accepted post from the state
        setPosts(posts.filter((p) => p._id !== post._id));
      }
    } catch (error) {
      toast.error("Error accepting post: " + error.message);
    }
  };

  const handleDeny = async (post) => {
    try {
      const response = await axios.post(`${API_URL}/adminpost/deny`, {
        postId: post._id, // Send the post._id as postId
        userId: post.userId, // Assuming you have userId in the post object
      });
      if (response.status === 200) {
        toast.success("Post denied successfully!");
        // Optionally, you can remove the denied post from the state
        setPosts(posts.filter((p) => p._id !== post._id));
      }
    } catch (error) {
      toast.error("Error denying post: " + error.message);
    }
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10">
          <div className="fixed top-[100px] left-[5px] ">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-salmon text-white sticky lg:hidden drawer-button transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105"
            >
              <i className="fas fa-bars text-lg"></i>
            </label>
          </div>
          <h2 className="text-2xl font-bold">Pending Posts</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th>Business Name</th>
                <th>Description</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  <td>{post.businessName}</td>
                  <td>{post.description}</td>
                  <td>{post.email}</td>
                  <td>
                    <button
                      onClick={() => handleAccept(post)} // Pass the entire post object
                      className="btn btn-success mr-2"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDeny(post)} // Pass the entire post object
                      className="btn btn-danger"
                    >
                      Deny
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="drawer-side z-40">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full lg:w-80 p-4">
              {/* Sidebar content here */}
              <li className="font-extrabold text-salmon ml-4   xs:mt-6 xxs:mt-6 sm:mt-6   text-lg mb-4 rounded-lg ">
                Admin
              </li>
              {userdata && (
                <li className="font-extrabold text-salmon ml-4 text-lg mb-2 rounded-lg">
                  {userdata.name || "Admin"}!
                </li>
              )}
              <Link to="/admindashboard">
                <li className="font-bold hover:bg-salmon hover:text-white text-lg mb-2 rounded-lg">
                  <a>Dashboard</a>
                </li>
              </Link>
              <Link to="/adminpending">
                <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
                  <a>Pending Posts</a>
                </li>
              </Link>
              {/*
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a></a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a></a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a></a>
            </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPending;

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const FounderPending = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const { userdata } = useAuth();

  useEffect(() => {
    const fetchPendingPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/adminpost/pending`);
        setPosts(response.data);
      } catch (error) {
        toast.error("Error fetching pending posts: " + error.message);
      }
    };

    fetchPendingPosts();
  }, [API_URL]);

  const handleAccept = async (post) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/Founderpost/accept`, {
        postId: post._id,
        userId: post.userId,
      });
      if (response.status === 200) {
        toast.success("Post accepted successfully!");
        setPosts(posts.filter((p) => p._id !== post._id));
      }
    } catch (error) {
      toast.error("Error accepting post: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeny = async (post) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/Founderpost/deny`, {
        postId: post._id,
        userId: post.userId,
      });
      if (response.status === 200) {
        toast.success("Post denied successfully!");
        setPosts(posts.filter((p) => p._id !== post._id));
      }
    } catch (error) {
      toast.error("Error denying post: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-10">
        <div className="fixed top-[100px] left-[5px]">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-salmon text-white sticky lg:hidden drawer-button transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105"
          >
            <i className="fas fa-bars text-lg"></i>
          </label>
        </div>
        <h2 className="font-bold lg:text-3xl mb-12">Pending Posts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-salmon rounded-xl">
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Serial
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Business Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post, index) => (
                <tr key={post._id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {post.businessName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => handleAccept(post)}
                      disabled={loading}
                      className={`btn text-white btn-success mr-2 ${
                        loading ? "btn-disabled" : ""
                      }`}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDeny(post)}
                      disabled={loading}
                      className={`btn text-white btn-error ${
                        loading ? "btn-disabled" : ""
                      }`}
                    >
                      Deny
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="drawer-side z-40">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full lg:w-80 p-4">
          <li className="font-extrabold text-salmon ml-4 text-lg mb-4 rounded-lg">
            Founder
          </li>
          {userdata && (
            <li className="font-extrabold text-salmon ml-4 text-lg mb-2 rounded-lg">
              {userdata.name || "founder"}!
            </li>
          )}
          <Link to="/founderdashboard">
            <li className="font-bold hover:bg-salmon hover:text-white text-lg mb-2 rounded-lg">
              <a>Dashboard</a>
            </li>
          </Link>
          <Link to="/founderpending">
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a>Pending Posts</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default FounderPending;

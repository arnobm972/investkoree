import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminPostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:10000";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${API_URL}/api/founderpost/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post details");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, API_URL]);

  if (loading) return <span className="loading-spinner loading-lg"></span>;
  if (!post) return <p>No post found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{post.businessName}</h1>
      <p>
        <strong>Organization:</strong> HP
      </p>
      <p>
        <strong>Funding Amount:</strong> {post.fundingAmount}
      </p>
      <p>
        <strong>Remaining Amount:</strong> {/* Calculate remaining */}
      </p>
      <p>
        <strong>Start Date:</strong>{" "}
        {new Date(post.startDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Return Date:</strong> {post.returndate}
      </p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default AdminPostDetail;

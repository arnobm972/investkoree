import { useEffect, useState } from "react";
import bannerpic from "../assets/banner.jpg";
import mission1 from "../assets/add-1.png";
import LatestPost from "./LatestPost";
import { Link } from "react-router-dom";
import "animate.css";

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:10000";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/founderpost/latestposts`);
        const data = await response.json();
        setLatestPosts(data);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <div className="hero banner-img bg-salmon ">
        <div className="hero-content xs:w-[90%] xxs:w-[90%] sm:w-[90%] xs:mx-auto xxs:mx-auto sm:mx-auto  flex-col gap-8 lg:flex-row-reverse lg:gap-24 text-slate-800">
          <img
            src={bannerpic}
            className="w-full xs:w-[95%] xxs:w-[95%] sm:w-[95%] animate__bounceInRight animate__animated     lg:w-[800px] rounded-2xl shadow-2xl"
            alt="Banner"
          />
          <div className="xs:text-center xxs:text-center sm:text-center  lg:text-left">
            <h1 className=" xs:text-2xl  xxs:text-2xl  sm:text-2xl lg:text-4xl animate__animated animate__fadeInDownBig text-white   font-bold ">
              Welcome to <br /> InvestKoree.com
            </h1>
            <p className="py-6 lg:text-lg xs:text-sm xxs:text-sm sm:text-sm animate__animated animate__fadeInUpBig text-white ">
              It's Easy and Fast to Invest. Get Profit Faster Here.
            </p>
            <Link to="/shariah">
              <button className="btn btn-active sm:w-[250px] xs:w-[250px] xxs:w-[250px] animate__animated animate__fadeInUpBig banner-btn btn-neutral">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Currently Running Investments Section */}
      <h5 className="text-center lg:mt-20 lg:text-3xl sm:text-xl  xs:text-xl  xxs:text-xl xs:mb-6 xxs:mb-6 sm:mb-6 xs:mt-16 xxs:mt-16 sm:mt-16     font-bold">
        Currently Running Investments
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-[1200px] lg:mx-auto sm:mx-auto lg:gap-6 xs:gap-8 xxs:gap-8 sm:gap-8 px-6 lg:px-20 cursor-pointer">
        {latestPosts.map((item) => (
          <LatestPost key={item._id} item={item} />
        ))}
      </div>

      {/* Mission Section */}
      <div className="mission-section my-20 flex flex-col lg:flex-row gap-10 justify-center lg:h-full items-center">
        <div className="flex flex-col lg:flex-row gap-8">
          <img
            className="rounded-xl  sm:w-[250px]  lg:h-[550px] lg:w-[300px]"
            src={mission1}
            alt=""
          />
          <img
            className="rounded-xl  sm:w-[250px] lg:w-[300px] lg:h-[550px] lg:mt-8"
            src={mission1}
            alt=""
          />
        </div>
        <div className="flex flex-col text-center lg:text-left">
          <h2 className=" lg:text-3xl sm:text-xl  xs:text-xl  xxs:text-xl ">
            Why we are here
          </h2>
          <p className="mt-4  lg:text-xl mb-10">Our Mission</p>
          <p className="lg:text-3xl sm:text-xl  xs:text-xl  xxs:text-xl mb-6">
            Our services
          </p>
          <ul className="lg:text-xl">
            <li>Easy to Invest</li>
            <li>Fastest Transaction</li>
            <li>High Return on Investment</li>
          </ul>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="customer-review my-32">
        <p className=" lg:text-3xl sm:text-xl  xs:text-xl  xxs:text-xl text-center mb-4">
          Testimonial
        </p>
        <p className="text-center lg:text-3xl sm:text-xl  xs:text-xl  xxs:text-xl lg:text-bold  sm:text-bold  xs:text-bold  xxs:text-bold mb-16">
          What people say about us
        </p>
        <div className="flex flex-col sm:flex-row  sm:mx-4 xs:mx-4 xxs:mx-4 gap-6 items-center justify-center">
          {/* Sample Testimonial 1 */}
          <div className="bg-white w-full sm:w-[35%] lg:w-[40%] hover:bg-salmon rounded-lg shadow-md p-6 group">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-900 group-hover:text-white">
                  Dianne Russell
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-white">
                  Founder
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 group-hover:text-white">
                Campoal is great for people to bring changes to what they
                believe in, it's nice to see some good morals and common sense
                being acknowledged where modern governments fail.
              </p>
            </div>
          </div>

          {/* Sample Testimonial 2 */}
          <div className="bg-white w-full sm:w-[35%] lg:w-[40%] hover:bg-salmon rounded-lg shadow-md p-6 group">
            <div className="flex items-center ">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-900 group-hover:text-white">
                  Dianne Russell
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-white">
                  Founder
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 group-hover:text-white">
                Campoal is great for people to bring changes to what they
                believe in, it's nice to see some good morals and common sense
                being acknowledged where modern governments fail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

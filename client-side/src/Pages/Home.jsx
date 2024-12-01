import { useEffect, useState } from "react";
import bannerpic from "../assets/banner.jpg";
import bannerpic2 from "../assets/banner2.jpg";
import LatestPost from "./LatestPost";
import { Link } from "react-router-dom";
import "animate.css";
import { Parallax } from "react-parallax";
import mission1 from "../assets/add-1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { FaArrowUp } from "react-icons/fa";
const Home = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:10000";
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [refWhy, inViewWhy] = useInView({ threshold: 0.2 }); // Trigger animation when 20% is in view

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView2) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView2]);

  // Handle responsive checks
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Fetch posts and scroll percentage logic

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
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.25 },
    },
  };
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.05, // Set the delay you want for the text
      },
    },
  };
  const textVariants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.25, // Set the delay you want for the text
      },
    },
  };
  const whySectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.25 },
    },
  };
  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <div>
        <Parallax
          bgImage={isSmallScreen ? bannerpic2 : bannerpic}
          className="xs:h-96 xxs:h-96 sm:h-96 lg:h-full animate__fadeIn animate__animated  "
          strength={300}
        >
          <div className="hero h-[400px] lg:h-[600px] flex items-center justify-center text-center text-slate-700">
            <div className="hero-content xs:w-[90%] sm:w-[90%] flex-col lg:flex-row-reverse gap-8 lg:gap-24">
              <div className="xs:text-center lg:text-left">
                <h1 className="xs:text-2xl sm:text-2xl lg:text-6xl  animate__animated animate__fadeInDownBig font-bold">
                  Welcome to <br /> InvestKoree.com
                </h1>
                <p className="py-6 lg:text-2xl animate__animated animate__fadeInUpBig ">
                  It's Easy and Fast to Invest. Get Profit Faster Here.
                </p>
                <Link to="/shariah">
                  <button className="btn btn-active btn-neutral animate__animated animate__fadeInUpBig ">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Parallax>

        <motion.h5
          className="text-center lg:mt-20 lg:text-3xl sm:text-xl xs:text-xl xxs:text-xl xs:mb-6 xxs:mb-6 sm:mb-6 xs:mt-16 xxs:mt-16 sm:mt-16 font-bold"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          Currently Running Investments
        </motion.h5>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-[1200px] lg:mx-auto sm:mx-auto lg:gap-6 xs:gap-8 px-6 lg:px-20 cursor-pointer"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {latestPosts.map((item) => (
            <LatestPost key={item._id} item={item} />
          ))}
        </motion.div>
      </div>
      {/* Mission Section */}
      <motion.div
        ref={refWhy}
        className="mission-section my-20 flex flex-col lg:flex-row gap-10 justify-center lg:h-full items-center"
        variants={whySectionVariants}
        initial="hidden"
        animate={inViewWhy ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row gap-8 animate__bounceInLeft  animate__animated">
          <img
            className="rounded-xl sm:w-[250px] lg:h-[550px] lg:w-[300px]"
            src={mission1}
            alt=""
          />
          <img
            className="rounded-xl sm:w-[250px] lg:w-[300px] lg:h-[550px] lg:mt-8"
            src={mission1}
            alt=""
          />
        </div>
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="lg:text-3xl sm:text-xl xs:text-xl xxs:text-xl">
            Why we are here
          </h2>
          <p className="mt-4 lg:text-xl mb-10">Our Mission</p>
          <p className="lg:text-3xl sm:text-xl xs:text-xl xxs:text-xl mb-6">
            Our services
          </p>
          <ul className="lg:text-xl">
            <li>Easy to Invest</li>
            <li>Fastest Transaction</li>
            <li>High Return on Investment</li>
          </ul>
        </div>
      </motion.div>

      {/* Testimonial Section */}
      <motion.section
        className="customer-review my-32"
        ref={ref2}
        variants={textVariants2}
        initial="hidden"
        animate={controls}
      >
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
      </motion.section>
      {/* <div style={{ height: "100vh", padding: "20px" }}>
        <h1>Scroll to see the percentage bar</h1>
        <p>Scroll Percentage: {Math.round(scrollPercentage)}%</p>
      </div> */}
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-neutral-700 hover:bg-neutral-800 text-white p-3 rounded-full shadow-lg"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Home;

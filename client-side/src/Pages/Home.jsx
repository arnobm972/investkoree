import { useEffect, useState } from "react";
import bannerpic from "../assets/banner.jpg";
import mission1 from "../assets/add-1.png";
import LatestPost from "./LatestPost";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [language, setLanguage] = useState("bn"); // Default to Bengali
  const [translatedPosts, setTranslatedPosts] = useState([]);

  // Function to translate text dynamically using LibreTranslate API
  const translateText = async (text, targetLanguage) => {
    try {
      const response = await axios.post("https://libretranslate.de/translate", {
        q: text,
        source: "en", // Source language (English)
        target: targetLanguage, // Target language
      });
      return response.data.translatedText;
    } catch (error) {
      console.error("Translation error:", error);
      return text; // Fallback to original text in case of error
    }
  };

  useEffect(() => {
    // Fetch latest posts from your API
    const fetchLatestPosts = async () => {
      try {
        const response = await axios.get("/api/posts/latest");
        setLatestPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchLatestPosts();
  }, []);

  // Handle language change
  const handleLanguageChange = async (newLanguage) => {
    setLanguage(newLanguage);

    // Translate dynamic text (e.g., posts)
    const translatedPosts = await Promise.all(
      latestPosts.map(async (post) => {
        const translatedTitle = await translateText(post.title, newLanguage);
        const translatedDescription = await translateText(
          post.description,
          newLanguage
        );
        return {
          ...post,
          title: translatedTitle,
          description: translatedDescription,
        };
      })
    );

    setTranslatedPosts(translatedPosts);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero banner-img bg-salmon">
        <div className="hero-content xs:w-[90%] sm:w-[90%] xs:mx-auto flex-col gap-8 lg:flex-row-reverse lg:gap-24 text-slate-800">
          <img
            src={bannerpic}
            className="w-full xs:w-[95%] sm:w-[95%] lg:w-[800px] rounded-2xl shadow-2xl"
            alt="Banner"
          />
          <div className="xs:text-center lg:text-left">
            <h1 className="xs:text-2xl lg:text-4xl text-white font-bold">
              {language === "bn"
                ? "আমাদের সাথে বিনিয়োগ করুন"
                : "Welcome to InvestKoree.com"}
            </h1>
            <p className="py-6 lg:text-lg xs:text-sm text-white">
              {language === "bn"
                ? "এখানে বিনিয়োগ করা সহজ এবং দ্রুত। এখানে দ্রুত লাভ পান।"
                : "It's Easy and Fast to Invest. Get Profit Faster Here."}
            </p>
            <Link to="/shariah">
              <button className="btn btn-active sm:w-[250px] xs:w-[250px] banner-btn btn-neutral">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="text-center my-4">
        <select
          className="p-2 rounded-lg"
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="en">English</option>
          <option value="bn">Bengali</option>
          <option value="es">Spanish</option>
          {/* Add more languages as needed */}
        </select>
      </div>

      {/* Currently Running Investments Section */}
      <h5 className="text-center lg:mt-20 lg:text-3xl xs:text-xl xs:mb-6 xs:mt-16 font-bold">
        {language === "bn" ? "চলমান বিনিয়োগ" : "Currently Running Investments"}
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-[1200px] lg:mx-auto sm:mx-auto lg:gap-6 xs:gap-8 px-6 lg:px-20 cursor-pointer">
        {(Array.isArray(translatedPosts) && translatedPosts.length > 0
          ? translatedPosts
          : latestPosts
        ).map((item) => (
          <LatestPost key={item._id} item={item} language={language} />
        ))}
      </div>

      {/* Mission Section */}
      <div className="mission-section my-20 flex flex-col lg:flex-row gap-10 justify-center lg:h-full items-center">
        <div className="flex flex-col lg:flex-row gap-8">
          <img
            className="rounded-xl sm:w-[250px] lg:h-[550px] lg:w-[300px]"
            src={mission1}
            alt="Mission"
          />
          <img
            className="rounded-xl sm:w-[250px] lg:w-[300px] lg:h-[550px] lg:mt-8"
            src={mission1}
            alt="Mission"
          />
        </div>
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="lg:text-3xl xs:text-xl">
            {language === "bn" ? "আমাদের উদ্দেশ্য" : "Why we are here"}
          </h2>
          <p className="mt-4 lg:text-xl mb-10">
            {language === "bn"
              ? "আমরা আমাদের সমাজের জন্য একটি ইতিবাচক প্রভাব তৈরি করতে চাই।"
              : "Our Mission"}
          </p>
          <p className="lg:text-3xl xs:text-xl mb-6">
            {language === "bn" ? "আমাদের সেবা" : "Our services"}
          </p>
          <ul className="lg:text-xl">
            <li>{language === "bn" ? "বিনিয়োগ করা সহজ" : "Easy to Invest"}</li>
            <li>
              {language === "bn" ? "দ্রুত লেনদেন" : "Fastest Transaction"}
            </li>
            <li>
              {language === "bn" ? "উচ্চ রিটার্ন" : "High Return on Investment"}
            </li>
          </ul>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="customer-review my-32">
        <p className="lg:text-3xl xs:text-xl text-center mb-4">
          {language === "bn" ? "গ্রাহক রিভিউ" : "Testimonial"}
        </p>
        <p className="text-center lg:text-3xl xs:text-xl lg:font-bold mb-16">
          {language === "bn"
            ? "আমাদের সম্পর্কে মানুষের মতামত"
            : "What people say about us"}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          {/* Testimonial 1 */}
          <div className="bg-white w-full sm:w-[35%] lg:w-[40%] hover:bg-salmon rounded-lg shadow-md p-6 group">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div>
                <h4 className="text-lg font-medium group-hover:text-white">
                  Dianne Russell
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-white">
                  Founder
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="group-hover:text-white">
                Campoal is great for people to bring changes to what they
                believe in, it's nice to see some good morals and common sense
                being acknowledged where modern governments fail.
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white w-full sm:w-[35%] lg:w-[40%] hover:bg-salmon rounded-lg shadow-md p-6 group">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div>
                <h4 className="text-lg font-medium group-hover:text-white">
                  Dianne Russell
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-white">
                  Founder
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="group-hover:text-white">
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

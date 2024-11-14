import { useEffect, useState } from "react";
import bannerpic from "../assets/banner.jpg";
import mission1 from "../assets/add-1.png";
import LatestPost from "./LatestPost";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const { t, i18n } = useTranslation();

  // Fetch the latest posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://investkoree-backend.onrender.com/founderpost/latestposts"
        );
        const data = await response.json();
        setLatestPosts(data);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchPosts();

    // Load Google Translate script dynamically
    const loadGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // Initialize Google Translate when the script loads
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    loadGoogleTranslateScript();

    // Cleanup the Google Translate script on unmount
    return () => {
      const script = document.querySelector(
        "script[src*='google.com/translate']"
      );
      if (script) {
        script.remove();
      }
    };
  }, []);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {/* Language Switcher */}
      <div className="language-switcher">
        <button onClick={() => handleLanguageChange("en")}>English</button>
        <button onClick={() => handleLanguageChange("bn")}>বাংলা</button>
      </div>

      <div>{t("welcomeMessage")}</div>
      <div id="google_translate_element"></div>

      {/* Hero Section */}
      <div className="hero banner-img bg-salmon">
        <div className="hero-content xs:w-[90%] xxs:w-[90%] sm:w-[90%] xs:mx-auto xxs:mx-auto sm:mx-auto flex-col gap-8 lg:flex-row-reverse lg:gap-24 text-slate-800">
          <img
            src={bannerpic}
            className="w-full xs:w-[95%] xxs:w-[95%] sm:w-[95%] lg:w-[800px] rounded-2xl shadow-2xl"
            alt="Banner"
          />
          <div className="xs:text-center xxs:text-center sm:text-center lg:text-left">
            <h1 className="xs:text-2xl xxs:text-2xl sm:text-2xl lg:text-4xl text-white font-bold">
              {t("welcomeMessage")} InvestKoree.com
            </h1>
            <p className="py-6 lg:text-lg xs:text-sm xxs:text-sm sm:text-sm text-white">
              {t("easyFastInvest")}
            </p>
            <Link to="/shariah">
              <button className="btn btn-active sm:w-[250px] xs:w-[250px] xxs:w-[250px] banner-btn btn-neutral">
                {t("getStarted")}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Currently Running Investments Section */}
      <h5 className="text-center lg:mt-20 lg:text-3xl sm:text-xl xs:text-xl xxs:text-xl xs:mb-6 xxs:mb-6 sm:mb-6 xs:mt-16 xxs:mt-16 sm:mt-16 font-bold">
        {t("currentlyRunningInvestments")}
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
          <h2 className="lg:text-3xl sm:text-xl xs:text-xl xxs:text-xl">
            {t("whyWeAreHere")}
          </h2>
          <p className="mt-4 lg:text-xl mb-10">{t("ourMission")}</p>
          <p className="lg:text-3xl sm:text-xl xs:text-xl xxs:text-xl mb-6">
            {t("ourServices")}
          </p>
          <ul className="lg:text-xl">
            <li>{t("easyToInvest")}</li>
            <li>{t("fastestTransaction")}</li>
            <li>{t("highROI")}</li>
          </ul>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="customer-review my-32">
        <p className="lg:text-3xl sm:text-xl xs:text-xl xxs:text-xl text-center mb-4">
          {t("testimonial")}
        </p>
        <p className="text-center lg:text-3xl sm:text-xl xs:text-xl xxs:text-xl lg:text-bold sm:text-bold xs:text-bold xxs:text-bold mb-16">
          {t("whatPeopleSay")}
        </p>
        <div className="flex flex-col sm:flex-row sm:mx-4 xs:mx-4 xxs:mx-4 gap-6 items-center justify-center">
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
                  {t("testimonialName1")}
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-white">
                  {t("founder")}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 group-hover:text-white">
                {t("testimonialMessage1")}
              </p>
            </div>
          </div>

          {/* Sample Testimonial 2 */}
          <div className="bg-white w-full sm:w-[35%] lg:w-[40%] hover:bg-salmon rounded-lg shadow-md p-6 group">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-900 group-hover:text-white">
                  {t("testimonialName2")}
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-white">
                  {t("founder")}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 group-hover:text-white">
                {t("testimonialMessage2")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

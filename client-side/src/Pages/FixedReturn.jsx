import FixedReturnPost from "../Pages/FixedReturnPost";
import { useEffect, useState } from "react";

const FixedReturn = () => {
  const [fixedReturnpost, setFixedReturnPost] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedSector, setSelectedSector] = useState(""); // State for selected sector
  const [selectedDuration, setSelectedDuration] = useState(""); // State for selected duration

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://investkoree-backend.onrender.com/founderpost/latestposts"
        );
        const data = await response.json();

        // Filter posts for FixedReturn category
        const filteredPosts = data.filter(
          (post) => post.businessCategory === "Fixed Return"
        );

        setFixedReturnPost(filteredPosts);
        setFilteredPosts(filteredPosts); // Initialize filtered posts
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Function to handle sector selection
  const handleSectorClick = (sector) => {
    setSelectedSector(sector); // Set the selected sector
    filterPosts(sector, selectedDuration); // Filter posts based on sector and current duration
  };

  // Function to handle duration selection
  const handleDurationClick = (duration) => {
    setSelectedDuration(duration); // Set the selected duration
    filterPosts(selectedSector, duration); // Filter posts based on current sector and duration
  };

  // Function to filter posts based on sector and duration
  const filterPosts = (sector, duration) => {
    let filtered = fixedReturnpost;

    if (sector) {
      filtered = filtered.filter((post) => post.businessSector === sector);
    }

    if (duration) {
      filtered = filtered.filter(
        (post) => post.investmentDuration === duration
      );
    }

    setFilteredPosts(filtered); // Update filtered posts
  };

  // Function to clear filters
  const clearFilters = () => {
    setSelectedSector(""); // Reset sector selection
    setSelectedDuration(""); // Reset duration selection
    setFilteredPosts(fixedReturnpost); // Show all posts again
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10">
          <div className="fixed top-[100px] left-[5px] z-40">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-salmon text-white sticky drawer-button transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105"
            >
              <i className="fas fa-bars text-lg"></i>
            </label>
          </div>
          <p className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl xxs:text-xl md:mb-2 xs:mb-2 xxs:mb-2 sm:mb-2 font-bold lg:mt-12 md:mt-12 text-center">
            FixedReturn Business
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-[1200px] lg:mx-auto sm:mx-auto lg:gap-6 xs:gap-8 xxs:gap-8 sm:gap-8 px-6 lg:px-20 cursor-pointer">
            {filteredPosts.map((item) => (
              <FixedReturnPost key={item._id} item={item} />
            ))}
          </div>
        </div>

        <div className="drawer-side z-40">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full  lg:w-80 p-4">
            <li className="font-extrabold text-salmon xs:mt-6 xxs:mt-6 sm:mt-6  hover:text-white text-lg mb-2">
              <a>Sector</a>
            </li>
            {/* Add onClick handlers to filter posts by sector */}
            <li
              className="font-bold hover:bg-salmon hover:text-white text-lg mb-2 rounded-lg"
              onClick={() => handleSectorClick("Retail")}
            >
              <a>Retail</a>
            </li>
            <li
              className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg"
              onClick={() => handleSectorClick("Financial")}
            >
              <a>Financial</a>
            </li>
            <li
              className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg"
              onClick={() => handleSectorClick("Farming")}
            >
              <a>Farming</a>
            </li>
            <li
              className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg"
              onClick={() => handleSectorClick("Clothing")}
            >
              <a>Clothing</a>
            </li>
            <li
              className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg"
              onClick={() => handleSectorClick("Health")}
            >
              <a>Health</a>
            </li>
            {/* Add more sectors as needed */}

            <li className="font-extrabold text-salmon hover:text-white text-lg mb-2 mt-6">
              <a>Duration</a>
            </li>
            {/* Add onClick handlers to filter posts by duration */}
            <li
              className="font-bold hover:bg-salmon hover:text-white text-lg mb-2 rounded-lg"
              onClick={() => handleDurationClick("short-term")}
            >
              <a>Short term</a>
            </li>
            <li
              className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg"
              onClick={() => handleDurationClick("mid-term")}
            >
              <a>Mid term</a>
            </li>
            <li
              className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg"
              onClick={() => handleDurationClick("long-term")}
            >
              <a>Long term</a>
            </li>

            {/* Clear Filter Option */}
            <li className="mt-6">
              <button
                onClick={clearFilters}
                className="btn bg-gray-500 text-white w-full font-bold text-lg rounded-lg"
              >
                Clear Filters
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FixedReturn;

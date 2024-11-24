import ShariahPost from "../Pages/ShariahPost";
import { useEffect, useState } from "react";

const Shariah = () => {
  const [shariahpost, setShariahPost] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedSector, setSelectedSector] = useState(""); // State for selected sector
  const [selectedDuration, setSelectedDuration] = useState(""); // State for selected duration

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://investkoree-backend.vercel.app/founderpost/latestposts"
        );
        const data = await response.json();

        // Filter posts for Shariah category
        const filteredPosts = data.filter(
          (post) => post.businessCategory === "Shariah"
        );

        setShariahPost(filteredPosts);
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
    let filtered = shariahpost;

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
    setFilteredPosts(shariahpost); // Show all posts again
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
            Shariah Business
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-[1200px] lg:mx-auto sm:mx-auto lg:gap-6 xs:gap-8 xxs:gap-8 sm:gap-8 px-6 lg:px-20 cursor-pointer">
            {filteredPosts.map((item) => (
              <ShariahPost key={item._id} item={item} />
            ))}
          </div>
        </div>

        <div className="drawer-side z-40">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full lg:w-80 p-4">
            <li className="font-extrabold text-salmon xs:mt-6 xxs:mt-6 sm:mt-6  hover:text-white text-lg mb-2">
              <a>Sector</a>
            </li>
            {/* Add onClick handlers to filter posts by sector */}
            <li
              className={`font-bold hover:bg-salmon hover:text-white text-lg mb-2 rounded-lg ${
                selectedSector === "Retail" ? "bg-salmon text-white" : ""
              }`}
              onClick={() => handleSectorClick("Retail")}
            >
              <a>Retail</a>
            </li>
            <li
              className={`font-bold hover:bg-salmon hover:text-white text-lg rounded-lg ${
                selectedSector === "Financial" ? "bg-salmon text-white" : ""
              }`}
              onClick={() => handleSectorClick("Financial")}
            >
              <a>Financial</a>
            </li>
            <li
              className={`font-bold hover:bg-salmon hover:text-white text-lg rounded-lg ${
                selectedSector === "Farming" ? "bg-salmon text-white" : ""
              }`}
              onClick={() => handleSectorClick("Farming")}
            >
              <a>Farming</a>
            </li>
            <li
              className={`font-bold hover:bg-salmon hover:text-white text-lg rounded-lg ${
                selectedSector === "Clothing" ? "bg-salmon text-white" : ""
              }`}
              onClick={() => handleSectorClick("Clothing")}
            >
              <a>Clothing</a>
            </li>
            <li
              className={`font-bold hover:bg-salmon hover:text-white text-lg rounded-lg ${
                selectedSector === "Health" ? "bg-salmon text-white" : ""
              }`}
              onClick={() => handleSectorClick("Health")}
            >
              <a>Health</a>
            </li>

            <li className="font-extrabold text-salmon hover:text-white text-lg mb-2 mt-6">
              <a>Duration</a>
            </li>
            {/* Add onClick handlers to filter posts by duration */}
            <li
              className={`font-bold hover:bg-salmon hover:text-white text-lg mb-2 rounded-lg ${
                selectedDuration === "short-term" ? "bg-salmon text-white" : ""
              }`}
              onClick={() => handleDurationClick("short-term")}
            >
              <a>Short term</a>
            </li>
            <li
              className={`font-bold hover:bg-salmon hover:text-white text-lg rounded-lg ${
                selectedDuration === "mid-term" ? "bg-salmon text-white" : ""
              }`}
              onClick={() => handleDurationClick("mid-term")}
            >
              <a>Mid term</a>
            </li>
            <li
              className={`font-bold hover:bg-salmon hover:text-white text-lg rounded-lg ${
                selectedDuration === "long-term" ? "bg-salmon text-white" : ""
              }`}
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

            {/* Display selected filters */}
            <div className="mt-6">
              {/* <p className="font-bold  text-xl">Selected Filters:</p> */}
              {selectedSector && (
                <li className="text-lg font-bold rounded-lg text-white bg-salmon  my-2">
                  <a>{selectedSector}</a>
                </li>
              )}
              {selectedDuration && (
                <li className="text-lg font-bold rounded-lg text-white mt-4 bg-salmon">
                  <a>{selectedDuration}</a>
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shariah;

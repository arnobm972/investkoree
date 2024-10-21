import banner from "../assets/s2.jpg";

const Stocks = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10">
          <div className="fixed top-[100px] left-[5px] z-50">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-salmon text-white sticky drawer-button transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105"
            >
              <i className="fas fa-bars text-lg"></i>
            </label>
          </div>
          <p className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl xxs:text-xl md:mb-2 xs:mb-2 xxs:mb-2 sm:mb-2  font-bold lg:mt-12  md:mt-12 text-center">
            Stocks Bussiness{" "}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:w-[1200px] sm:gap-4 xs:gap-4  xs:mx-auto xxs:mx-auto  xs:mt-2 xxs:mt-2 xxs:gap-4 lg:ml-1  sm:mx-auto lg:gap-64 lg:mt-8  cursor-pointer">
            <div className="bg-white h-[420px] lg:w-[320px]  rounded-2xl shadow-md sm:w-[290px] xs:w-[290px] xxs:w-[290px] overflow-hidden transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105">
              <img
                src={banner} // Replace with actual image URL
                alt="Fundraiser"
                className="w-full h-48 object-cover "
              />
              <div className="p-4">
                <div className="text-xs font-medium text-gray-500 mb-2">
                  <span className="inline-block bg-salmon text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Health
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt mr-1"></i> South Africa
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Providing health food for the children
                </h3>
                <div className="flex flex-row  my-4 justify-between">
                  <p className=" ">Funded 40%</p>
                  <p className="">Left 60%</p>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-salmon h-2.5 rounded-full"
                      style={{ width: "40.5%" }} // Dynamically set width
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <i className="fas fa-box mr-1"></i> Rasied: $34,000
                    </div>
                    <div>
                      <i className="fas fa-bullseye mr-1"></i> Goal: $40,500
                    </div>
                  </div>
                </div>
                {/* Add a button or call to action here */}
              </div>
            </div>
            <div className="bg-white h-[420px] lg:w-[320px] rounded-2xl shadow-md sm:w-[290px] xs:w-[290px] xxs:w-[290px] overflow-hidden transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105">
              <img
                src={banner} // Replace with actual image URL
                alt="Fundraiser"
                className="w-full h-48 object-cover "
              />
              <div className="p-4">
                <div className="text-xs font-medium text-gray-500 mb-2">
                  <span className="inline-block bg-salmon text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Health
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt mr-1"></i> South Africa
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Providing health food for the children
                </h3>
                <div className="flex flex-row  my-4 justify-between">
                  <p className=" ">Funded 40%</p>
                  <p className="">Left 60%</p>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-salmon h-2.5 rounded-full"
                      style={{ width: "40.5%" }} // Dynamically set width
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <i className="fas fa-box mr-1"></i> Rasied: $34,000
                    </div>
                    <div>
                      <i className="fas fa-bullseye mr-1"></i> Goal: $40,500
                    </div>
                  </div>
                </div>
                {/* Add a button or call to action here */}
              </div>
            </div>
            <div className="bg-white h-[420px] lg:w-[320px] rounded-2xl shadow-md sm:w-[290px] xs:w-[290px] xxs:w-[290px] overflow-hidden transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105">
              <img
                src={banner} // Replace with actual image URL
                alt="Fundraiser"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-xs font-medium text-gray-500 mb-2">
                  <span className="inline-block bg-salmon text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Health
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt mr-1"></i> South Africa
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Providing health food for the children
                </h3>
                <div className="flex flex-row  my-4 justify-between">
                  <p className=" ">Funded 40%</p>
                  <p className="">Left 60%</p>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-salmon h-2.5 rounded-full"
                      style={{ width: "40.5%" }} // Dynamically set width
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <i className="fas fa-box mr-1"></i> Rasied: $34,000
                    </div>
                    <div>
                      <i className="fas fa-bullseye mr-1"></i> Goal: $40,500
                    </div>
                  </div>
                </div>
                {/* Add a button or call to action here */}
              </div>
            </div>
            <div className="bg-white h-[420px] lg:w-[320px] rounded-2xl shadow-md sm:w-[290px] xs:w-[290px] xxs:w-[290px] overflow-hidden transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105">
              <img
                src={banner} // Replace with actual image URL
                alt="Fundraiser"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-xs font-medium text-gray-500 mb-2">
                  <span className="inline-block bg-salmon text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Health
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt mr-1"></i> South Africa
                  </span>
                </div>
                <h3 className="text-lg  font-semibold mb-2">
                  Providing health food for the children
                </h3>
                <div className="flex flex-row  my-4 justify-between">
                  <p className=" ">Funded 40%</p>
                  <p className="">Left 60%</p>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-salmon h-2.5 rounded-full"
                      style={{ width: "40.5%" }} // Dynamically set width
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <i className="fas fa-box mr-1"></i> Rasied: $34,000
                    </div>
                    <div>
                      <i className="fas fa-bullseye mr-1"></i> Goal: $40,500
                    </div>
                  </div>
                </div>
                {/* Add a button or call to action here */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:w-[1200px] lg:ml-1  sm:gap-4 xs:gap-4  xs:mx-auto xxs:mx-auto xxs:gap-4 sm:mt-4  xs:mt-4 xxs:mt-4 sm:mx-auto lg:gap-64  lg:mt-8  cursor-pointer">
            <div className="bg-white h-[420px] lg:w-[320px] rounded-2xl shadow-md sm:w-[290px] xs:w-[290px] xxs:w-[290px] overflow-hidden transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105">
              <img
                src={banner} // Replace with actual image URL
                alt="Fundraiser"
                className="w-full h-48 object-cover "
              />
              <div className="p-4">
                <div className="text-xs font-medium text-gray-500 mb-2">
                  <span className="inline-block bg-salmon text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Health
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt mr-1"></i> South Africa
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Providing health food for the children
                </h3>
                <div className="flex flex-row  my-4 justify-between">
                  <p className=" ">Funded 40%</p>
                  <p className="">Left 60%</p>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-salmon h-2.5 rounded-full"
                      style={{ width: "40.5%" }} // Dynamically set width
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <i className="fas fa-box mr-1"></i> Rasied: $34,000
                    </div>
                    <div>
                      <i className="fas fa-bullseye mr-1"></i> Goal: $40,500
                    </div>
                  </div>
                </div>
                {/* Add a button or call to action here */}
              </div>
            </div>
            <div className="bg-white h-[420px] lg:w-[320px] rounded-2xl shadow-md sm:w-[290px] xs:w-[290px] xxs:w-[290px] overflow-hidden transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105">
              <img
                src={banner} // Replace with actual image URL
                alt="Fundraiser"
                className="w-full h-48 object-cover "
              />
              <div className="p-4">
                <div className="text-xs font-medium text-gray-500 mb-2">
                  <span className="inline-block bg-salmon text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Health
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt mr-1"></i> South Africa
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Providing health food for the children
                </h3>
                <div className="flex flex-row  my-4 justify-between">
                  <p className=" ">Funded 40%</p>
                  <p className="">Left 60%</p>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-salmon h-2.5 rounded-full"
                      style={{ width: "40.5%" }} // Dynamically set width
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <i className="fas fa-box mr-1"></i> Rasied: $34,000
                    </div>
                    <div>
                      <i className="fas fa-bullseye mr-1"></i> Goal: $40,500
                    </div>
                  </div>
                </div>
                {/* Add a button or call to action here */}
              </div>
            </div>
            <div className="bg-white h-[420px] lg:w-[320px] rounded-2xl shadow-md sm:w-[290px] xs:w-[290px] xxs:w-[290px] overflow-hidden transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105">
              <img
                src={banner} // Replace with actual image URL
                alt="Fundraiser"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-xs font-medium text-gray-500 mb-2">
                  <span className="inline-block bg-salmon text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Health
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt mr-1"></i> South Africa
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Providing health food for the children
                </h3>
                <div className="flex flex-row  my-4 justify-between">
                  <p className=" ">Funded 40%</p>
                  <p className="">Left 60%</p>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-salmon h-2.5 rounded-full"
                      style={{ width: "40.5%" }} // Dynamically set width
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <i className="fas fa-box mr-1"></i> Rasied: $34,000
                    </div>
                    <div>
                      <i className="fas fa-bullseye mr-1"></i> Goal: $40,500
                    </div>
                  </div>
                </div>
                {/* Add a button or call to action here */}
              </div>
            </div>
            <div className="bg-white h-[420px] lg:w-[320px] sm:w-[290px] xs:w-[290px] xxs:w-[290px]  rounded-2xl shadow-md overflow-hidden transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105">
              <img
                src={banner} // Replace with actual image URL
                alt="Fundraiser"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-xs font-medium text-gray-500 mb-2">
                  <span className="inline-block bg-salmon text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Health
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt mr-1"></i> South Africa
                  </span>
                </div>
                <h3 className="text-lg  font-semibold mb-2">
                  Providing health food for the children
                </h3>
                <div className="flex flex-row  my-4 justify-between">
                  <p className=" ">Funded 40%</p>
                  <p className="">Left 60%</p>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-salmon h-2.5 rounded-full"
                      style={{ width: "40.5%" }} // Dynamically set width
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <i className="fas fa-box mr-1"></i> Rasied: $34,000
                    </div>
                    <div>
                      <i className="fas fa-bullseye mr-1"></i> Goal: $40,500
                    </div>
                  </div>
                </div>
                {/* Add a button or call to action here */}
              </div>
            </div>
          </div>
        </div>

        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li className="font-extrabold text-salmon hover:text-white text-lg mb-2 rounded-lg ">
              <a>Sector</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg mb-2 rounded-lg">
              <a>Retail</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a>Financial</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a>Farming</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a>Clothing</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a>Health</a>
            </li>
            <li className="font-extrabold text-salmon hover:text-white text-lg mb-2 mt-6 rounded-lg ">
              <a>Duration</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg mb-2 rounded-lg">
              <a>Short term</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a>Mid term</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a>Long term</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stocks;

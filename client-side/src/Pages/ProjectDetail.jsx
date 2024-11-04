import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null); // State to hold project data
  const [currentSlide, setCurrentSlide] = useState(0); // State for the current slide

  useEffect(() => {
    // Fetch project details from the backend
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          `https://investkoree-backend.onrender.com/founderpost/projectdetail/${id}`
        ); // Replace with your API URL
        const data = await response.json();
        setProject(data); // Set the project data in state
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, [id]);

  // If project data is not yet loaded, show a loading message
  if (!project) {
    return <div>Loading...</div>;
  }

  // Image sources from the project data
  const images = project.images || []; // Assuming project.images is an array of image URLs

  // Handler to change the current slide
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen">
      {/* Image Slider */}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row items-center">
          <div className="relative w-[50%] max-w-md mx-auto">
            <div className="carousel carousel-vertical rounded-box transform transition-transform duration-300 ease-in-out delay-150 hover:scale-125 h-96">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`carousel-item h-full ${
                    currentSlide === index ? "block" : "hidden"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${
                    currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                  } w-3 h-3 mx-1 rounded-full`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>

          <div className="lg:ml-12 lg:mt-0 mt-8 text-center lg:text-left">
            <h1 className="lg:text-4xl xs:text-lg xxs:text-lg sm:text-lg font-bold">
              {project.title} {/* Assuming project has a title field */}
            </h1>
            <div className="my-6">
              <div className="flex lg:gap-8 xs:gap-4 xxs:gap-4 sm:gap-4">
                <div className="bg-base-200 lg:p-4 xs:p-2 xxs:p-2 sm:p-2 xs:w-[25%] xxs:w-[25%] sm:w-[25%] flex flex-col lg:w-44 lg:h-20 rounded-lg xs:mx-auto xxs:mx-auto sm:mx-auto">
                  <span className="text-salmon lg:text-2xl">
                    {project.raisedAmount} Taka
                  </span>
                  <div className="xs:text-sm xxs:text-sm sm:text-sm">
                    Raised
                  </div>
                </div>
                <div className="bg-base-200 lg:p-4 xs:p-2 xxs:p-2 sm:p-2 xs:w-[25%] xxs:w-[25%] sm:w-[25%] flex flex-col lg:w-44 lg:h-20 rounded-lg xs:mx-auto xxs:mx-auto sm:mx-auto">
                  <span className="text-salmon lg:text-2xl">
                    {project.fundingAmount} Taka
                  </span>
                  <div className="xs:text-sm xxs:text-sm sm:text-sm">Goal</div>
                </div>
                <div className="bg-base-200 lg:p-4 xs:p-2 xxs:p-2 sm:p-2 xs:w-[25%] xxs:w-[25%] sm:w-[25%] flex flex-col lg:w-44 lg:h-20 rounded-lg xs:mx-auto xxs:mx-auto sm:mx-auto">
                  <span className="text-salmon lg:text-2xl">
                    {project.daysLeft} Days
                  </span>
                  <div className="xs:text-sm xxs:text-sm sm:text-sm">
                    Days Left
                  </div>
                </div>
              </div>
              <div className="lg:w-full xs:w-[95%] xxs:w-[95%] sm:w-[95%] bg-gray-200 rounded-full h-2.5 mt-8 mb-2 xs:mx-auto xxs:mx-auto sm:mx-auto">
                <div
                  className="bg-salmon h-2.5 rounded-full"
                  style={{
                    width: `${
                      (project.raisedAmount / project.fundingAmount) * 100
                    }%`,
                  }} // Calculate percentage
                ></div>
              </div>
              <div className="flex xs:ml-2 xxs:ml-2 sm:ml-2 lg:justify-between xs:justify-between xxs:justify-between sm:justify-between text-sm">
                <div>Raised :</div>
                <div className="xs:mr-2 xxs:mr-2 sm:mr-2">
                  {(
                    (project.raisedAmount / project.fundingAmount) *
                    100
                  ).toFixed(0)}
                  %
                </div>
              </div>
            </div>
            <button className="btn xs:w-[60%] xxs:w-[60%] sm:w-[60%] login-btn">
              Invest
            </button>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row xs:flex-col xxs:flex-col sm:flex-col lg:w-[50%] lg:mx-auto lg:gap-20 xs:ml-4 xxs:ml-4 sm:ml-4 xs:gap-4 xxs:gap-4 sm:gap-4">
        <div className="flex flex-col lg:w-[50%]">
          <h2 className="font-bold xs:mb-2 xxs:mb-2 sm:mb-2">Overview</h2>
          <p className="text-slate-500 xs:text-sm xxs:text-sm sm:text-sm">
            {project.overview} {/* Assuming project has an overview field */}
          </p>
        </div>
        <div>
          <div>
            <span className="font-bold">Duration :</span>
            <span className="text-slate-500 xs:text-sm xxs:text-sm sm:text-sm">
              {project.duration} {/* Assuming project has a duration field */}
            </span>
          </div>
          <div>
            <span className="font-bold">Min Investment :</span>
            <span className="text-slate-500 xs:text-sm xxs:text-sm sm:text-sm">
              {project.minInvestment} Taka{" "}
              {/* Assuming project has a minInvestment field */}
            </span>
          </div>
          <div>
            <span className="font-bold">Projected ROI :</span>
            <span className="text-slate-500 xs:text-sm xxs:text-sm sm:text-sm">
              {project.projectedROI}%{" "}
              {/* Assuming project has a projectedROI field */}
            </span>
          </div>
          <div>
            <span className="font-bold">Risk Grade :</span>
            <span className="text-slate-500 xs:text-sm xxs:text-sm sm:text-sm">
              {project.riskGrade} {/* Assuming project has a riskGrade field */}
            </span>
          </div>
        </div>
      </div>
      {/* Accordion Section */}
      <div className="mt-12 w-[80%] lg:w-[50%] xs:mb-4 xxs:mb-4 sm:mb-4 mx-auto">
        <div className="collapse collapse-plus border border-base-300 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            How Would The Funding Help You
          </div>
          <div className="collapse-content peer-checked:block">
            <p>{project.fundingHelp}</p>{" "}
            {/* Assuming project has a fundingHelp field */}
          </div>
        </div>

        <div className="collapse collapse-plus border border-base-300 rounded-box mt-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            How Do You Plan To Return The Investment
          </div>
          <div className="collapse-content peer-checked:block">
            <p>{project.returnPlan}</p>{" "}
            {/* Assuming project has a returnPlan field */}
          </div>
        </div>

        <div className="collapse collapse-plus border border-base-300 rounded-box mt-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            How Safe Do You Consider Your Business To Be?
          </div>
          <div className="collapse-content peer-checked:block">
            <p>{project.safetyAssessment}</p>{" "}
            {/* Assuming project has a safetyAssessment field */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

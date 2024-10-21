import React, { useState } from "react";

const ProjectDetail = () => {
  // State to manage the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Image sources
  const images = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  ];

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
                  className={`carousel-item h-full  ${
                    currentSlide === index ? "block" : "hidden"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="object-cover  w-full h-full"
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
            <h1 className="lg:text-4xl xs:text-lg xxs:text-lg sm:text-lg  font-bold">
              Box Office News!
            </h1>
            <div className="my-6 ">
              <div className="flex lg:gap-8 xs:gap-4  xxs:gap-4  sm:gap-4   ">
                <div className="bg-base-200 lg:p-4 xs:p-2 xxs:p-2 sm:p-2 xs:w-[25%] xxs:w-[25%] sm:w-[25%] flex flex-col lg:w-44 lg:h-20 rounded-lg xs:mx-auto xxs:mx-auto sm:mx-auto">
                  <span className="text-salmon lg:text-2xl">10000 Taka</span>
                  <div className=" xs:text-sm xxs:text-sm sm:text-sm">
                    Raised
                  </div>
                </div>
                <div className="bg-base-200 lg:p-4 xs:p-2 xxs:p-2 sm:p-2 xs:w-[25%] xxs:w-[25%] sm:w-[25%] flex flex-col lg:w-44 lg:h-20 rounded-lg xs:mx-auto xxs:mx-auto sm:mx-auto">
                  <span className="text-salmon lg:text-2xl">100000 Taka</span>
                  <div className=" xs:text-sm xxs:text-sm sm:text-sm">Goal</div>
                </div>
                <div className="bg-base-200 lg:p-4 xs:p-2 xxs:p-2 sm:p-2 xs:w-[25%] xxs:w-[25%] sm:w-[25%] flex flex-col lg:w-44 lg:h-20 rounded-lg xs:mx-auto xxs:mx-auto sm:mx-auto">
                  <span className="text-salmon lg:text-2xl">7 Days</span>
                  <div className=" xs:text-sm xxs:text-sm sm:text-sm">
                    Days Left
                  </div>
                </div>
              </div>
              <div className="lg:w-full xs:w-[95%] xxs:w-[95%] sm:w-[95%]  bg-gray-200 rounded-full h-2.5 mt-8 mb-2 xs:mx-auto xxs:mx-auto sm:mx-auto">
                <div
                  className="bg-salmon h-2.5 rounded-full"
                  style={{ width: `40%` }}
                ></div>
              </div>
              <div className="flex xs:ml-2 xxs:ml-2 sm:ml-2 lg:justify-between xs:justify-between xxs:justify-between sm:justify-between  text-sm">
                <div>Raised :</div>
                <div className="xs:mr-2 xxs:mr-2 sm:mr-2">40%</div>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            rerum quas vero maiores vitae quasi, optio, doloremque labore
            obcaecati, eum atque libero consectetur maxime tempora quidem magnam
            veritatis nobis repudiandae!
          </p>
        </div>
        <div>
          <div>
            <span className="font-bold">Duration :</span>
            <span className="text-slate-500 xs:text-sm xxs:text-sm sm:text-sm">
              Short term(1 week to 1 month)
            </span>
          </div>
          <div>
            <span className="font-bold">Min Investment :</span>
            <span className="text-slate-500 xs:text-sm xxs:text-sm sm:text-sm">
              5000taka
            </span>
          </div>
          <div>
            <span className="font-bold"> Projected ROI :</span>
            <span className="text-slate-500 xs:text-sm xxs:text-sm sm:text-sm">
              12%
            </span>
          </div>
          <div>
            <span className="font-bold">Risk Grade :</span>
            <span className="text-slate-500 xs:text-sm xxs:text-sm sm:text-sm">
              A
            </span>
          </div>
        </div>
      </div>
      {/* Accordion Section */}
      <div className="mt-12 w-[80%] lg:w-[50%] xs:mb-4 xxs:mb-4 sm:mb-4 mx-auto">
        <div className="collapse collapse-plus border border-base-300 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Section 1: Click to expand
          </div>
          <div className="collapse-content peer-checked:block">
            <p>Content for the first section.</p>
          </div>
        </div>

        <div className="collapse collapse-plus border border-base-300 rounded-box mt-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Section 2: Click to expand
          </div>
          <div className="collapse-content peer-checked:block">
            <p>Content for the second section.</p>
          </div>
        </div>

        <div className="collapse collapse-plus border border-base-300 rounded-box mt-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Section 3: Click to expand
          </div>
          <div className="collapse-content peer-checked:block">
            <p>Content for the third section.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

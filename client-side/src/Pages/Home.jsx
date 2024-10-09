import bannerpic from "../assets/banner.jpg";
import mission1 from "../assets/add-1.png";
import { useEffect, useState } from "react";
import LatestPost from "./LatestPost";
const Home = () => {
  const [latestpost, setLatestPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ProjectCol")
      .then((res) => res.json())
      .then((data) => {
        setLatestPost(data);
      });
  });
  return (
    <div>
      <div className="hero banner-img bg-salmon ">
        <div className="hero-content   flex-col gap-96 lg:flex-row-reverse text-slate-800">
          <img src={bannerpic} className="w-[800px] rounded-2xl shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold leading-24  ">
              Welcome to <br /> InvestKoree.com
            </h1>
            <p className="py-6 text-2xl">
              Its Easy and Fast to Invest.Get Profit Faster Here
            </p>
            <button className="btn btn-active banner-btn  btn-neutral">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <h5 className="text-center mt-20  text-5xl font-bold ">
        Currently Running Investments
      </h5>
      <div className="flex flex-row gap-14 items-center justify-center px-20">
        {latestpost.map((item) => (
          <LatestPost key={item._id} item={item}></LatestPost>
        ))}
      </div>
      <div className="mission-section  my-20 flex gap-10 justify-center flex-row">
        <div className="flex flex-row gap-8">
          <div>
            <img className="rounded-xl" src={mission1} alt="" />
          </div>
          <div className="mt-10">
            <img className="rounded-xl" src={mission1} alt="" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-5xl ">Why we are here </div>
          <div className="mt-20 text-xl mb-10"></div>
          <p className="text-3xl mb-6">Our services</p>
          <div className="text-xl ">
            <li>Easy to Invest</li>
            <li>Fastest Transaction</li>
            <li>High Return on Investment</li>
          </div>
        </div>
      </div>
      <section className="customer-review my-32 mt-44">
        <p className=" text-center text-2xl mb-4">Testimonial</p>
        <p className="text-5xl text-center mb-16">What people say about us</p>
        <div className="flex items-center justify-center flex-row gap-8">
          <div className="bg-white w-[35%] hover:bg-salmon rounded-lg shadow-md p-6 group">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-900 group-hover:text-white">
                  Dianne Russell
                </div>
                <div className="text-sm text-gray-500 group-hover:text-white">
                  Founder
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-gray-700 leading-relaxed group-hover:text-white">
                Campoal is great for people to bring changes to what they
                believe in, it's nice to see some good morals and common sense
                being acknowledge where modern governments etc fail.
              </p>
            </div>
          </div>

          <div className="bg-white w-[35%] hover:bg-salmon rounded-lg shadow-md p-6 group">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-900 group-hover:text-white">
                  Dianne Russell
                </div>
                <div className="text-sm text-gray-500 group-hover:text-white">
                  Founder
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-gray-700 leading-relaxed group-hover:text-white">
                Campoal is great for people to bring changes to what they
                believe in, it's nice to see some good morals and common sense
                being acknowledge where modern governments etc fail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

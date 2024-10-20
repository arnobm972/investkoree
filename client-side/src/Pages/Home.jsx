import bannerpic from "../assets/banner.jpg";
import mission1 from "../assets/add-1.png";
import LatestPost from "./LatestPost";

const Home = () => {
  // Hardcoded data for latest posts
  const latestPosts = [
    {
      _id: "1",
      location: "New York, USA",
      funded: "70%",
      left_for_fund: "30%",
      raised: 7000,
      sector: "Technology",
      project_pic: "https://i.ibb.co.com/L5TY0Nt/s2.jpg",
      required_funding: 10000,
      description: "Innovative Tech Solution for Everyday Problems",
    },
    {
      _id: "2",
      location: "San Francisco, USA",
      funded: "50%",
      left_for_fund: "50%",
      raised: 5000,
      sector: "Health",
      project_pic: "https://i.ibb.co.com/L5TY0Nt/s2.jpg",
      required_funding: 10000,
      description: "Revolutionizing Healthcare with AI",
    },
    {
      _id: "3",
      location: "London, UK",
      funded: "30%",
      left_for_fund: "70%",
      raised: 3000,
      sector: "Finance",
      project_pic: "https://i.ibb.co.com/L5TY0Nt/s2.jpg",
      required_funding: 10000,
      description: "Blockchain-based Finance Management",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero banner-img bg-salmon">
        <div className="hero-content flex-col gap-8 lg:flex-row-reverse lg:gap-24 text-slate-800">
          <img
            src={bannerpic}
            className="w-full sm:w-[500px] lg:w-[800px] rounded-2xl shadow-2xl"
            alt="Banner"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Welcome to <br /> InvestKoree.com
            </h1>
            <p className="py-6 text-lg sm:text-2xl">
              It's Easy and Fast to Invest. Get Profit Faster Here.
            </p>
            <button className="btn btn-active banner-btn btn-neutral">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Currently Running Investments Section */}
      <h5 className="text-center mt-20 text-3xl sm:text-5xl font-bold">
        Currently Running Investments
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-[1200px] lg:mx-auto sm:mx-auto gap-6 px-6 lg:px-20">
        {latestPosts.map((item) => (
          <LatestPost key={item._id} item={item} />
        ))}
      </div>

      {/* Mission Section */}
      <div className="mission-section my-20 flex flex-col lg:flex-row gap-10 justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-8">
          <img
            className="rounded-xl w-full sm:w-[250px] lg:w-[300px]"
            src={mission1}
            alt=""
          />
          <img
            className="rounded-xl w-full sm:w-[250px] lg:w-[300px] mt-8 lg:mt-0"
            src={mission1}
            alt=""
          />
        </div>
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl">Why we are here</h2>
          <p className="mt-4 text-lg sm:text-xl mb-10">Our Mission</p>
          <p className="text-3xl mb-6">Our services</p>
          <ul className="text-lg sm:text-xl">
            <li>Easy to Invest</li>
            <li>Fastest Transaction</li>
            <li>High Return on Investment</li>
          </ul>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="customer-review my-32">
        <p className="text-center text-xl sm:text-2xl mb-4">Testimonial</p>
        <p className="text-center text-3xl sm:text-5xl mb-16">
          What people say about us
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
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
        </div>
      </section>
    </div>
  );
};

export default Home;

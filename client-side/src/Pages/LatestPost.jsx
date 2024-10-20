import PropTypes from "prop-types";

const LatestPost = ({ item }) => {
  const {
    location,
    funded,
    left_for_fund,
    raised,
    sector,
    project_pic,
    required_funding,
    description,
  } = item;

  // Calculate funding percentage for progress bar
  const fundingPercentage = (raised / required_funding) * 100;

  return (
    <div className="mx-auto">
      <div
        className="bg-white h-[450px] my-24 w-[320px] rounded-2xl shadow-md overflow-hidden
        transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105"
      >
        <img
          src={project_pic || "https://via.placeholder.com/320x150"} // Fallback image
          alt="Fundraiser"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="text-xs font-medium text-gray-500 mb-2">
            <span className="inline-block bg-salmon text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
              {sector}
            </span>
            <span>
              <i className="fas fa-map-marker-alt mr-1"></i> {location}
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{description}</h3>
          <div className="flex flex-row my-4 justify-between">
            <p className="">Funded: {funded}</p>
            <p className="">Left for fund: {left_for_fund}</p>
          </div>
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-salmon h-2.5 rounded-full"
                style={{ width: `${fundingPercentage}%` }} // Dynamically set width
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <div>
                <i className="fas fa-box mr-1"></i> Raised: {raised} taka
              </div>
              <div>
                <i className="fas fa-bullseye mr-1"></i> Goal:{" "}
                {required_funding} taka
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LatestPost.propTypes = {
  item: PropTypes.shape({
    location: PropTypes.string.isRequired,
    funded: PropTypes.string.isRequired,
    left_for_fund: PropTypes.string.isRequired,
    raised: PropTypes.number.isRequired,
    sector: PropTypes.string.isRequired,
    project_pic: PropTypes.string.isRequired,
    required_funding: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default LatestPost;

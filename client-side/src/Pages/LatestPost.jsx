import PropTypes from "prop-types";

const LatestPost = ({ item }) => {
  const {
    address,
    // funded,
    // left_for_fund,
    // raised,
    businessSector,
    businessPic,
    fundingAmount,
    additionalComments,
  } = item;

  // Calculate funding percentage for progress bar
  const fundingPercentage = (50000 / fundingAmount) * 100;

  return (
    <div className="mx-auto">
      <div
        className="bg-white h-[450px] lg:my-24  lg:w-[320px] sm:w-[290px] xs:w-[290px] xxs:w-[290px]  rounded-2xl shadow-md overflow-hidden
        transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105"
      >
        <img
          src={businessPic || "https://via.placeholder.com/320x150"} // Fallback image
          alt="Fundraiser"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="text-xs font-medium text-gray-500 mb-2">
            <span className="inline-block bg-salmon text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
              {businessSector}
            </span>
            <span>
              <i className="fas fa-map-marker-alt mr-1"></i> {address}
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{additionalComments}</h3>
          <div className="flex flex-row my-4 justify-between">
            <p className="">Funded: 50000</p>
            <p className="">Left for fund: 20000</p>
          </div>
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-salmon h-2.5 rounded-full"
                style={{ width: `${fundingPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <div>
                <i className="fas fa-box lg:mr-1 xxs:text-xs xs:text-xs sm-text-xs"></i>
                Raised: {raised} taka
              </div>
              <div>
                <i className="fas fa-bullseye lg:mr-1 xxs:text-xs xs:text-xs sm-text-xs"></i>
                Goal:
                {fundingAmount} taka
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
    address: PropTypes.string.isRequired,
    // funded: PropTypes.string.isRequired,
    // left_for_fund: PropTypes.string.isRequired,
    // raised: PropTypes.number.isRequired,
    businessSector: PropTypes.string.isRequired,
    businessPic: PropTypes.string.isRequired,
    fundingAmount: PropTypes.number.isRequired,
    additionalComments: PropTypes.string.isRequired,
  }).isRequired,
};

export default LatestPost;

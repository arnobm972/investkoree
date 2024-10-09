import { useState } from "react";

const FounderPost = () => {
  const [securityOption, setSecurityOption] = useState("");
  const [otherOption, setOtherOption] = useState(false);

  const handleSecurityOptionChange = (e) => {
    setSecurityOption(e.target.value);
    if (e.target.value === "Other") {
      setOtherOption(true);
    } else {
      setOtherOption(false);
    }
  };
  return (
    <div>
      <form className=" mb-10" action="">
        <p className="text-2xl font-bold my-10">For Business Investment</p>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name of the Business</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3  w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Address</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Phone Number</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your NID Copy</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your TIN</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your Tax Information</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your Trade License Copy</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Upload Your Recent Bank Statement
            </span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">What Category Of Business</span>
          </div>
          <select className="select select-warning w-full max-w-xs " required>
            <option disabled selected>
              Pick a Category
            </option>
            <option>Shariah</option>
            <option>Stocks</option>
            <option>Fixed Retun</option>
          </select>
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">What Sector Of Business</span>
          </div>
          <select className="select select-warning w-full max-w-xs " required>
            <option disabled selected>
              Pick a Sector
            </option>
            <option>Health</option>
            <option>Farming</option>
            <option>Clothing</option>
            <option>Financial</option>
            <option>Retail</option>
          </select>
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Investment Duration</span>
          </div>
          <select className="select select-warning w-full max-w-xs " required>
            <option disabled selected>
              Pick a Duration
            </option>
            <option>Short term(1 week to 1 month)</option>
            <option>Mid term(1 month to 3 months)</option>
            <option>Long term(3 months+)</option>
          </select>
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Assets/Capital of Business in BDT
            </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Revenue per month in BDT</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Required Funding Amount</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              How will Funding Help the Business
            </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Which Following Way You Can Provide as Security/Collatral
            </span>
          </div>
          <select
            className="select select-warning w-full max-w-xs "
            value={securityOption}
            onChange={handleSecurityOptionChange}
            required
          >
            <option disabled selected>
              Pick a Security Option
            </option>
            <option>Bank Guarantee</option>
            <option>Property</option>
            <option>Check</option>
            <option>Gurantato</option>
            <option>Other </option>
          </select>
        </label>
        {otherOption && (
          <label className="form-control my-3 w-full max-w-xs mt-4">
            <div className="label">
              <span className="label-text">Please specify</span>
            </div>
            <input
              type="text"
              placeholder="Specify other security option"
              className="input input-bordered input-warning w-full max-w-xs"
              required
            />
          </label>
        )}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your Security Option Here</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Which of the Following Way Do You Mainatain Your Financials of
              Your Business
            </span>
          </div>
          <select
            className="select select-warning w-full max-w-xs "
            value={securityOption}
            onChange={handleSecurityOptionChange}
            required
          >
            <option disabled selected>
              Pick a Option
            </option>
            <option>On Paper Manually</option>
            <option>On Excel SpreedShit Manually</option>
            <option>Software/ERP</option>
            <option>Other </option>
          </select>
        </label>
        {otherOption && (
          <label className="form-control w-full max-w-xs mt-4">
            <div className="label">
              <span className="label-text">Please specify</span>
            </div>
            <input
              type="text"
              placeholder="Specify other documentation option"
              className="input input-bordered input-warning w-full max-w-xs"
              required
            />
          </label>
        )}
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Upload Your Financial Documentation Here
            </span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Additonal Comments About Your Business or Any Quaries For Us
            </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>
        <input
          type="submit"
          className="post-btn"
          name="investor_signup"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default FounderPost;

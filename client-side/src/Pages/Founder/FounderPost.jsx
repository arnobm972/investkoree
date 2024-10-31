import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FounderPost = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    address: "",
    phone: "",
    businessCategory: "",
    businessSector: "",
    investmentDuration: "",
    securityOption: "",
    otherSecurityOption: "",
    documentationOption: "",
    otherDocumentationOption: "",
    assets: "",
    revenue: "",
    fundingAmount: "",
    fundingHelp: "",
    returnPlan: "",
    businessSafety: "",
    additionalComments: "",
  });
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [otherOption, setOtherOption] = useState(false);
  const [otherDocumentation, setOtherDocumentation] = useState(false);
  const [images, setImages] = useState([]);
  const [nidFile, setNidFile] = useState(null);
  const [tinFile, setTinFile] = useState(null);
  const [taxFile, setTaxFile] = useState(null);
  const [tradeLicenseFile, setTradeLicenseFile] = useState(null);
  const [bankStatementFile, setBankStatementFile] = useState(null);
  const [securityFile, setSecurityFile] = useState(null);
  const [financialFile, setFinancialFile] = useState(null);

  // Handle image file changes
  const handleFileChange = (e, setFile) => setFile(e.target.files[0]);
  const handleMultipleFileChange = (e) => setImages(Array.from(e.target.files));

  // Handle input change for text fields and selects
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSecurityOptionChange = (e) => {
    const selectedOption = e.target.value;
    setFormData({
      ...formData,
      securityOption: selectedOption,
    });
    setOtherOption(selectedOption === "Other");
  };

  const handleDocumentationOptionChange = (e) => {
    const selectedOption = e.target.value;
    setFormData({
      ...formData,
      documentationOption: selectedOption,
    });
    setOtherDocumentation(selectedOption === "Other");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    // Append form data fields
    Object.keys(formData).forEach((key) => {
      postData.append(key, formData[key]);
    });

    // Append files
    images.forEach((image, index) =>
      postData.append(`images[${index}]`, image)
    );
    postData.append("nidCopy", nidFile);
    postData.append("tinCopy", tinFile);
    postData.append("taxCopy", taxFile);
    postData.append("tradeLicense", tradeLicenseFile);
    postData.append("bankStatement", bankStatementFile);
    postData.append("securityFile", securityFile);
    postData.append("financialFile", financialFile);
    const token = localStorage.getItem("token"); // Adjust this based on your implementation

    try {
      const response = await fetch(`${API_URL}/postdata/founderpost`, {
        method: "POST",
        body: postData,
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Failed to submit form.");
      }
    } catch (error) {
      toast.error("Error submitting form.");
    }
  };
  return (
    <div>
      <form className="mb-10" onSubmit={handleSubmit}>
        <p className="lg:text-2xl xs:text-lg xxs:text-lg sm:text-lg  font-bold my-10">
          For Business Investment
        </p>

        {/* Business Name */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name of the Business</span>
          </div>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>

        {/* Email */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>

        {/* Address */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Address</span>
          </div>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>

        {/* Business Picture */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Upload Your Business's Picture Here
            </span>
          </div>
          <input
            type="file"
            name="businessPicture"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            accept="image/*"
            onChange={handleMultipleFileChange}
            multiple
            required
          />
        </label>

        {/* Phone Number */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Phone Number</span>
          </div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>

        {/* NID Copy */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your NID Copy</span>
          </div>
          <input
            type="file"
            name="nidCopy"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            onChange={(e) => handleFileChange(e, setNidFile)} // Pass the correct setter
            required
          />
        </label>

        {/* TIN Copy */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your TIN</span>
          </div>
          <input
            type="file"
            name="tinCopy"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            onChange={(e) => handleFileChange(e, setTinFile)} // Pass the correct setter
            required
          />
        </label>

        {/* Tax Information */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your Tax Information</span>
          </div>
          <input
            type="file"
            name="taxCopy"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            onChange={(e) => handleFileChange(e, setTaxFile)} // Pass the correct setter
            required
          />
        </label>

        {/* Trade License */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your Trade License Copy</span>
          </div>
          <input
            type="file"
            name="tradelicense"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            onChange={(e) => handleFileChange(e, setTradeLicenseFile)} // Pass the correct setter
            required
          />
        </label>

        {/* Bank Statement */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Upload Your Recent Bank Statement
            </span>
          </div>
          <input
            type="file"
            name="bankStatement"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            onChange={(e) => handleFileChange(e, setBankStatementFile)} // Pass the correct setter
            required
          />
        </label>

        {/* Business Category */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">What Category Of Business</span>
          </div>
          <select
            name="businessCategory"
            value={formData.businessCategory}
            onChange={handleInputChange}
            className="select select-warning w-full max-w-xs"
            required
          >
            <option disabled value="">
              Pick a Category
            </option>
            <option value="Shariah">Shariah</option>
            <option value="Stocks">Stocks</option>
            <option value="Fixed Return">Fixed Return</option>
          </select>
        </label>

        {/* Business Sector */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">What Sector Of Business</span>
          </div>
          <select
            name="businessSector"
            value={formData.businessSector}
            onChange={handleInputChange}
            className="select select-warning w-full max-w-xs"
            required
          >
            <option disabled value="">
              Pick a Sector
            </option>
            <option value="Health">Health</option>
            <option value="Farming">Farming</option>
            <option value="Clothing">Clothing</option>
            <option value="Financial">Financial</option>
            <option value="Retail">Retail</option>
          </select>
        </label>

        {/* Investment Duration */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Investment Duration</span>
          </div>
          <select
            name="investmentDuration"
            value={formData.investmentDuration}
            onChange={handleInputChange}
            className="select select-warning w-full max-w-xs"
            required
          >
            <option disabled value="">
              Pick a Duration
            </option>
            <option value="short-term">short-term(2 weeks to 1 month)</option>
            <option value="mid-term">mid-term(2 months to 6 months)</option>
            <option value="long-term">long-term(6 months+)</option>
          </select>
        </label>

        {/* Security Option */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Pick a Security Option</span>
          </div>
          <select
            name="securityOption"
            value={formData.securityOption}
            onChange={handleSecurityOptionChange}
            className="select select-warning w-full max-w-xs"
            required
          >
            <option disabled value="">
              Pick a Security
            </option>
            <option value="Property">Property</option>
            <option value="Equipment">Equipment</option>
            <option value="Inventory">Inventory</option>
            <option value="Other">Other</option>
          </select>
        </label>

        {otherOption && (
          <label className="form-control my-3 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Other Security Option</span>
            </div>
            <input
              type="text"
              name="otherSecurityOption"
              value={formData.otherSecurityOption}
              onChange={handleInputChange}
              placeholder="Type here"
              className="input input-bordered input-warning w-full max-w-xs"
              required={otherOption}
            />
          </label>
        )}

        {/* Upload Security File */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload The Security File</span>
          </div>
          <input
            type="file"
            name="securityFile"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            onChange={(e) => handleFileChange(e, setSecurityFile)} // Pass the correct setter
            required
          />
        </label>

        {/* Documentation Option */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Pick a Documentation Option</span>
          </div>
          <select
            name="documentationOption"
            value={formData.documentationOption}
            onChange={handleDocumentationOptionChange}
            className="select select-warning w-full max-w-xs"
            required
          >
            <option disabled value="">
              Pick a Documentation
            </option>
            <option value="Audit Report">Audit Report</option>
            <option value="Income Statement">Income Statement</option>
            <option value="Financial Projections">Financial Projections</option>
            <option value="Other">Other</option>
          </select>
        </label>

        {otherDocumentation && (
          <label className="form-control my-3 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Other Documentation Option</span>
            </div>
            <input
              type="text"
              name="otherDocumentationOption"
              value={formData.otherDocumentationOption}
              onChange={handleInputChange}
              placeholder="Type here"
              className="input input-bordered input-warning w-full max-w-xs"
              required={otherDocumentation}
            />
          </label>
        )}

        {/* Financial Document */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload The Financial Document</span>
          </div>
          <input
            type="file"
            name="financialFile"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            onChange={(e) => handleFileChange(e, setFinancialFile)} // Pass the correct setter
            required
          />
        </label>

        {/* Assets */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">What Is Your Assets Worth</span>
          </div>
          <input
            type="text"
            name="assets"
            value={formData.assets}
            onChange={handleInputChange}
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>

        {/* Revenue */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">What Is Your Revenue Worth</span>
          </div>
          <input
            type="text"
            name="revenue"
            value={formData.revenue}
            onChange={handleInputChange}
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>

        {/* Funding Amount */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              How Much Funding Are You Looking For
            </span>
          </div>
          <input
            type="text"
            name="fundingAmount"
            value={formData.fundingAmount}
            onChange={handleInputChange}
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </label>

        {/* Funding Help */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">How Would The Funding Help You</span>
          </div>
          <textarea
            name="fundingHelp"
            value={formData.fundingHelp}
            onChange={handleInputChange}
            className="textarea textarea-warning w-full max-w-xs"
            required
          ></textarea>
        </label>

        {/* Return Plan */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              How Do You Plan To Return The Investment
            </span>
          </div>
          <textarea
            name="returnPlan"
            value={formData.returnPlan}
            onChange={handleInputChange}
            className="textarea textarea-warning w-full max-w-xs"
            required
          ></textarea>
        </label>

        {/* Business Safety */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              How Safe Do You Consider Your Business To Be?
            </span>
          </div>
          <textarea
            name="businessSafety"
            value={formData.businessSafety}
            onChange={handleInputChange}
            className="textarea textarea-warning w-full max-w-xs"
            required
          ></textarea>
        </label>

        {/* Additional Comments */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Any Additional Comments?</span>
          </div>
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleInputChange}
            className="textarea textarea-warning w-full max-w-xs"
          ></textarea>
        </label>

        {/* Submit Button */}
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FounderPost;

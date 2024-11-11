import { useState } from "react";
import { toast } from "react-toastify";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FounderPost = () => {
  const [formData, setFormData] = useState({
    // businessName: "",
    // email: "",
    // address: "",
    // phone: "",
    // businessCategory: "",
    // businessSector: "",
    // investmentDuration: "",
    // securityOption: "",
    // otherSecurityOption: "",
    // documentationOption: "",
    // otherDocumentationOption: "",
    // assets: "",
    // revenue: "",
    // fundingAmount: "",
    // fundingHelp: "",
    // returnPlan: "",
    // businessSafety: "",
    // additionalComments: "",
    // projectedROI: "",
    // returndate: "",
  });

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const navigate = useNavigate();
  // const [otherOption, setOtherOption] = useState(false);
  // const [otherDocumentation, setOtherDocumentation] = useState(false);
  // const [images, setImages] = useState([]);
  // const [nidFile, setNidFile] = useState(null);
  const [businessPic, setbusinessPic] = useState(null);
  // const [tinFile, setTinFile] = useState(null);
  // const [taxFile, setTaxFile] = useState(null);
  // const [tradeLicenseFile, setTradeLicenseFile] = useState(null);
  // const [bankStatementFile, setBankStatementFile] = useState(null);
  // const [securityFile, setSecurityFile] = useState(null);
  // const [financialFile, setFinancialFile] = useState(null);

  // Handle image file changes
  const handleFileChange = (e, setFile) => setFile(e.target.files[0]);
  // const handleMultipleFileChange = (e) => setImages(Array.from(e.target.files));

  // Handle input change for text fields and selects
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value, // This assumes single value inputs
  //   }));
  // };

  // const handleSecurityOptionChange = (e) => {
  //   const selectedOption = e.target.value;
  //   setFormData({
  //     ...formData,
  //     securityOption: selectedOption,
  //   });
  //   setOtherOption(selectedOption === "Other");
  // };

  // const handleDocumentationOptionChange = (e) => {
  //   const selectedOption = e.target.value;
  //   setFormData({
  //     ...formData,
  //     documentationOption: selectedOption,
  //   });
  //   setOtherDocumentation(selectedOption === "Other");
  // };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    // Append form data fields
    Object.keys(formData).forEach((key) => {
      postData.append(key, formData[key]);
      const value = Array.isArray(formData[key])
        ? formData[key][0]
        : formData[key];
      postData.append(key, value);
    });

    // Append single files for other fields
    if (businessPic) postData.append("businessPicture", businessPic);
    // if (nidFile) postData.append("nidCopy", nidFile);
    // if (tinFile) postData.append("tinCopy", tinFile);
    // if (taxFile) postData.append("taxCopy", taxFile);
    // if (tradeLicenseFile) postData.append("tradeLicense", tradeLicenseFile);
    // if (bankStatementFile) postData.append("bankStatement", bankStatementFile);
    // if (securityFile) postData.append("securityFile", securityFile);
    // if (financialFile) postData.append("financialFile", financialFile);

    const token = localStorage.getItem("token");
    // Adjust this based on your implementation

    try {
      const response = await fetch(`${API_URL}/founderpost/upload`, {
        method: "POST",
        body: postData,
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });

      if (response.ok) {
        navigate("/");
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
      <form
        className="mb-10"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        action="/upload"
      >
        <p className="lg:text-2xl xs:text-lg xxs:text-lg sm:text-lg  font-bold my-10">
          For Business Investment
        </p>

        {/* Business Name */}
        {/* <label className="form-control my-3 w-full max-w-xs">
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
        </label> */}

        {/* Email */}
        {/* <label className="form-control my-3 w-full max-w-xs">
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
        </label> */}

        {/* Address */}
        {/* <label className="form-control my-3 w-full max-w-xs">
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
        </label> */}

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
            accept="image/*"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            onChange={(e) => handleFileChange(e, setbusinessPic)}
            required
          />
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

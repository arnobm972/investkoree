import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FounderPostReview = () => {
  const location = useLocation();
  const { post } = location.state; // Get the post data passed from FounderPending
  const [formData, setFormData] = useState(post || null); // Initialize form data with post data
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:10000";
  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
  // Handle file change (for images/videos)
  const handleFileChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.files[0] });
  };
  const handleMultipleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    setFormData({ ...formData, businessPictures: files }); // Update state with the array of files
  };

  // Sanitize filename function
  const sanitizeFilename = (filename) => {
    return filename
      .replace(/[^a-zA-Z0-9-_\.]/g, "_")
      .replace(/_{2,}/g, "_")
      .substring(0, 255);
  };

  // Submit updated data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = new FormData();

      // Handle non-file fields
      for (const key of Object.keys(formData)) {
        if (!Array.isArray(formData[key]) && formData[key] !== null) {
          postData.append(key, formData[key]);
        }
      }

      // Handle file uploads
      const fileUploadPromises = [];

      // Handle businessPictures
      if (formData.businessPictures) {
        for (const file of formData.businessPictures) {
          const sanitizedName = sanitizeFilename(file.name);
          const fileUrlPromise = uploadImageToImgBB(file, sanitizedName);
          fileUploadPromises.push(fileUrlPromise);
          postData.append(`sanitizedBusinessPictureName`, sanitizedName);
        }
      }

      // Handle other file fields
      const fileFields = [
        "nidFile",
        "tinFile",
        "taxFile",
        "tradeLicenseFile",
        "bankStatementFile",
        "securityFile",
        "financialFile",
        "videoFile",
      ];

      for (const field of fileFields) {
        if (formData[field]) {
          const sanitizedName = sanitizeFilename(formData[field].name);
          const fileUrlPromise = uploadImageToImgBB(
            formData[field],
            sanitizedName
          );
          fileUploadPromises.push(fileUrlPromise);
          postData.append(
            `sanitized${field.charAt(0).toUpperCase() + field.slice(1)}Name`,
            sanitizedName
          );
        }
      }

      // Wait for all file uploads to complete
      const fileUrls = await Promise.all(fileUploadPromises);

      // Append the uploaded file URLs to postData
      let urlIndex = 0;
      if (formData.businessPictures) {
        for (const file of formData.businessPictures) {
          postData.append("businessPictures", fileUrls[urlIndex++]);
        }
      }

      // Append other file URLs to postData
      for (const field of fileFields) {
        if (formData[field]) {
          postData.append(field, fileUrls[urlIndex++]);
        }
      }

      // Make PUT request
      await axios.put(`${API_URL}/adminpost/update/${formData._id}`, postData);
      navigate("/founderpending");
      toast.success("Post has been Successfully Updated "); // Redirect after successful update
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
  // Function to upload an image to ImgBB
  const uploadImageToImgBB = async (image, sanitizedName) => {
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const formData = new FormData();
    formData.append("image", image, sanitizedName);

    const response = await axios.post(image_hosting_api, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.data.url; // Return the image URL
  };

  useEffect(() => {
    // Set initial form data from post data
    if (post) {
      setFormData(post);
    }
  }, [post]);
  return (
    <div>
      <h2 className="text-2xl font-bold my-5">Edit Post</h2>
      <form onSubmit={handleSubmit} className="mb-10">
        {/* Business Name */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Business Name</span>
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

        {/* Description */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Details of your Business</span>
          </div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Type here"
            className="textarea textarea-bordered textarea-warning w-full max-w-xs"
            rows="4"
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

        {/* Business Pictures */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Upload Your Business's Picture Here
            </span>
          </div>
          <input
            type="file"
            name="businessPictures"
            accept="image/*"
            onChange={handleMultipleFileChange}
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            multiple
          />
        </label>
        <div className="my-3">
          {post.businessPictures && post.businessPictures.length > 0 && (
            <div>
              <h3 className="font-bold">
                Previously Uploaded Business Pictures:
              </h3>
              <ul>
                {post.businessPictures.map((picture, index) => (
                  <li key={index} className="text-gray-700">
                    {picture.split("/").pop()}{" "}
                    {/* Display only the file name */}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Video */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Upload Your Business's Video Here (Max 50mb)
            </span>
          </div>
          <input
            type="file"
            accept="video/*"
            name="videoFile"
            onChange={(e) => handleFileChange(e, "videoFile")}
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
          />
        </label>
        <div className="my-3">
          {post.videoFile && (
            <div>
              <h3 className="font-bold">Previously Uploaded Video:</h3>
              <p className="text-gray-700">
                {post.videoFile.split("/").pop()}
              </p>{" "}
              {/* Display only the file name */}
            </div>
          )}
        </div>
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
            <option value="short-term">short-term (2 weeks to 1 month)</option>
            <option value="mid-term">mid-term (2 months to 6 months)</option>
            <option value="long-term">long-term (6 months+)</option>
          </select>
        </label>
        {/* NID Copy */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your NID Copy</span>
          </div>
          <input
            type="file"
            name="nidFile"
            onChange={(e) => handleFileChange(e, "nidFile")}
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
          />
        </label>
        <div className="my-3">
          {post.nidFile && (
            <div>
              <h3 className="font-bold">Previously Uploaded NID Copy:</h3>
              <p className="text-gray-700">{post.nidFile.split("/").pop()}</p>
            </div>
          )}
        </div>

        {/* TIN Copy */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your TIN</span>
          </div>
          <input
            type="file"
            name="tinFile"
            onChange={(e) => handleFileChange(e, "tinFile")}
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
          />
        </label>
        <div className="my-3">
          {post.tinFile && (
            <div>
              <h3 className="font-bold">Previously Uploaded TIN:</h3>
              <p className="text-gray-700">{post.tinFile.split("/").pop()}</p>
            </div>
          )}
        </div>
        {/* Tax Information */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your Tax Information</span>
          </div>
          <input
            type="file"
            name="taxFile"
            onChange={(e) => handleFileChange(e, "taxFile")}
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
          />
        </label>
        <div className="my-3">
          {post.taxFile && (
            <div>
              <h3 className="font-bold">
                Previously Uploaded Tax Information:
              </h3>
              <p className="text-gray-700">{post.taxFile.split("/").pop()}</p>
            </div>
          )}
        </div>

        {/* Trade License */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload Your Trade License Copy</span>
          </div>
          <input
            type="file"
            name="tradeLicenseFile"
            onChange={(e) => handleFileChange(e, "tradeLicenseFile")}
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
          />
        </label>
        <div className="my-3">
          {post.tradeLicenseFile && (
            <div>
              <h3 className="font-bold">Previously Uploaded Trade License:</h3>
              <p className="text-gray-700">
                {post.tradeLicenseFile.split("/").pop()}
              </p>
            </div>
          )}
        </div>

        {/* Bank Statement */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Upload Your Recent Bank Statement
            </span>
          </div>
          <input
            type="file"
            name="bankStatementFile"
            onChange={(e) => handleFileChange(e, "bankStatementFile")}
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
          />
        </label>
        <div className="my-3">
          {post.bankStatementFile && (
            <div>
              <h3 className="font-bold">Previously Uploaded Bank Statement:</h3>
              <p className="text-gray-700">
                {post.bankStatementFile.split("/").pop()}
              </p>
            </div>
          )}
        </div>

        {/* Security Option */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Pick a Security Option:</span>
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

        {/* Other Security Option */}
        {otherOption && (
          <label className="form-control my-3 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Specify Other Security Option</span>
            </div>
            <input
              type="text"
              name="otherSecurity"
              value={formData.otherSecurity}
              onChange={handleInputChange}
              placeholder="Type here"
              className="input input-bordered input-warning w-full max-w-xs"
              required={otherOption}
            />
          </label>
        )}

        {/* Security File */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload The Security File</span>
          </div>
          <input
            type="file"
            name="securityFile"
            onChange={(e) => handleFileChange(e, "securityFile")}
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
          />
        </label>
        <div className="my-3">
          {post.securityFile && (
            <div>
              <h3 className="font-bold">Previously Uploaded Security File:</h3>
              <p className="text-gray-700">
                {post.securityFile.split("/").pop()}
              </p>
            </div>
          )}
        </div>
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

        {/* Other Documentation Option */}
        {otherDocumentation && (
          <label className="form-control my-3 w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Specify Other Documentation Option
              </span>
            </div>
            <input
              type="text"
              name="otherDocumentation"
              value={formData.otherDocumentation}
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
            onChange={(e) => handleFileChange(e, "financialFile")}
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
          />
        </label>
        <div className="my-3">
          {post.financialFile && (
            <div>
              <h3 className="font-bold">
                Previously Uploaded Financial Document:
              </h3>
              <p className="text-gray-700">
                {post.financialFile.split("/").pop()}
              </p>
            </div>
          )}
        </div>

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
            placeholder="Type here"
            className="textarea textarea-bordered textarea-warning w-full max-w-xs"
            required
          />
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
            placeholder="Type here"
            className="textarea textarea-bordered textarea-warning w-full max-w-xs"
            required
          />
        </label>

        {/* Return Date */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">When is Your Return Date</span>
          </div>
          <textarea
            name="returndate"
            value={formData.returndate}
            onChange={handleInputChange}
            placeholder="Type here"
            className="textarea textarea-bordered textarea-warning w-full max-w-xs"
            required
          />
        </label>

        {/* Business Safety */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              How Safe Do You Consider Your Business To Be?
            </span>
          </div>{" "}
          <textarea
            name="businessSafety"
            value={formData.businessSafety}
            onChange={handleInputChange}
            placeholder="Type here"
            className="textarea textarea-bordered textarea-warning w-full max-w-xs"
            required
          />
        </label>

        {/* Projected ROI */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your projected ROI</span>
          </div>
          <textarea
            name="projectedROI"
            value={formData.projectedROI}
            onChange={handleInputChange}
            placeholder="Type here"
            className="textarea textarea-bordered textarea-warning w-full max-w-xs"
            required
          />
        </label>

        {/* Additional Information */}
        <label className="form-control my-3 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Additional Information</span>
          </div>
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleInputChange}
            placeholder="Type here"
            className="textarea textarea-bordered textarea-warning w-full max-w-xs"
            rows="4"
          />
        </label>

        {/* Submit Button */}
        <div className="form-control my-3">
          <button type="submit" className="btn btn-warning w-full max-w-xs">
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default FounderPostReview;
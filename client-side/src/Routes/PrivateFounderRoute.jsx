// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import PropTypes from "prop-types";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateFounderRoute = ({ children }) => {
//   const userInfo = localStorage.getItem("userInfo")
//     ? JSON.parse(localStorage.getItem("userInfo"))
//     : null;
//   console.log(userInfo);

//   if (loading) {
//     return <span className="loading loading-spinner loading-lg"></span>;
//   }

//   if (userInfo && userInfo.role === "founder") {
//     return children;
//   }

//   return (
//     <Navigate replace state={location.pathname} to="/founderlogin"></Navigate>
//   );
// };

// PrivateFounderRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default PrivateFounderRoute;

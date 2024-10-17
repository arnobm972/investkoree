// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import PropTypes from "prop-types";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateAdminRoute = ({ children }) => {
//   const { user, loading, userType } = useContext(AuthContext);
//   const location = useLocation();

//   if (loading) {
//     return <span className="loading loading-spinner loading-lg"></span>;
//   }

//   if (user && userType === "admin") {
//     return children;
//   }

//   return (
//     <Navigate replace state={location.pathname} to="/adminlogin"></Navigate>
//   );
// };

// PrivateAdminRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default PrivateAdminRoute;

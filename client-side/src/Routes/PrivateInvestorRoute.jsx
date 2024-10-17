// import { useContext } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";

// const PrivateInvestorRoute = () => {
//   const { user, loading, isAuthenticated, userType } = useContext(AuthContext);
//   const location = useLocation();

//   if (loading) {
//     return <span className="loading loading-spinner loading-lg"></span>;
//   }

//   if (user && isAuthenticated && userType === "investor") {
//     return <Outlet />;
//   } else {
//     return <Navigate to="/investorlogin" state={{ from: location }} replace />;
//   }
// };

// export default PrivateInvestorRoute;

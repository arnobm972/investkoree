import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateFounderRoute = ({ children }) => {
  const { user, loading, userType } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user && userType === "founder") {
    return children;
  }

  return (
    <Navigate replace state={location.pathname} to="/founderlogin"></Navigate>
  );
};

PrivateFounderRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateFounderRoute;

import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { ToastContainer } from "react-toastify";
import AuthProvider from "../providers/AuthProvider";

const Main = () => {
  return (
    <div className="roboto-regular bg-gray-100">
      <AuthProvider>
        <Navbar></Navbar>
        <ToastContainer></ToastContainer>
        <Outlet></Outlet>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
};

export default Main;

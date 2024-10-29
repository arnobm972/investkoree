import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div className="roboto-regular">
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

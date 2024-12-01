import { AnimatePresence, motion } from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { ToastContainer } from "react-toastify";
import AuthProvider from "../providers/AuthProvider";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();

  return (
    <div className="roboto-regular ">
      <AuthProvider>
        <Navbar />
        <ToastContainer />
        <ReactLenis
          root
          options={{
            lerp: 0.3, // Adjust the scrolling smoothness
            smooth: true, // Enable smooth scrolling
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname} // Animate changes based on route
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </ReactLenis>
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default Main;

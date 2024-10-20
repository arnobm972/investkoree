import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div>
      <footer className=" bg-slate-800 text-lg  text-salmon py-10 px-6 md:px-24">
        <div className="flex flex-col lg:flex-row lg:justify-around space-y-6 lg:space-y-0">
          {" "}
          {/* Updated flex for larger screens */}
          <nav className="mb-6 lg:mb-0">
            <h6 className="footer-title opacity-100">Contact Us</h6>
            <ul className="list-none">
              <li className="hover:text-white transition-colors duration-200">
                <a className="link link-hover opacity-90" href="#">
                  Motijheel
                </a>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                <a className="link link-hover opacity-90" href="#">
                  01326709096
                </a>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                <a className="link link-hover opacity-90" href="#">
                  investkoree@gmail.com
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mb-6 lg:mb-0">
            <h6 className="footer-title opacity-100">About Us</h6>
            <ul className="list-none">
              <li className="hover:text-white transition-colors duration-200">
                <a className="link link-hover opacity-90" href="#">
                  Overview
                </a>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                <a className="link link-hover opacity-90" href="#">
                  Who we are
                </a>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                <a className="link link-hover opacity-90" href="#">
                  What we do
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 className="footer-title opacity-100">Social</h6>
            <div className="flex flex-row gap-2">
              <a href="https://www.facebook.com">
                <SocialIcon url="https://www.facebook.com" />
              </a>
              <a href="https://www.linkedin.com">
                <SocialIcon url="https://www.linkedin.com" />
              </a>
              <a href="https://www.instagram.com">
                <SocialIcon url="https://www.instagram.com" />
              </a>
              <a href="https://www.youtube.com">
                <SocialIcon url="https://www.youtube.com" />
              </a>
            </div>
          </nav>
        </div>
      </footer>
      <section className="bg-salmon text-slate-800 h-12 items-center text-center font-bold py-4">
        Copyright &copy; InvestKoree.com. All Rights Reserved.
      </section>
    </div>
  );
}

export default Footer;

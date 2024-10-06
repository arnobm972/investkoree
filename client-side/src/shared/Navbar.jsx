import { NavLink } from "react-router-dom";
import logo from "../assets/ll.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar px-12 bg-base-100 shadow-lg">
        <div className="flex-1">
          <img className="h-20 w-44" src={logo} alt="logo" />
        </div>
        <div className="flex-none">
          <ul className="font-bold text-lg menu menu-horizontal gap-8 px-1">
            <li>
              <NavLink
                to="/"
                className="hover:bg-salmon transition  hover:text-white p-2 rounded"
                activeclassname="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/founderlogin"
                className="hover:bg-salmon transition  hover:text-white p-2 rounded"
                activeclassname="active"
              >
                Get Funded
              </NavLink>
            </li>

            <li>
              <details>
                <summary className="hover:bg-salmon hover:text-white transition p-2 rounded">
                  Category
                </summary>
                <ul className="bg-base-100  rounded-t-none p-2">
                  <li>
                    <NavLink
                      to="/profitsharing"
                      className="hover:bg-salmon transition  mb-2  hover:text-white p-2 rounded"
                      activeclassname="active"
                    >
                      Profit Sharing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/stocks"
                      className="hover:bg-salmon  transition  mb-2 hover:text-white p-2 rounded"
                      activeclassname="active"
                    >
                      Stocks
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/debt"
                      className="hover:bg-salmon  transition hover:text-white p-2 rounded"
                      activeclassname="active"
                    >
                      Debt
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="hover:bg-salmon hover:text-white p-2 transition rounded">
                  Login
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <NavLink
                      to="/investorlogin"
                      className="hover:bg-salmon transition  hover:text-white p-2 mb-2 rounded"
                      activeclassname="active"
                    >
                      Investor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/founderlogin"
                      className="hover:bg-salmon transition  hover:text-white p-2 rounded"
                      activeclassname="active"
                    >
                      Founder
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .transition {
            transition: transform 0.3s ease-in-out;
          }
          .transition:hover {
            transform: translateX(8px);
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;

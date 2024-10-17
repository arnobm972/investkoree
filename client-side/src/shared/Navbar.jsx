import logo from "../assets/ll.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authslice"; // Import your logout action from Redux
import { useLogoutMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";
const Navbar = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth); // Use userInfo from Redux

  const [logoutApiCall] = useLogoutMutation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout()); // Dispatch logout action from Redux
      toast.success("Logged out successfully");
      navigate("/");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar px-12 bg-base-100 shadow-lg">
        <div className="flex-1">
          <img className="h-20 w-44" src={logo} alt="logo" />
        </div>
        <div className="flex-none">
          <ul className="font-bold text-lg menu menu-horizontal gap-8 px-1 flex justify-center">
            <li>
              <NavLink
                to="/"
                className="hover:bg-salmon transition mt-2 hover:text-white p-2 rounded"
                activeclassname="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/founderlogin"
                className="hover:bg-salmon transition mt-2 hover:text-white p-2 rounded"
                activeclassname="active"
              >
                Get Funded
              </NavLink>
            </li>
            <li>
              <details>
                <summary className="hover:bg-salmon mt-2 hover:text-white transition p-2 rounded">
                  Category
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <NavLink
                      to="/shariah"
                      className="hover:bg-salmon transition mb-2 hover:text-white p-2 rounded"
                      activeclassname="active"
                    >
                      Shariah
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/stocks"
                      className="hover:bg-salmon transition mb-2 hover:text-white p-2 rounded"
                      activeclassname="active"
                    >
                      Stocks
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/fixedreturn"
                      className="hover:bg-salmon transition hover:text-white p-2 rounded"
                      activeclassname="active"
                    >
                      Fixed Return
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              {userInfo ? (
                <div className="flex justify-center logout-container">
                  <span className="mr-2 hover:bg-salmon transition hover:text-white p-2 rounded">
                    {userInfo.name} {/* Display user’s name from Redux */}
                  </span>
                  <div
                    onClick={handleSignOut}
                    className="hover:bg-salmon transition hover:text-white p-2 rounded cursor-pointer"
                  >
                    Log Out
                  </div>
                </div>
              ) : (
                <details>
                  <summary className="hover:bg-salmon mt-2 hover:text-white p-2 transition rounded">
                    Login
                  </summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <NavLink
                        to="/investorlogin"
                        className="hover:bg-salmon transition hover:text-white p-2 mb-2 rounded"
                        activeclassname="active"
                      >
                        Investor
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/founderlogin"
                        className="hover:bg-salmon transition hover:text-white p-2 rounded"
                        activeclassname="active"
                      >
                        Founder
                      </NavLink>
                    </li>
                  </ul>
                </details>
              )}
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

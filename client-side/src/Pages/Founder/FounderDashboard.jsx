import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
const data = [
  {
    Serial: 1,
    ProjectTitle: "Bring Documents",
    ProjectOwner: "Titus Kitamura",
    Organization: "Clezerus Clacofonix",
    Number: 357,
    Value: "$105,148",
    Left: "$96.08M",
    Date: "12/1/2019",
    Status: "Ongoing",
  },
  {
    Serial: 2,
    ProjectTitle: "Check availability locally",
    ProjectOwner: "Thad Eddings",
    Organization: "Zarrrazzii",
    Number: 177,
    Value: "$106,460",
    Left: "$80.43M",
    Date: "11/20/2019",
    Status: "Completed",
  },
  {
    Serial: 3,
    ProjectTitle: "Take Mom to Doctor",
    ProjectOwner: "Edgar Torrey",
    Organization: "Acardan & Boorg Corp.",
    Number: 994,
    Value: "$167,208",
    Left: "$12.81M",
    Date: "11/16/2019",
    Status: "Ongoing",
  },
  // ... Add the rest of your data here
];

const FounderDashboard = () => {
  const { userdata } = useAuth();
  if (!userdata) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10">
          <div className="fixed top-[100px] left-[5px] ">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-salmon text-white sticky lg:hidden drawer-button transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105"
            >
              <i className="fas fa-bars text-lg"></i>
            </label>
          </div>
          <div className="flex lg:flex-row lg:justify-between sm:flex-col xs:flex-col xxs:flex-col">
            <div className="flex lg:flex-row sm:flex-col xs:flex-col xxs:flex-col gap-16 my-10">
              <div className="flex lg:flex-col lg:justify-center lg:items-center sm:flex-col xs:flex-col xxs:flex-col">
                <p className="lg:text-3xl font-bold sm:mx-auto  sm:text-lg xs:text-lg xxs:text-lg ">
                  Total Invested Amount
                </p>
                <div
                  className="radial-progress text-primary mt-4"
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
              <div className="flex lg:flex-col lg:justify-center lg:items-center sm:flex-col xs:flex-col xxs:flex-col">
                <p className="lg:text-3xl font-bold sm:mx-auto  sm:text-lg xs:text-lg xxs:text-lg ">
                  Left for Investment
                </p>
                <div
                  className="radial-progress text-secondary mt-4"
                  style={{ "--value": 30 }}
                  role="progressbar"
                >
                  30%
                </div>
              </div>
              <div className="flex lg:flex-col lg:justify-center lg:items-center sm:flex-col xs:flex-col xxs:flex-col">
                <p className="lg:text-3xl font-bold sm:mx-auto  sm:text-lg xs:text-lg xxs:text-lg ">
                  Asking Investment Amount
                </p>
                <div
                  className="radial-progress text-accent mt-4"
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
            </div>
            <div>
              <Link to="/founderpost">
                <input
                  type="submit"
                  className="  post-btn lg:h-[25%] lg:w-[100px] sm:h-[60%] xs:h-[60%] xxs:h-[60%] sm:w-[30%] xs:w-[30%] xxs:w-[30%]"
                  name="founder-post"
                  value="Post"
                />
              </Link>
            </div>
          </div>
          <p className="lg:text-3xl font-bold sm:mx-auto xs:mx-auto xxs:mx-auto sm:text-lg xs:text-lg xxs:text-lg mb-12 mt-16">
            Invested Project List
          </p>
          <div className="overflow-x-auto ">
            <table className="min-w-full divide-y  divide-gray-200">
              <thead>
                <tr className="bg-salmon rounded-xl">
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Serial
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Project Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Investment Start Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Investment Deadline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Invested Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Asking Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Left For Investment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Investment Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row) => (
                  <tr key={row.Serial}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.Serial}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.ProjectTitle}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.ProjectOwner}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.Organization}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                      {row.Value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                      {row.Value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                      {row.Value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                      {row.Value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full lg:w-80 p-4">
            {/* Sidebar content here */}
            <li className="font-extrabold text-salmon  hover:text-white text-lg mb-2 rounded-lg ">
              <li>Founder</li>
            </li>
            {userdata && (
              <li className="font-extrabold text-salmon ml-4 text-lg mb-2 rounded-lg">
                {userdata.name || "Investor"}!
              </li>
            )}
            <li className="font-bold hover:bg-salmon hover:text-white text-lg mb-2 rounded-lg">
              <a>Dashboard</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a></a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a></a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a></a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FounderDashboard;

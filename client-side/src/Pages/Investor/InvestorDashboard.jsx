import { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const randomData = () => Math.floor(Math.random() * 100);
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
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const chartData1 = {
  labels: months,
  datasets: [
    {
      label: "Total Income",
      data: months.map(randomData),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      barThickness: 15,
      maxBarThickness: 20,
    },
  ],
};

const chartData2 = {
  labels: months,
  datasets: [
    {
      label: "Total Investment",
      data: months.map(randomData),
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      barThickness: 15,
      maxBarThickness: 20,
    },
  ],
};

const InvestorDashboard = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [data1] = useState(chartData1);
  const [data2] = useState(chartData2);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("jwt"); // Retrieve JWT token from localStorage
        if (!token) {
          throw new Error("No authentication token found");
        }
        const response = await fetch(`${API_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <p>Loading...</p>;
  const chart1Ref = useRef(null); // For Chart 1
  const chart2Ref = useRef(null); // For Chart 2

  useEffect(() => {
    return () => {
      // Check if the chart reference exists before trying to destroy it
      if (chart1Ref.current && chart1Ref.current.chartInstance) {
        chart1Ref.current.chartInstance.destroy();
      }
      if (chart2Ref.current && chart2Ref.current.chartInstance) {
        chart2Ref.current.chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10">
          <div className="fixed top-[100px] left-[5px] z-50">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-salmon text-white sticky drawer-button transform transition-transform duration-300 ease-in-out delay-150 hover:scale-105"
            >
              <i className="fas fa-bars text-lg"></i>
            </label>
          </div>
          <div className="flex lg:flex-row sm:flex-col xs:flex-col xxs:flex-col ">
            <div className="lg:w-[50%] sm:w-[full] xs:w-[full] xxs:w-[full]  sm:h-full xs:h-full xxs:h-full ">
              <Bar
                ref={chart1Ref}
                data={data1}
                options={{
                  plugins: {
                    title: {
                      display: true,
                    },
                  },
                  scales: {
                    x: { beginAtZero: true },
                    y: { beginAtZero: true },
                  },
                }}
              />
            </div>
            <div className="lg:w-[50%] sm:w-[full] xs:w-[full] xxs:w-[full]  sm:h-full xs:h-full xxs:h-full ">
              <Bar
                ref={chart2Ref}
                data={data2}
                options={{
                  plugins: {
                    title: {
                      display: true,
                    },
                  },
                  scales: {
                    x: { beginAtZero: true },
                    y: { beginAtZero: true },
                  },
                }}
              />
            </div>
          </div>
          <p className="lg:text-3xl font-bold mb-12 mt-16 sm:mx-auto xs:mx-auto xxs:mx-auto sm:text-xl xs:text-xl xxs:text-xl  ">
            Invested Project List
          </p>
          <div className="overflow-x-auto ">
            <table className="min-w-full divide-y   sm:w-[40%] xs:w-[40%] xxs:w-[30%]  divide-gray-200">
              <thead>
                <tr className="bg-salmon rounded-xl">
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Serial
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Project Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Investment Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Retrun Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Invested Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full lg:w-80 p-4">
            <li className="font-extrabold text-salmon text-lg mb-2 rounded-lg">
              <a>Investor</a>
            </li>
            {userData && (
              <li className="font-bold text-lg mb-4 text-green-500">
                Welcome, {userData.name || "Investor"}!
              </li>
            )}
            <li className="font-bold hover:bg-salmon hover:text-white text-lg mb-2 rounded-lg">
              <a>Dashboard</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a>Payments</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a>Cards</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a>WatchList</a>
            </li>
            <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
              <a>Rewards</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;

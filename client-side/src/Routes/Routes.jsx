import { createBrowserRouter } from "react-router-dom";
import Main from "./../Layout/Main";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Investor/InvestorLogin";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import AdminLogin from "../Pages/AdminPanel/AdminLogin";
import FounderLogin from "../Pages/Founder/FounderLogin";
import InvestorLogin from "../Pages/Investor/InvestorLogin";
import AdminDashborad from "../Pages/AdminPanel/AdminDashborad";
import ErrorPage from "../Pages/ErrorPage";
import PendingProjects from "../Pages/AdminPanel/PendingProjects";
import InvestorDashboard from "../Pages/Investor/InvestorDashboard";
import ProfitSharing from "../Pages/ProfitSharing";
import Debt from "../Pages/Debt";
import Stocks from "../Pages/Stocks";
import GetFunded from "../Pages/GetFunded";
import FounderDashboard from "../Pages/Founder/FounderDashboard";
import FounderPost from "../Pages/Founder/FounderPost";
import PrivateInvestorRoute from "./PrivateInvestorRoute";
import PrivateFounderRoute from "./PrivateFounderRoute";
import PrivateAdminRoute from "./PrivateAdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/adminlogin",
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: "/founderlogin",
        element: <FounderLogin></FounderLogin>,
      },
      {
        path: "/investorlogin",
        element: <InvestorLogin></InvestorLogin>,
      },
      {
        path: "/admindashboard",
        element: (
          <PrivateAdminRoute>
            <AdminDashborad></AdminDashborad>
          </PrivateAdminRoute>
        ),
      },
      {
        path: "/pendingprojects",
        element: (
          <PrivateAdminRoute>
            <PendingProjects></PendingProjects>
          </PrivateAdminRoute>
        ),
      },
      {
        path: "/investordashboard",
        element: (
          <PrivateInvestorRoute>
            <InvestorDashboard></InvestorDashboard>
          </PrivateInvestorRoute>
        ),
      },
      {
        path: "/profitsharing",
        element: <ProfitSharing></ProfitSharing>,
      },
      {
        path: "/debt",
        element: <Debt></Debt>,
      },
      {
        path: "/stocks",
        element: <Stocks></Stocks>,
      },
      {
        path: "/getfunded",
        element: <GetFunded></GetFunded>,
      },
      {
        path: "/founderdashboard",
        element: (
          <PrivateFounderRoute>
            <FounderDashboard></FounderDashboard>
          </PrivateFounderRoute>
        ),
      },
      {
        path: "/founderpost",
        element: (
          <PrivateFounderRoute>
            <FounderPost></FounderPost>
          </PrivateFounderRoute>
        ),
      },
    ],
  },
]);

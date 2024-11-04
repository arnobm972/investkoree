import { createBrowserRouter } from "react-router-dom";
import Main from "./../Layout/Main";
import Home from "../Pages/Home";
import AdminLogin from "../Pages/AdminPanel/AdminLogin";
import FounderLogin from "../Pages/Founder/FounderLogin";
import InvestorLogin from "../Pages/Investor/InvestorLogin";
import AdminDashborad from "../Pages/AdminPanel/AdminDashborad";
import ErrorPage from "../Pages/ErrorPage";
import PendingProjects from "../Pages/AdminPanel/PendingProjects";
import InvestorDashboard from "../Pages/Investor/InvestorDashboard";
import Shariah from "../Pages/Shariah";
import FixedReturn from "../Pages/FixedReturn";
import Stocks from "../Pages/Stocks";
import GetFunded from "../Pages/GetFunded";
import FounderDashboard from "../Pages/Founder/FounderDashboard";
import FounderPost from "../Pages/Founder/FounderPost";
// import PrivateInvestorRoute from "./PrivateInvestorRoute";
// import PrivateFounderRoute from "./PrivateFounderRoute";
// import PrivateAdminRoute from "./PrivateAdminRoute";
import ProjectDetail from "../Pages/ProjectDetail";

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
        element: <AdminDashborad></AdminDashborad>,
      },
      {
        path: "/projectdetail/:id",
        element: <ProjectDetail></ProjectDetail>,
      },
      {
        path: "/pendingprojects",
        element: (
          // <PrivateAdminRoute>
          //   <PendingProjects></PendingProjects>
          // </PrivateAdminRoute>
          <PendingProjects></PendingProjects>
        ),
      },
      {
        path: "/investordashboard",
        element: (
          // <PrivateInvestorRoute>
          //   <InvestorDashboard></InvestorDashboard>
          // </PrivateInvestorRoute>
          <InvestorDashboard></InvestorDashboard>
        ),
      },
      {
        path: "/shariah",
        element: <Shariah></Shariah>,
      },
      {
        path: "/fixedreturn",
        element: <FixedReturn></FixedReturn>,
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
          // <PrivateFounderRoute>
          //   <FounderDashboard></FounderDashboard>
          // </PrivateFounderRoute>
          <FounderDashboard></FounderDashboard>
        ),
      },
      {
        path: "/founderpost",
        element: (
          // <PrivateFounderRoute>
          //   <FounderPost></FounderPost>
          // </PrivateFounderRoute>
          <FounderPost></FounderPost>
        ),
      },
    ],
  },
]);

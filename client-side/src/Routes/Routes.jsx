import {

    createBrowserRouter,

  } from "react-router-dom";
  import Main from './../Layout/Main';
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Services from "../Pages/Services";
import ServicesAdd from "../Pages/ServicesAdd";
import Category from "../Pages/Category";
import CategoryAdd from "../Pages/CategoryAdd";
import Orders from "../Pages/Orders";
import OrderDetail from "../Pages/OrderDetail";
import ShopKippers from "../Pages/ShopKippers";
import Users from "../Pages/Users";
import Riders from "../Pages/Riders";
import SubAdmin from "../Pages/SubAdmin";
import SubAdminPermission from "../Pages/SubAdminPermission";
import SubAdminAdd from "../Pages/SubAdminAdd";
   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
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
            path :"/services",
            element: <Services></Services>,
            },
            {
            path: "/servicesadd",
            element: <ServicesAdd></ServicesAdd>,
          }, 
          {
            path :"/category",
            element: <Category></Category>,
            },
            {
            path: "/categoryadd",
            element: <CategoryAdd></CategoryAdd>,
          }, 
          {
            path: "/orders",
            element: <Orders></Orders>,
          },
          {
            path: "/orderdetail",
            element: <OrderDetail></OrderDetail>,
          },
          {
            path: "/shopkippers",
            element: <ShopKippers></ShopKippers>,
          },
        {
          path: "/users",
          element: <Users></Users>,
          },
          {
        path: "/riders",
        element: <Riders></Riders>,
         },
         {
          path: "/subadmin",
          element: <SubAdmin></SubAdmin>,
           },
           {
            path: "/subadminadd",
            element: <SubAdminAdd></SubAdminAdd>,
             },
           {
            path: "/subadminpermission",
            element: <SubAdminPermission></SubAdminPermission>,
             },             
      ]
    },
  ]);
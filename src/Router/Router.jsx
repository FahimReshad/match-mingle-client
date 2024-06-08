import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Biodatas from "../Pages/Biodatas/Biodatas";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import DashBoards from "../Layout/DashBoards";
import EditCreateBioData from "../Pages/DashBoard/EditBiodata/EditCreateBioData";
import ViewBiodata from "../Pages/DashBoard/ViewBiodata/ViewBiodata";
import ManageUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
// import EditCreateBioData from "../Pages/DashBoard/EditCreateBioData";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/biodatas",
        element: <Biodatas></Biodatas>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoards></DashBoards>,
    children: [
      {
        path: "editBiodata",
        element: <EditCreateBioData></EditCreateBioData>
      },
      {
        path: "viewBiodata",
        element: <ViewBiodata></ViewBiodata>
      },
      {
        path: "manage",
        element: <ManageUsers></ManageUsers>
      }
    ],
  },
]);

export default router;

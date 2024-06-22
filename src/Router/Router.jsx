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
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import ApprovedPremium from "../Pages/DashBoard/ApprovedPremium/ApprovedPremium";
import MyFavouritesBiodata from "../Pages/DashBoard/MyFavouritesBiodata/MyFavouritesBiodata";
import Checkout from "../Pages/Checkout/Checkout";
import MyContactRequest from "../Pages/DashBoard/MyContactRequest/MyContactRequest";
import ApprovedContactRequest from "../Pages/DashBoard/ApprovedConactRequest/ApprovedContactRequest";
import GotMarried from "../Pages/DashBoard/GotMarried/GotMarried";
import AdminDashBoard from "../Pages/DashBoard/AdminDashBoard/AdminDashBoard";
import PrivateRoute from "./PrivateRoute";

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
        path: "/biodata/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://match-mingle-server-pi.vercel.app/biodata/details/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
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
      {
        path: "/checkout/:biodataId",
        loader: ({ params }) =>
          fetch(
            `https://match-mingle-server-pi.vercel.app/biodata/checkout/${params.biodataId}`
          ),
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoards></DashBoards>
      </PrivateRoute>
    ),
    children: [
      {
        path: "editBiodata",
        element: <EditCreateBioData></EditCreateBioData>,
      },
      {
        path: "adminDashboard",
        element: <AdminDashBoard></AdminDashBoard>,
      },
      {
        path: "viewBiodata",
        element: <ViewBiodata></ViewBiodata>,
      },
      {
        path: "manage",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "approvedPremium",
        element: <ApprovedPremium></ApprovedPremium>,
      },
      {
        path: "favoriteBiodata",
        element: <MyFavouritesBiodata></MyFavouritesBiodata>,
      },
      {
        path: "myContactBiodata",
        element: <MyContactRequest></MyContactRequest>,
      },
      {
        path: "approvedContactRequest",
        element: <ApprovedContactRequest></ApprovedContactRequest>,
      },
      {
        path: "gotMarried",
        element: <GotMarried></GotMarried>,
      },
    ],
  },
]);

export default router;

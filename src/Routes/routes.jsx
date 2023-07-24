import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Sharied/Error";
import AllCollege from "../pages/AllCollege/AllCollege";
import CollegeDetails from "../pages/AllCollege/CollegeDetails/CollegeDetails";
import Admission from "../pages/Admission/Admission";
import AdmissionForm from "../pages/Admission/AdmissionForm";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import MyColleges from "../pages/MyColleges/MyColleges";
import Profile from "../pages/Profile/Profile";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/college",
        element: <AllCollege />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/mycollege",
        element: (
          <PrivetRoutes>
            <MyColleges />,
          </PrivetRoutes>
        ),
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign",
        element: <SignUp />,
      },
      {
        path: "/admission/:collegeName",
        element: <AdmissionForm></AdmissionForm>,
      },
      {
        path: "/details/:id",
        element: <CollegeDetails></CollegeDetails>,
        loader: () => fetch("/data.json/"),
      },
    ],
  },
]);

export default router;

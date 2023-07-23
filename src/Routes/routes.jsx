import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Sharied/Error";
import AllCollege from "../pages/AllCollege/AllCollege";
import CollegeDetails from "../pages/AllCollege/CollegeDetails/CollegeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <Error />,
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
        path: "/details/:id",
        element: <CollegeDetails></CollegeDetails>,
        loader: () => fetch("/data.json/"),
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Sharied/Error";
import AllCollege from "../pages/AllCollege/AllCollege";

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
    ],
  },
]);

export default router;

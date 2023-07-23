import { Outlet } from "react-router-dom";
import NavBar from "../pages/Sharied/NavBar";
import Footer from "../pages/Sharied/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

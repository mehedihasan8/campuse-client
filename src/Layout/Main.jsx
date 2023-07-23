import { Outlet } from "react-router-dom";
import NavBar from "../pages/Sharied/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;

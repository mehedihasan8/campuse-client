import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Sharied/Loading";
import Swal from "sweetalert2";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user?.email) {
    return children;
  } else {
    useEffect(() => {
      Swal.fire({
        title: "Warning!",
        text: "You have to log in first to view details",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }, []);
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoutes;

import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { user, logOut } = useContext(AuthContext);

  const isActiveRoute = (routePath) => {
    return location.pathname === routePath;
  };

  return (
    <nav className="bg-[#6fb9b9] py-4 md:flex justify-between items-center px-4 lg:px-8">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-semibold">
          <div className="flex items-center gap-1">
            <img className="w-10 md:w-12" src="/logoStudy2.png" alt="logo" />
            <h3>CampusEase</h3>
          </div>
        </Link>
        <div className="ml-3 lg:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-white p-2 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:w-auto mt-4 lg:mt-0`}
          id="mobile-menu"
        >
          <ul className="flex flex-col gap-2 md:gap-0  lg:text-left lg:flex-row lg:space-x-8 lg:items-center">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className={`text-white hover:text-gray-300 ${
                  isActiveRoute("/") ? "font-bold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/college"
                onClick={closeMenu}
                className={`text-white hover:text-gray-300 ${
                  isActiveRoute("/collages") ? "font-bold" : ""
                }`}
              >
                Collages
              </Link>
            </li>
            <li>
              <Link
                to="/admission"
                onClick={closeMenu}
                className={`text-white hover:text-gray-300 ${
                  isActiveRoute("/admission") ? "font-bold" : ""
                }`}
              >
                Admission
              </Link>
            </li>
            <li>
              <Link
                to="/mycollege"
                onClick={closeMenu}
                className={`text-white hover:text-gray-300 ${
                  isActiveRoute("/myCollages") ? "font-bold" : ""
                }`}
              >
                My Collages
              </Link>
            </li>
            {user?.email ? (
              <>
                <Link to="/profile">
                  <li className="flex items-center">
                    {user?.photoURL && (
                      <img
                        className="h-8 w-8 rounded-full mr-2"
                        title={user?.displayName}
                        src={user?.photoURL}
                        alt=""
                      />
                    )}
                    <span className="text-white hover:text-gray-300">
                      {user?.displayName}
                    </span>
                  </li>
                </Link>
                <li>
                  <button
                    onClick={logOut}
                    className="text-white font-semibold hover:text-gray-300"
                  >
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="text-white font-semibold hover:text-gray-300"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sign"
                    onClick={closeMenu}
                    className="text-white font-semibold hover:text-gray-300"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

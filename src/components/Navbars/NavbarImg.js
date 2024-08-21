import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/style.css"; // Ensure the path is correct

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="title-animate  "
              to="/HomePage"
            >
              Event Connect
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg bg-white" : " hidden")
            }
            id="example-navbar-warning"
          >
            <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-center lg:ml-auto">
              <input
                type="text"
                className="relative block w-full px-4 py-2 pr-10 h-10 border border-solid border-blueGray-300 rounded-full text-sm leading-snug text-blueGray-600 bg-blueGray-100 shadow-none outline-none focus:outline-none placeholder-blueGray-400"
                placeholder="Search blueGray"
              />
              <span className="absolute inset-y-0 right-4 flex items-center pl-2 text-blueGray-600">
                <i className="fas fa-search"></i>
              </span>
            </div>

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  to="/CreateEvent"
                >
                  <button
                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    type="button"
                  >
                    Create Event
                  </button>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  to="/Favorites"
                >
                  <button
                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    type="button"
                  >
                    Favorites
                  </button>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  to="/authen"
                >
                  <div className="wrapper">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <button >Sign In</button>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

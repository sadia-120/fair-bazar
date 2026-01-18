import { Link, Outlet } from "react-router";
import logo from "../../assets/logo2.png";
// import { use } from "react";
// import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router";
import {
  FaQuestionCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const DashbordLayout = () => {
//   const { user } = use(AuthContext);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        {/* Navbar */}
        <nav className="navbar w-full bg-gray-200 sticky top-0 z-40 flex justify-between">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="cursor-pointer flex justify-center items-center gap-2"
          >
            {/* Sidebar toggle icon */}
            <img className="w-12 h-12 p-1" src={logo} alt="Assets Pro Logo" />
            <h2 className="text-2xl font-semibold text-primary">FairBazar</h2>
          </label>
        </nav>
        {/* Page content here */}

        <div className="p-4">
          {" "}
          <Outlet />
        </div>
      </div>

      <div className="drawer-side z-50 is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <Link
                to={"/"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Home Page</span>
              </Link>
            </li>

            <li>
              <NavLink
                to={"/dashboard/questios"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                <FaQuestionCircle
                  size={18}
                  className="my-1.5 inline-block"
                />
                <span className="is-drawer-close:hidden">Questions</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/dashboard/orders"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Orders"
              >
                <FaShoppingCart
                  size={18}
                  className="my-1.5 inline-block"
                />
                <span className="is-drawer-close:hidden">Orders</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/dashboard/addKids"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Add Kids"
              >
                <IoIosAddCircle size={18} className="my-1.5 inline-block" />
                <span className="is-drawer-close:hidden">Add Kids</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashbordLayout;

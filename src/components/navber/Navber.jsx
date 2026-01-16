import { Link, NavLink } from "react-router";
import logo from "../../assets/logo2.png";
import { FaCartShopping, FaXmark } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
// import useAxiosSquer from "../../hooks/useAxiosSquer";
// import { useQuery } from "@tanstack/react-query";

const Navebr = () => {
  const [open, setOpen] = useState(false);
  const { user, signOutUser } = use(AuthContext);
  // const axiosSquer = useAxiosSquer();

  // const { data: kids = [] } = useQuery({
  //   queryKey: ["kids"],
  //   queryFn: async () => {
  //     const res = await axiosSquer.get("/kids");
  //     return res.data;
  //   },
  // });
  // console.log(kids);
  console.log(user);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/kids"}>Kids</NavLink>
      </li>
      <li>
        <NavLink to={"/women"}>Women</NavLink>
      </li>
      <li>
        <NavLink to={"/men"}>Men</NavLink>
      </li>
      {/* <li>
        <NavLink to={"/kids"}>Kids</NavLink>
      </li> */}
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className=" fixed top-0 w-full z-50 bg-gray-800">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <Link to={"/"} className="flex items-center gap-2">
              <img className="w-12 h-12 rounded-full" src={logo} alt="logo" />
              <h2 className="text-orange-300 font-semibold text-2xl">
                FairBazar
              </h2>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
          </div>
          <div className="navbar-end ">
            <div className="relative">
              <Link to={"/allCarts"}>
                <FaCartShopping className="text-primary" size={24} />
              </Link>
              <h2 className="text-white font-bold absolute -top-2 right-0">
                0
              </h2>
            </div>

            <div className="block lg:hidden text-white ml-4 pt-2">
              <button
                onClick={() => {
                  setOpen(!open);
                }}
                className=" cursor-pointer"
              >
                {open ? <FaXmark size={24} /> : <IoMenuSharp size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* menu list */}
      <div
        className={`absolute bg-black/60 text-primary -top-100 right-8 p-8 z-50 ${
          open && " fixed top-16"
        }`}
      >
        <ul className="flex flex-col space-y-3">{links}</ul>
        <div className="divider" />
        {user && (
          <button
            onClick={() => {
              signOutUser();
            }}
            className="btn btn-warning"
          >
            LogOut
          </button>
        )}
      </div>
    </>
  );
};

export default Navebr;

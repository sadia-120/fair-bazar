import { createBrowserRouter } from "react-router";
import RootLayput from "../layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/About/About";
import AllProduct from "../pages/AllProduct/AllProduct";
import Kids from "../pages/Kids/Kids";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayput,
    children: [
      {index: true, Component: Home },
      {path: '/contact', Component: Contact},
      {path: '/about', Component: AboutUs},
      {path: '/allProduct', Component: AllProduct},
      {path: '/kids', Component: Kids},
    ]
  },
]);

export default router;


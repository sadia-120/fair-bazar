import { createBrowserRouter } from "react-router";
import RootLayput from "../layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/About/About";
import AllProduct from "../pages/AllProduct/AllProduct";
import Women from "../pages/Women/Women";
import Men from "../pages/Men/Men";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayput,
    children: [
      {index: true, Component: Home },
      {path: '/contact', Component: Contact},
      {path: '/about', Component: AboutUs},
      {path: '/kids', Component: AllProduct},
      {path: '/women', Component: Women},
      {path: '/men', Component: Men},
    ]
  },
]);

export default router;


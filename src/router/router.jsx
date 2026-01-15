import { createBrowserRouter } from "react-router";
import RootLayput from "../layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayput,
    children: [
      {index: true, Component: Home },
      {path: '/contact', Component: Contact},
    ]
  },
]);

export default router;


import { createBrowserRouter } from "react-router";
import RootLayput from "../layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/About/About";
import AllProduct from "../pages/AllProduct/AllProduct";
import Women from "../pages/Women/Women";
import Men from "../pages/Men/Men";
import Error404 from "../pages/Error404/Error404";
import KidsDitails from "../pages/KidsDitails/KidsDitails";
import AllCart from "../pages/AllCarts/AllCarts";
import LoginPage from "../pages/Login/Login";
import RegisterPage from "../pages/Register/Register";
import ProfilePage from "../pages/Profile/Profile";
import PrivitePage from "../context/PirvitePage";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import DiscountKids from "../pages/Discount/Discount";
import DashbordLayout from "../layouts/DasbordLayout/DasbordLayout";
import HR_PrivitePage from "../context/HR_PrivetPage";
import QuestionsPage from "../pages/Dashbord/Question/Question";
import OrdersPage from "../pages/Dashbord/Orders/Orders";
import AddKids from "../pages/Dashbord/AddKids/AddKids";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404 />,
    Component: RootLayput,
    children: [
      { index: true, Component: Home },
      { path: "/contact", Component: Contact },
      { path: "/about", Component: AboutUs },
      { path: "/kids", Component: AllProduct },
      { path: "/women", Component: Women },
      { path: "/men", Component: Men },
      { path: "/kidsDitails/:id", Component: KidsDitails },
      {
        path: "/allCarts",
        element: (
          <PrivitePage>
            <AllCart />
          </PrivitePage>
        ),
      },
      { path: "/login", Component: LoginPage },
      { path: "/register", Component: RegisterPage },
      { path: "/discount", Component: DiscountKids },
      {
        path: "/success",
        element: (
          <PrivitePage>
            <PaymentSuccess />
          </PrivitePage>
        ),
      },
      // {path: '/success', Component: PaymentSuccess},
      {
        path: "/profile",
        element: (
          <PrivitePage>
            <ProfilePage />
          </PrivitePage>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivitePage>
        <HR_PrivitePage>
          <DashbordLayout />
        </HR_PrivitePage>
      </PrivitePage>
    ),
    children: [
      {
        path: 'questios',
        element: <QuestionsPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path:'addKids',
        element: <AddKids />
      }
    ],
  },
]);

export default router;

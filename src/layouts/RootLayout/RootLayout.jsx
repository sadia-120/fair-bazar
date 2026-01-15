import { Outlet } from "react-router";
import Navebr from "../../components/navber/Navber";
import Footer from "../../components/Footer/Footer";

const RootLayput = () => {
  return (
    <div>
      <nav>
        <Navebr />
      </nav>
      <main className="min-h-[calc(100vh-285px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayput;

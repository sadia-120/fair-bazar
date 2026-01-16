import { Outlet } from "react-router";
import Navebr from "../../components/navber/Navber";
import Footer from "../../components/Footer/Footer";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../components/Loading/Loading";

const RootLayput = () => {
  const {loading} = use(AuthContext);
  return (
    loading ? <Loading /> :
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

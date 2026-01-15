import { Link } from "react-router";
import logo from "../../assets/logo2.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div  className="bg-neutral">
      <footer className="footer container mx-auto sm:footer-horizontal text-neutral-content p-10">
        <nav>
          <div className="flex items-center gap-2">
            <img className="w-12 h-12 rounded-full" src={logo} alt="logo" />
            <h2 className="text-orange-300 font-semibold text-2xl">
              FairBazar
            </h2>
          </div>
          <div className="mt-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
              Cumque enim eos nam perferendis quae quia eligendi <br /> omnis
              expedita minus dolorum!
            </p>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/contact"} className="link link-hover">
            Contact
          </Link>
          <Link to={"/kids"} className="link link-hover">
            Kids
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Shocal Links</h6>
          <div className="flex items-center gap-4">
            <Link to={"https://www.facebook.com"} className="link link-hover">
              <FaFacebook size={22} />
            </Link>
            <Link to={"https://www.instagram.com"} className="link link-hover">
              <FaInstagram size={22} />
            </Link>
            <Link to={"https://www.whatsapp.com"} className="link link-hover">
              <FaWhatsapp size={22} />
            </Link>
          </div>
        </nav>
      </footer>

      <div className="p-5 bg-neutral border-t border-gray-700">
        <p className="text-center text-white/70">© 2026 FairBazar. Developed by Sadia</p>
      </div>
    </div>
  );
};

export default Footer;


import { Link } from 'react-router';
import logo from '../../assets/logo2.png'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <nav>
        <div className="flex items-center gap-2">
          <img className="w-12 h-12 rounded-full" src={logo} alt="logo" />
          <h2 className="text-orange-300 font-semibold text-2xl">FairBazar</h2>
        </div>
        <div className='mt-5'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Cumque enim eos nam perferendis quae quia eligendi <br /> omnis expedita minus dolorum!</p>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <Link to={'/about'}>About Us</Link>
        <Link to={'/contact'} className="link link-hover">Contact</Link>
        <Link to={'/allProduct'} className="link link-hover">Products</Link>
        <Link to={'/kids'} className="link link-hover">Kids</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Shocal Links</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;

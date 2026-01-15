import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo2.png'

const Navebr = () => {

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allProduct'}>Products</NavLink></li>
        <li><NavLink to={'/contact'}>Women</NavLink></li>
        <li><NavLink to={'/contact'}>Men</NavLink></li>
        <li><NavLink to={'/kids'}>Kids</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>

    return <div className="navbar bg-gray-800 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
       {links}
      </ul>
    </div>
    <Link to={'/'} className='flex items-center gap-2'>
        <img className='w-12 h-12 rounded-full' src={logo} alt="logo" />
        <h2 className='text-orange-300 font-semibold text-2xl'>FairBazar</h2>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
}

export default Navebr;
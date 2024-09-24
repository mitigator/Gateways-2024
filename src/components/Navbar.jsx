import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { navborder } from "../assets/svg";

const Navbar = () => {
  return (

    <div className='hidden sm:flex relative p-3 mb-10 items-center  '>
      

      <img src={logo} height={200} width={180} alt='logo' className='mr-4' />
      <div className='relative z-10 text-White flex gap-24 p-4 w-1/3'>
        <Link to="/" className='text-white hover:text-gray-300 cursor-pointer'>Events</Link>
        <Link to="/about" className='text-white hover:text-gray-300 cursor-pointer'>About</Link>
        <Link to="/committee" className='text-white hover:text-gray-300 cursor-pointer'>Committee</Link>

      </div>
      <img src={navborder} alt='logo' className='absolute top-0 left-0 z-0 w-1/2' />

      <div className='text-White flex gap-4 ml-auto items-center'>
        <button className='border px-3 rounded-lg'>Login</button>
        <button className='border px-3 rounded-lg'>Brochure</button>
      </div>

    </div>
  );
};

export default Navbar;
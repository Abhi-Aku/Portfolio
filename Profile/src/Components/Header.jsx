import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='w-full h-[80px] bg-blue-400 flex justify-evenly items-center px-4'>
      {/* Logo */}
      <div className='text-white font-bold text-2xl'>Logo</div>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex  border-2 rounded-3xl '>
  <ul className='flex gap-10 h-10 justify-center items-center w-96 '>
    <li className='text-white '> <NavLink  to="/"  className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink></li>
    <li className='text-white '><NavLink  to="/about" className={({ isActive }) => isActive ? "font-bold underline" : ""}>About</NavLink></li>
    <li className='text-white '><NavLink  to="/contact" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Contact</NavLink></li>
  </ul>
</nav>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className='md:hidden cursor-pointer z-10 text-white'>
        {nav ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <ul className='md:hidden absolute top-0 left-0 w-full h-screen bg-blue-400 flex flex-col justify-center items-center'>
          <li onClick={handleNav} className='py-6 text-2xl text-white'>Home</li>
          <li onClick={handleNav} className='py-6 text-2xl text-white'>About</li>
          <li onClick={handleNav} className='py-6 text-2xl text-white'>Contact</li>
        </ul>
      )}
    </header>
  );
};

export default Header;

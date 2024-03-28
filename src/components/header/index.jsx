import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between px-1 py-px bg-white border-t-2 border-indigo-950 lg:h-20 lg:py-0">
      <img src={logo} className="h-10 w-24 md:h-14 md:w-32 lg:w-52 lg:h-20" alt="onyxdevs" width="120" />
      <div className="flex md:hidden">
        <button id="hamburger" onClick={toggleMenu}> 
          <div className="text-slate-300">
            {isMenuOpen ? (
              <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" alt="Menu" />
            ) : (
              <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" alt="Close Menu" />
            )}
          </div>
        </button>
      </div>
      <div className={isMenuOpen ? "toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none" : "toggle w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none"}>
        <Link to="/" className="block md:inline-block text-indigo-900 hover:text-blue-500 px-3 md:px-2 py-1 lg:px-3 md:border-none md:text-sm lg:text-lg">Home</Link>
        <a href="#about" className="block md:inline-block text-indigo-900 hover:text-blue-500 px-3 md:px-1 py-1 lg:px-3 md:border-none md:text-sm lg:text-lg">About</a>
        <a href="#skills" className="block md:inline-block text-indigo-900 hover:text-blue-500 px-3 md:px-2 py-1 lg:px-3 md:border-none md:text-sm lg:text-lg">Skills</a>
        <a href="#achievements" className="block md:inline-block text-indigo-900 hover:text-blue-500 px-3 md:px-1 py-1 lg:px-3 md:border-none md:text-sm lg:text-lg">Achievements</a>
        <a href="#experiences" className="block md:inline-block text-indigo-900 hover:text-blue-500 px-3 md:px-2 py-1 lg:px-3 md:border-none md:text-sm lg:text-lg">Experiences</a>
        <a href="#portfolio" className="block md:inline-block text-indigo-900 hover:text-blue-500 px-3 md:px-1 py-1 lg:px-3 md:border-none md:text-sm lg:text-lg">Projects</a>
        <a href="#blogs" className="block md:inline-block text-indigo-900 hover:text-blue-500 px-3 md:px-2 py-1 lg:px-3 md:border-none md:text-sm lg:text-lg">Blogs</a>
        <Link to="/contact" className="block md:inline-block text-indigo-900 hover:text-blue-500 px-3 md:px-1 py-1 lg:px-3 md:border-none md:text-sm lg:text-lg">Contact</Link>
        <Link to="/administratorlogin"><i className="fa-solid fa-user block md:inline-block text-indigo-900 hover:text-blue-500 px-3 md:px-1 py-1  md:border-none md:text-sm lg:text-lg"></i></Link>
      </div>
    </nav>
  );
}

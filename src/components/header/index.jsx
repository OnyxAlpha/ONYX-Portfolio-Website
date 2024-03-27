import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-3 bg-slate-900">
      <img src="" className="h-10 w-10" alt="onyxdevs" width="120" />
      <div className="flex md:hidden">
        <button id="hamburger" onClick={toggleMenu}> 
          <div className="text-slate-300">
            {isMenuOpen ? (
              <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" alt="Close Menu" />
            ) : (
              <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" alt="Menu" />
            )}
          </div>
        </button>
      </div>
      <div className={isMenuOpen ? "toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none" : "toggle w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none"}>
        <a href="#" className="block md:inline-block text-slate-300 hover:text-blue-500 px-3 py-3  md:border-none">Home</a>
        <a href="#" className="block md:inline-block text-slate-300 hover:text-blue-500 px-3 py-3  md:border-none">About</a>
        <a href="#" className="block md:inline-block text-slate-300 hover:text-blue-500 px-3 py-3  md:border-none">Skills</a>
        <a href="#" className="block md:inline-block text-slate-300 hover:text-blue-500 px-3 py-3  md:border-none">Achievements</a>
        <a href="#" className="block md:inline-block text-slate-300 hover:text-blue-500 px-3 py-3  md:border-none">Experiences</a>
        <a href="#" className="block md:inline-block text-slate-300 hover:text-blue-500 px-3 py-3  md:border-none">Projects</a>
        <a href="#" className="block md:inline-block text-slate-300 hover:text-blue-500 px-3 py-3 md:border-none">Blogs</a>
        <a href="#" className="block md:inline-block text-slate-300 hover:text-blue-500 px-3 py-3  md:border-none">Contact</a>
        <i className="fa-solid fa-user block md:inline-block text-slate-300 hover:text-blue-500 px-3 py-3  md:border-none"></i>
      </div>
    </nav>
  );
}

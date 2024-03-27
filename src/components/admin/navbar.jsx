import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <>
      <nav className={`${sidebarToggle ? "" : " ml-72 "}  w-full bg-violet-100 px-4 py-3 flex justify-between`}>
      <div className="flex item-center text-xl">
        <i className="fa-solid fa-bars text-black me-4 cursor-pointer" onClick={()=> setSidebarToggle(!sidebarToggle)}></i>{" "}
        <span className="text-black font-semibold">form Name</span>
      </div>
      <div className="flex item-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex item-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </span>
            <input type="text" className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"/>
        </div>

        <div className="relative">
            <button className="text-black group">
            <i class="fa-solid fa-user w-5 h6 mt-1"></i>
            <div className="z-10 hidden bg-white absolute rounded-lg shadow w-32 group-focus:block top-full right-0">
                <ul className="py-2 text-sm text-gray-950 bg-violet-50">
                    <li className="p-2">
                       <Link>Profile</Link> 
                    </li>
                    <li className="p-2">
                       <Link>settings</Link> 
                    </li>
                    <li className="p-2">
                       <Link>Log Out</Link> 
                    </li>
                </ul>
            </div>
            </button>
        </div>
      </div>
    </nav>
        </>
    
  );
};

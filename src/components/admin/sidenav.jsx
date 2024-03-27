import React, { useState } from "react";
import { Link } from "react-router-dom";

export const  Sidebar = ({sidebarToggle, setsetUserPage}) => {

  return (
    <div className={`${sidebarToggle ? " hidden " : " block " } ease-in-out w-72 bg-violet-100 fixed h-full px-4 py-2`}>
      <div className="my-2 mb-4">
        <h1 className="tetxt-2x text-black font-bold ">Admin Dashboard</h1>
      </div>
        <hr />
        <ul className="mt-3 text-black font-bold">
          
          <li className="mb-2 rounded hover:shadow hover:bg-violet-700 hover:text-white py-2" onClick={()=> setsetUserPage('dashboard')}>
            
            <Link className=" px-2"><i className="fa-solid fa-house inline-block 1-6 h-6 mr-2 -mt-2"></i>Dashboard</Link>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-violet-700 hover:text-white py-2"  onClick={()=> setsetUserPage('posts')}>
            
            <Link className="px-2"><i className="fa-solid fa-book h-6 mr-2 -mt-2"></i>Posts</Link>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-violet-700 hover:text-white py-2" onClick={()=> setsetUserPage('achievements')}>
            
            <Link className="px-2"><i className="fa-solid fa-star h-6 mr-2 -mt-2"></i>Achievements</Link>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-violet-700 hover:text-white py-2" onClick={()=> setsetUserPage('experiences')}>
            
            <Link className="px-2"><i className="fa-solid fa-briefcase h-6 mr-2 -mt-2"></i>Experiences</Link>
          </li>
        </ul>
    </div>
  );
};

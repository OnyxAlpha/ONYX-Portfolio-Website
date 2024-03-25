import { useState } from "react";
import control from "../../assets/control.png"




 export const Header = () => {
    const[open, setOpen] =useState(true);
    const Menus=[
        { title: "Home", src: "fa-solid fa-house" },
        { title: "About", src: "fa-solid fa-user" },
        { title: "Skills", src: "fa-solid fa-graduation-cap", gap: true },
        { title: "Projects ", src: "fa-solid fa-bars-progress" },
        { title: "Achievements", src: "fa-solid fa-shield-halved" },
        { title: "Blogs", src: "fa-solid fa-blog" },
        { title: "Contact ", src: "fa-regular fa-envelope", gap: true },
        { title: "Share", src: "fa-solid fa-share-nodes" },
    ]
    
    return (
       <div className="flex">
        <div className={` ${open ? "w-72": "w-20"} pt-8 duration-300 h-screen bg-dark-green  relative`}>
            <img src={control} className={ `absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-green ${!open && "rotate-180"}`} 
            onClick={()=>setOpen(!open)} alt="cursor"/>

            <div className="flex gap-x-4 items-center">
                <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>ONYX</h1>
            </div>
            <ul className="pt-6">
              {Menus.map((menu, index)=>(
                <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-8" : "mt-2"} ${index === 0 && "bg-light-white"}`}> 
                 <i class={menu.src}></i>
                 <span className={`${!open && "hidden"} orign-left duration-200`}>{menu.title}</span>
                </li>

               
              ))}
            </ul>
        </div>
          <div className="p-7 font-semibold text-2xl flex-1 h-screen">
            <h1>Home</h1>
          </div>
       </div>
    );
};


import { useState } from "react";
import control from "../../assets/control.png";

export const Header = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "fa-solid fa-house", gap: true },
    { title: "About", src: "fa-solid fa-user", gap: true },
    { title: "Skills", src: "fa-solid fa-graduation-cap", gap: true },
    { title: "Projects ", src: "fa-solid fa-bars-progress", gap: true },
    { title: "Achievements", src: "fa-solid fa-shield-halved", gap: true },
    { title: "Blogs", src: "fa-solid fa-blog", gap: true },
    { title: "Contact ", src: "fa-regular fa-envelope", gap: true },
  ];

  return (
    <>
      <div className="lg:hidden">
        <div className="flex justify-between">
          <div>
            <p>logo</p>
          </div>

          <div>
            <p>icon</p>
          </div>
        </div>
      </div>
      <div className="mininfo_nav_wrapper flex items-center bg-light-white max-xl:hidden fixed top-1/2 -translate-y-1/2 right-4 2xl:right-14 z-999 flex-col gap-4 border border-platinum rounded-full px-3 py-20">
        <div className="flex border rounded-full logo w-15 h-15 border-platinum flex-center mb-10">
          <a href="/">
            <img src="" alt="logo" />
          </a>
        </div>

        <div className="my-4 menu">
          <ul className="space-y-2 text-center">
            {Menus.map((menu, index) => (
              <li key={index} data-scroll-nav="0" className="relative group">
                <a
                  href="/"
                  className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white group-hover:bg-white transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group:hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solide after:border-t-4 after:border-r-0 after:border-b-4 after: border-1-8 after:border-t-transparent after:border-1-white "
                >
                  <span className="text-black pt-5">
                    <i class={menu.src}></i>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex border rounded-full logo w-15 h-15 border-platinum flex-center mt-10">
          <a href="/">
            <i class="fa-solid fa-share-nodes"></i>
          </a>
        </div>
      </div>
    </>
  );
};

// {Menus.map((menu, index)=>(
//   <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-8" : "mt-2"} ${index === 0 && "bg-light-white"}`}>
//    <i class={menu.src}></i>
//    <span className={`${!open && "hidden"} orign-left duration-200`}>{menu.title}</span>
//   </li>
// ))}




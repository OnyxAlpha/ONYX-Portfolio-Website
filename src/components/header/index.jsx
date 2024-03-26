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
        {/* for other screens */}
      <div className="lg:hidden overflow-y-scroll">
        <div className="flex items-center justify-between fixed top-0 left-0 right-0 z-50 p-2 px-3 bg-white/10 sm:px-6 backdrop-blur mobile-menu-bar xl:hidden">
          <div className="text-lg font-medium">
            <a className="flex items-center gap-2 text-black dark:text-white">logo</a>
          </div>

          <div>
            <button onClick={() => setOpen(!open)} className={`w-12 h-12 border rounded-full menu_toggle bg-white dark:bg-night black border-platinum dark:border-greyBlack flex-center  ${!open && "rotate-180"}`}  type="button" aria-label="Open Mobile Menu" >
              <svg  className={`fill-current w-10 h-8 py-1 ${open ? "hidden" : "block"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>

             <svg
           className={`fill-current w-9 h-7  pl-2 ${open ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
             </button>
          </div>
        </div>
        <div className={`w-32 block flex items-center justify-end bg-dark-green ${open ? "block" : "hidden"}`}>
        <div className="mb-6 text-lg font-medium text-black menu-title">Menu</div>
       <ul className="space-y-5">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        </div>
      </div>
        
      <div  className={`w-full block flex-grow fixed top=0 -right-full w-full bg-flashWhite dark:bg-nightBlack z-999 h-full transition-all duration-300 right-0 py-12 px-8 overflow-y-scroll xl:hidden ${open ? "block" : "hidden"}`}
      // className="fixed top=0 -right-full w-full bg-flashWhite dark:bg-nightBlack z-999 h-full transition-all duration-300 xl:hidden [&. is-menu-open]:right-0 py-12 px-8 overflow-y-scroll is-menu-open"> 
      >
     </div>
     
         {/* ends here */}




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




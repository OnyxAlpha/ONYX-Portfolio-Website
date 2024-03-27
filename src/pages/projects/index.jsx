import React from "react";
import Footer from "../../components/footer";
import AgroMart from "../../assets/AgroMart.png";
import OnyxCinema from "../../assets/OnyxCinema.png";
import WayWander from "../../assets/WayWander.png";
import spareP from "../../assets/spareP.png";
import Hairhaven from "../../assets/Hairhaven.png";
import Decor from "../../assets/Decor.png"
import { Link } from "react-router-dom";
import Header from "../../components/header";


export default function Projects() {
  return (
    <>
    <Header/>
      <section className="bg-slate-300">
        <div class=" text-center p-10">
          <h1 class="text-3xl text-slate-900">Our Projects Journey </h1>
        </div>

        <section
          id="Projects"
          class="w-fit pb-10 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          <div class="w-96 bg-slate-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src={AgroMart}
                alt="Product"
                class=" object-cover  rounded-t-xl"
              />
              <div class="px-4 py-3">
                <span class="text-lg font-bold text-gray-100  truncate block capitalize">
                  AgroMart
                </span>
                <p class="text-gray-100 mr-3 pt-2 pb-3 text-s">A digital market place to buy and sell all agro products and produce</p>

                <div className="flex gap-3 justify-center">
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-20 rounded-lg text-xs">
                  <p className="m-0">React Js</p>
                </div>
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-20 rounded-lg text-xs">
                  <p className="m-0">CSS</p>
                </div>
                </div>
                <div class="flex justify-between pt-3">
                  <div>
                   <Link to="" target="_blank"> <button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded active:shadow-none text-gray-100 ">
                      Live {""}<i class="fa-solid fa-link "></i>
                    </button></Link>
                  </div>
                  <div>
                    <Link to="https://github.com/OnyxAlpha/ONYX-AgroMart.git" target="_blank"><button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none text-gray-100 ">
                      GitHub {""}<i class="fa-brands fa-github"></i>
                    </button></Link>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="w-96 bg-slate-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src={OnyxCinema}
                alt="onyxcinema"
                class="object-cover rounded-t-xl"
              />
              <div class="px-4 py-3">
                <span class="text-lg font-bold text-gray-100  truncate block capitalize">
                  OnyxCinema
                </span>
                <p class="text-gray-100 mr-3 pt-2 pb-3 text-s">A movie search app to keep track of all your favourite popular movies and TV shows</p>

                <div className="flex gap-3 justify-center">
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-20 rounded-lg text-xs">
                  <p className="m-0">React Js</p>
                </div>
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-30 rounded-lg text-xs">
                  <p className="m-0">Tailwind CSS</p>
                </div>
                </div>
                <div class="flex justify-between pt-3">
                  <div>
                    <Link to="https://onyx-movie-search-app-hazel.vercel.app/" target="_blank"><button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded active:shadow-none text-gray-100 ">
                      Live {""}<i class="fa-solid fa-link "></i>
                    </button></Link>
                  </div>
                  <div>
                   <Link to="https://github.com/OnyxAlpha/ONYX-Movie-Search-App.git" target="_blank"> <button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none text-gray-100 ">
                      GitHub {""}<i class="fa-brands fa-github"></i>
                    </button></Link>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="w-96 bg-slate-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src={WayWander}
                alt="Product"
                class=" object-cover rounded-t-xl"
              />
              <div class="px-4 py-3">
                <span class="text-lg font-bold text-gray-100  truncate block capitalize">
                  WayWander
                </span>
                <p class="text-gray-100 mr-3 pt-2 pb-3 text-s">A travel blog to share experiences, stories, photos, and tips related to travel </p>

                <div className="flex gap-3 justify-center">
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-20 rounded-lg text-xs">
                  <p className="m-0">React Js</p>
                </div>
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-30 rounded-lg text-xs">
                  <p className="m-0">Tailwind CSS</p>
                </div>
                </div>
                <div class="flex justify-between pt-3">
                  <div>
                   <Link to="" target="_blank"> <button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded active:shadow-none text-gray-100 ">
                      Live {""}<i class="fa-solid fa-link "></i>
                    </button></Link>
                  </div>
                  <div>
                   <Link to="https://github.com/Hannan-Laaraba/Travel_App.git" target="_blank"> <button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none text-gray-100 ">
                      GitHub {""}<i class="fa-brands fa-github"></i>
                    </button></Link>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="w-96 bg-slate-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src={spareP}
                alt="Product"
                class=" object-cover rounded-t-xl"
              />
              <div class="px-4 py-3">
                <span class="text-lg font-bold text-gray-100  truncate block capitalize">
                 SpareP
                </span>
                <p class="text-gray-100 mr-3 pt-2 pb-3 text-s">An digital market place for for all vehicular spare parts shops </p>

                <div className="flex gap-3 justify-center">
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-20 rounded-lg text-xs">
                  <p className="m-0">React Js</p>
                </div>
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-30 rounded-lg text-xs">
                  <p className="m-0">Tailwind CSS</p>
                </div>
                </div>
                <div class="flex justify-between pt-3">
                  <div>
                    <Link to="https://spare-p.vercel.app/" target="_blank"><button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded active:shadow-none text-gray-100 ">
                      Live {""}<i class="fa-solid fa-link "></i>
                    </button></Link>
                  </div>
                  <div>
                    <Link to="https://github.com/AngeloKwakye/spareP.git" target="_blank"><button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none text-gray-100 ">
                      GitHub {""}<i class="fa-brands fa-github"></i>
                    </button></Link>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="w-96 bg-slate-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src={Hairhaven}
                alt="hairhaven"
                class=" object-cover rounded-t-xl"
              />
              <div class="px-4 py-3">
                <span class="text-lg font-bold text-gray-100  truncate block capitalize">
                  HairHaven
                </span>
                <p class="text-gray-100 mr-3 pt-2 pb-3 text-s">A digital market place to buy and sell all agro products and produce</p>

                <div className="flex gap-3 justify-center">
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-20 rounded-lg text-xs">
                  <p className="m-0">React Js</p>
                </div>
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-20 rounded-lg text-xs">
                  <p className="m-0">CSS</p>
                </div>
                </div>
                <div class="flex justify-between pt-3">
                  <div>
                    <Link to="" target="_blank"><button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded active:shadow-none text-gray-100 ">
                      Live {""}<i class="fa-solid fa-link "></i>
                    </button></Link>
                  </div>
                  <div>
                    <Link to="https://github.com/SADDA12/hair_haven_landing_page.git" target="_blank"><button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none text-gray-100 ">
                      GitHub {""}<i class="fa-brands fa-github"></i>
                    </button></Link>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="w-96 bg-slate-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src={Decor}
                alt="decorpro"
                class=" object-cover rounded-t-xl"
              />
              <div class="px-4 py-3">
                <span class="text-lg font-bold text-gray-100  truncate block capitalize">
                  DecorPro
                </span>
                <p class="text-gray-100 mr-3 pt-2 pb-3 text-s">A digital market place to buy and sell all agro products and produce</p>

                <div className="flex gap-3 justify-center">
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-20 rounded-lg text-xs">
                  <p className="m-0">HTML</p>
                </div>
                <div className=" flex text-gray-100 border border-gray-500 p-2 w-20 rounded-lg text-xs">
                  <p className="m-0">CSS</p>
                </div>
                </div>
                <div class="flex justify-between pt-3">
                  <div>
                    <Link to="" target="_blank"><button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded active:shadow-none text-gray-100 ">
                      Live {""}<i class="fa-solid fa-link "></i>
                    </button></Link>
                  </div>
                  <div>
                    <Link to="https://github.com/Nadia-kaf/Decor-Pro.git" target="_blank"><button className=" hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none text-gray-100 ">
                      GitHub {""}<i class="fa-brands fa-github"></i>
                    </button></Link>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

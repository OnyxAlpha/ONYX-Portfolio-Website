import { Link } from "react-router-dom";
import reactmistakes from "../../assets/reactmistakes.png";
import cssblog from "../../assets/cssgradientsblog.png";
import aiblog from "../../assets/aiblog.png";

export default function BlogComponent() {
    return (
        <>
        <div id="blogs" className="px-10 md:px-28 py-10 bg-slate-50">
        <div className="ps-4 pe-4">

          <h2 class="tracking-tighter mb-10 text-slate-800 text-2xl md:text-4xl leading-tight h2 font-medium section-title z-30 text-center">
        Onyx <span class="inline-block relative z-20 ">blog posts</span>
    </h2>

          <ul className="grid grid-cols-6 md:col-span-1 row-start-1 row-end-4 gap-x-9">
            <div className="col-span-4 flex flex-col gap-5">
              <li>
                <Link to={"/"}>
                  <div className="border-e-2 ">
                    <figure className="rounded-2xl overflow-hidden mb-5 mr-10 bg-cover bg-center w-24 md:w-60 lg:w-11/12">
                      <img
                        src={reactmistakes}
                        loading="lazy"
                        alt="Godaddy user flow solution ..."
                        className="ease-in-out duration-100 w-full h-32 md:h-72 object-cover focus:scale-110 hover:scale-110 focus:brightness-60 hover:brightness-60"
                      />
                    </figure>

                    <div>
                      <div class="flex flex-wrap items-center gap-2">
                        <p class="tag" className="md:text-2xl">OnyxDevs</p>

                        <p class="publish-date">
                          <i className="fa-regular fa-clock text-sm pr-1"></i>
                          <span class="span" className="text-xs md:text-2xl">March 10, 2023</span>
                        </p>
                      </div>

                      <h3>
                        <p class="text-sm md:text-4xl leading-tight mb-5">
                          5 mistakes I made when starting my first react project
                        </p>
                      </h3>

                      <p class="pr-10" className="text-sm md:text-2xl">
                      You know what it’s like to pick up a new language or framework. Sometimes there’s great documentation to help you find your way through it. But even the best documentation doesn’t cover absolutely everything. And when you work with something that’s new, you’re bound to find a problem that doesn’t have a written solution.
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <button className='px-5 py-2 text-indigo-900 hover:text-white focus:text-white bg-blue-100 w-44 hover:bg-blue-500 focus:hover:bg-violet-700 rounded-xl transition delay-50 duration-500 ease-in-out'>See more <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="col-span-2">
              <li>
                <Link to={"/"}>
                  <div class="mb-5 ">
                    <figure class="rounded-2xl mb-2 w-32 md:w-64 overflow-hidden">
                      <img
                        src={cssblog}
                        loading="lazy"
                        alt="Godaddy user flow solution for every individual"
                        class="rounded-2xl ease-in-out md:w-64 duration-100 object-cover focus:scale-110 hover:scale-110 focus:brightness-60 hover:brightness-60"
                      />
                    </figure>

                    <div class="mb-5">
                      <div class="flex flex-wrap items-center gap-2">
                        <p class="tag" className="md:text-2xl">OnyxDevs</p>

                        <p class="publish-date">
                          <i className="fa-regular fa-clock text-sm pr-1"></i>
                          <span class="span" className="text-xs md:text-xl">February 10, 2023</span>
                        </p>
                      </div>

                      <h3 class="h3">
                        <p class="card-title" className="font-semibold text-xs md:text-2xl">
                          Different Ways to Get Css Gradient Shadows
                        </p>
                      </h3>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <div class="mb-5">
                    <figure class="rounded-2xl w-32 md:w-64 overflow-hidden mb-2 mr-10">
                      <img
                        src={aiblog}
                        loading="lazy"
                        alt="Godaddy user flow solution for every individual"
                        class="rounded-2xl ease-in-out w-64 duration-100 object-cover focus:scale-110 hover:scale-110 focus:brightness-60 hover:brightness-60"
                      />
                    </figure>

                    <div class="card-content">
                      <div class="flex flex-wrap items-center gap-2">
                        <p class="tag" className="md:text-2xl">OnyxDevs</p>

                        <p class="publish-date">
                          <i className="fa-regular fa-clock text-sm pr-1"></i>
                          <span class="span" className="text-xs md:text-2xl">March 08, 2024</span>
                        </p>
                      </div>

                      <h3 class="h3">
                        <p class="card-title" className="text-sm md:text-2xl font-semibold">
                          ChatGPT Plugins for Marketing Success
                        </p>
                      </h3>
                    </div>
                  </div>
                </Link>
              </li>
              
            </div>
          </ul>
        </div>
      </div>{" "}
        </>
    );
};
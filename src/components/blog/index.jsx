import { Link } from "react-router-dom";
import starwars from  '../../assets/starWars.jpg';

export default function BlogComponent() {
    return (
        <>
        <div id="blogs" className="px-28 py-10 bg-slate-50">
        <div className="ps-4 pe-4">
          <p className="text-slate-400 pt-14 pb-3 text-xl relative z-10 text-center font-medium leading-tight before:static before:w-3 before:h-3 before:bg-violet-700 before:inline-block before:rounded-full before:me-2.5">
            Blog Post
          </p>

          <h2 class="tracking-tighter mb-10 text-slate-800 text-4xl leading-tight h2 font-medium section-title z-30 text-center">
        Onyx <span class="inline-block relative z-20 before:bottom-2 before:left-0 before:absolute before:w-full before:h-1.5 before:bg-violet-700 before:z-[-1]">posts</span>
    </h2>

          <ul className="grid grid-cols-6 md:col-span-1 row-start-1 row-end-4 gap-x-9">
            <div className="col-span-4 flex flex-col gap-5">
              <li>
                <Link to={"/"}>
                  <div className="border-e-2 ">
                    <figure className="rounded-2xl overflow-hidden mb-5 mr-10 bg-cover bg-center ">
                      <img
                        src={starwars}
                        loading="lazy"
                        alt="Godaddy user flow solution ..."
                        className="ease-in-out duration-100 w-full h-72 object-cover focus:scale-110 hover:scale-110 focus:brightness-60 hover:brightness-60"
                      />
                    </figure>

                    <div>
                      <div class="flex flex-wrap items-center gap-2">
                        <p class="tag">Development</p>

                        <p class="publish-date">
                          <i className="fa-regular fa-clock text-sm pr-1"></i>
                          <span class="span">July 22, 2022</span>
                        </p>
                      </div>

                      <h3>
                        <p class="text-4xl leading-tight mb-5">
                          Godaddy user flow solution...
                        </p>
                      </h3>

                      <p class="pr-10">
                        At Wiase we specialise in designing, building, shipping
                        and scaling beautiful services. At Wiase we specialise
                        in designing, building, shipping and scaling beautiful
                        services. designing, building, shipping and scaling
                        beautiful services.
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <button className='px-5 py-2 text-violet-700 hover:text-white focus:text-white bg-slate-300 w-44 hover:bg-violet-700 focus:hover:bg-violet-700 rounded-xl transition delay-50 duration-500 ease-in-out'>See more <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="col-span-2">
              <li>
                <Link to={"/"}>
                  <div class="mb-5 ">
                    <figure class="rounded-2xl mb-2 w-64 overflow-hidden">
                      <img
                        src={starwars}
                        loading="lazy"
                        alt="Godaddy user flow solution for every individual"
                        class="rounded-2xl ease-in-out w-64 duration-100 object-cover focus:scale-110 hover:scale-110 focus:brightness-60 hover:brightness-60"
                      />
                    </figure>

                    <div class="mb-5">
                      <div class="flex flex-wrap items-center gap-2">
                        <p class="tag">Development</p>

                        <p class="publish-date">
                          <i className="fa-regular fa-clock text-sm pr-1"></i>
                          <span class="span">July 21, 2022</span>
                        </p>
                      </div>

                      <h3 class="h3">
                        <p class="card-title">
                          Godaddy user flow solution for every individual
                        </p>
                      </h3>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <div class="mb-5">
                    <figure class="rounded-2xl w-64 overflow-hidden mb-2 mr-10">
                      <img
                        src={starwars}
                        loading="lazy"
                        alt="Godaddy user flow solution for every individual"
                        class="rounded-2xl ease-in-out w-64 duration-100 object-cover focus:scale-110 hover:scale-110 focus:brightness-60 hover:brightness-60"
                      />
                    </figure>

                    <div class="card-content">
                      <div class="flex flex-wrap items-center gap-2">
                        <p class="tag">Development</p>

                        <p class="publish-date">
                          <i className="fa-regular fa-clock text-sm pr-1"></i>
                          <span class="span">July 21, 2022</span>
                        </p>
                      </div>

                      <h3 class="h3">
                        <p class="card-title">
                          Godaddy user flow solution for every individual
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
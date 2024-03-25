import React from "react";
import starwars from '../../assets/starWars.jpg'
export default function Blog() {
  return (
    <>
      <div className="p-28 bg-slate-50">
        <div className="ps-4 pe-4">
          <p className="text-3xl text-current font-medium leading-5 text-center relative z-10 before:static before:w-3 before:h-3 before:bg-amber-500 before:inline-block before:rounded-full before:me-2.5">
            Blog Post
          </p>

          <h2 className="text-black text-5xl leading-tight tracking-tighter my-8 mx-12 text-center">
          Popular <span class="inline-block relative inline-block before:bottom-2 before:left-0 before:w-full before:h-1.5 before:bg-amber-500 z-10">blog post</span>
          </h2>

            <ul className="grid grid-cols-2 gap-x-70 gap-y-40 row-start-1 row-end-4 gap-x-9 p-10">
                <li>
                    <div className=" border-e-2">
                        <figure className="rounded-2xl overflow-hidden mb-5 mr-10">
                        <img src={starwars} loading="lazy" alt="Godaddy user flow solution ..." className="ease-in-out duration-100 w-full h-72 object-cover focus:scale-110 hover:scale-110 focus:brightness-60 hover:brightness-60 " />
                        </figure>

                        <div>
                                    <div class="flex flex-wrap items-center gap-30 mb-5">
                                        <a href="#" class="tag">Development</a>

                                        <a href="#" class="publish-date">
                                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                                            <span class="span">July 22, 2022</span>
                                        </a>
                                    </div>

                                    <h3>
                                        <a href="#" class="text-4xl leading-tight mb-5">Godaddy user flow solution...</a>
                                    </h3>

                                    <p class="card-text">
                                        At Wiase we specialise in designing, building, shipping and scaling beautiful services.
                                        At Wiase we specialise in designing, building, shipping and scaling beautiful services. designing, building, shipping and scaling beautiful services.
                                    </p>
                                </div>
                    </div>
                </li>
                <li>
                            <div class="blog-card">
                                <figure class="card-banner">
                                    <img src="./assets/images/blog-2.jpg" width="202" height="162" loading="lazy" alt="Godaddy user flow solution for every individual" class="img-cover" />
                                </figure>

                                <div class="card-content">
                                    <div class="wrapper">
                                        <a href="#" class="tag">Development</a>

                                        <a href="#" class="publish-date">
                                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                                            <span class="span">July 21, 2022</span>
                                        </a>
                                    </div>

                                    <h3 class="h3">
                                        <a href="#" class="card-title">Godaddy user flow solution for every individual</a>
                                    </h3>

                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="blog-card">
                                <figure class="card-banner">
                                    <img src="./assets/images/blog-2.jpg" width="202" height="162" loading="lazy" alt="Godaddy user flow solution for every individual" class="img-cover" />
                                </figure>

                                <div class="card-content">
                                    <div class="wrapper">
                                        <a href="#" class="tag">Development</a>

                                        <a href="#" class="publish-date">
                                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                                            <span class="span">July 21, 2022</span>
                                        </a>
                                    </div>

                                    <h3 class="h3">
                                        <a href="#" class="card-title">Godaddy user flow solution for every individual</a>
                                    </h3>

                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="blog-card">
                                <figure class="card-banner">
                                    <img src="./assets/images/blog-2.jpg" width="202" height="162" loading="lazy" alt="Godaddy user flow solution for every individual" class="img-cover" />
                                </figure>

                                <div class="card-content">
                                    <div class="wrapper">
                                        <a href="#" class="tag">Development</a>

                                        <a href="#" class="publish-date">
                                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                                            <span class="span">July 21, 2022</span>
                                        </a>
                                    </div>

                                    <h3 class="h3">
                                        <a href="#" class="card-title">Godaddy user flow solution for every individual</a>
                                    </h3>

                                </div>
                            </div>
                        </li>
            </ul>
        </div>
      </div>{" "}
    </>
  );
}

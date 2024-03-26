import { Link } from 'react-router-dom';
import starwars from '../../assets/starWars.jpg'

export default function ProjectsSection() {
    return (
        <>
        <section class="ps-24 pe-24 bg-slate-50" id="portfolio">

<div class="ps-4 pe-4">

    <p class="text-slate-400 pt-14 pb-3 text-xl relative z-10 text-center font-medium leading-tight before:static before:w-3 before:h-3 before:bg-violet-700 before:inline-block before:rounded-full before:me-2.5">
        Projects
    </p>

    <h2 class="tracking-tighter text-slate-800 text-4xl leading-tight h2 font-medium section-title z-30 text-center">
        Onyx complete <span class="inline-block relative z-20 before:bottom-2 before:left-0 before:absolute before:w-full before:h-1.5 before:bg-violet-700 before:z-[-1]">project</span>
    </h2>

    <ul class="grid grid-cols-1 gap-4 p-10 md:grid-cols-3 sm:grid-cols-2">
        <li className="col-span-1 md:col-span-2 sm:col-span-2">
            <div class="group relative align-center rounded-2xl overflow-hidden">

                <figure class="rounded-2xl img-holder overflow-hidden">
                    <img src={starwars} className="w-full h-80 transition delay-150 duration-700 ease-in-out focus:scale-110 hover:scale-110 focus:brightness-50 hover:brightness-50" loading="lazy" alt="Book art design"/>
                </figure>

                <div class="absolute top-10 text-center sm:right-60 opacity-0 group-hover:translate-y-16 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left=-5 bg-violet-700 rounded-xl px-14 py-4 sm:px-32 sm:py-16 translate-y-2/4 transition delay-50 duration-500 ease-in-out">
                    <h2 class="h3">
                        <a href="#" class="text-white">Project Name</a>
                    </h2>

                    <Link href="#" class="text-xs text-white decoration-none">Live <i class="fa-solid fa-eye"></i></Link>
                </div>
            </div>
        </li>

        <li>
            <div class="group relative align-center rounded-2xl overflow-hidden">

                <figure class="rounded-2xl img-holder overflow-hidden">
                    <img src={starwars} class="w-full h-80 transition delay-150 duration-700 ease-in-out focus:scale-110 hover:scale-110 focus:brightness-50 hover:brightness-50" loading="lazy" alt="3d Didita Art" />
                </figure>

                <div class="absolute top-[40%] text-center right-24 opacity-0  group-hover:-translate-y-6 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left=-5 bg-violet-700 rounded-xl px-16 py-10 translate-y-6 transition delay-50 duration-500 ease-in-out">
                    <h2 class="h3">
                        <a href="#" class="text-white">Project Name</a>
                    </h2>

                    <Link href="#" class="text-xs text-white decoration-none">Live <i class="fa-solid fa-eye"></i></Link>
                </div>
            </div>
        </li>

        <li>
            <div class="group relative align-center rounded-2xl overflow-hidden">

                <figure class="rounded-2xl img-holder overflow-hidden">
                    <img src={starwars} class="w-full h-80 transition delay-150 duration-700 ease-in-out focus:scale-110 hover:scale-110 focus:brightness-50 hover:brightness-50" loading="lazy" alt="3d Didita Art" />
                </figure>

                <div class="absolute top-[40%] text-center right-24 opacity-0  group-hover:-translate-y-6 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left=-5 bg-violet-700 rounded-xl px-16 py-10 translate-y-6 transition delay-50 duration-500 ease-in-out">
                    <h2 class="h3">
                        <a href="#" class="text-white">Project Name</a>
                    </h2>

                    <Link href="#" class="text-xs text-white decoration-none">Live <i class="fa-solid fa-eye"></i></Link>
                </div>
            </div>
        </li>
        
        <li>
            <div class="group relative align-center rounded-2xl overflow-hidden">

                <figure class="rounded-2xl img-holder overflow-hidden">
                    <img src={starwars} class="w-full h-80 transition delay-150 duration-700 ease-in-out focus:scale-110 hover:scale-110 focus:brightness-50 hover:brightness-50" loading="lazy" alt="3d Didita Art" />
                </figure>

                <div class="absolute top-[40%] text-center right-24 opacity-0  group-hover:-translate-y-6 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left=-5 bg-violet-700 rounded-xl px-16 py-10 translate-y-6 transition delay-50 duration-500 ease-in-out">
                    <h2 class="h3">
                        <a href="#" class="text-white">Project Name</a>
                    </h2>

                    <Link href="#" class="text-xs text-white decoration-none">Live <i class="fa-solid fa-eye"></i></Link>
                </div>
            </div>
        </li>

        <li>
            <div class="group relative align-center rounded-2xl overflow-hidden">

                <figure class="rounded-2xl img-holder overflow-hidden">
                    <img src={starwars} class="w-full h-80 transition delay-150 duration-700 ease-in-out focus:scale-110 hover:scale-110 focus:brightness-50 hover:brightness-50" loading="lazy" alt="3d Didita Art" />
                </figure>

                <div class="absolute top-[40%] text-center right-24 opacity-0  group-hover:-translate-y-6 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left=-5 bg-violet-700 rounded-xl px-16 py-10 translate-y-6 transition delay-50 duration-500 ease-in-out">
                    <h2 class="h3">
                        <a href="#" class="text-white">Project Name</a>
                    </h2>

                    <Link href="#" class="text-xs text-white decoration-none">Live <i class="fa-solid fa-eye"></i></Link>
                </div>
            </div>
        </li>
    </ul>
   <div  className='px-10'>
   <button className='px-10 py-2 text-violet-700 hover:text-white focus:text-white bg-slate-300 hover:bg-violet-700 focus:hover:bg-violet-700 rounded-xl transition delay-50 duration-500 ease-in-out'>more <i class="fa-solid fa-arrow-right"></i></button>
   </div>
</div>

</section>
        </>
    );
};
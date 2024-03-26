

export default function ExperiencesSection() {
  return (
    <section className="bg-light-white">
      <div className=" font-semibold text-2xl flex-1 ml-72 h-4/6 w-6/12 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h2>
          Work <span className="text-dark-green">Experience</span>
        </h2>

        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <div class="md:w-2/3">
          <div class="relative mt-5 text-left ml-20">
            <div class="flex items-center relative">
              <div class="hidden md:block w-20">
                <div class="font-bold italic text-sm ml-1 mt-5">GOOGLE</div>
                <div class="md:flex space-x-1 text-xs">
                  <div className="text-dark-green">Jan 20,2024 - Current</div>
                </div>
              </div>

              <div class="border-r-2 border-dark-green absolute h-full left-2 md:left-20 top-2 z-10 "></div>

              <div class="ml-10">
                <div class="font-bold text-sm mt-6">Full Stack Developer</div>
                <div class="mb-10 text-sm">
                  Fusce auctor gravida dui, ut tristique nisi aliquam quis.
                </div>
              </div>
            </div>

            <div class="flex items-center relative">
              <div class="hidden md:block w-20">
                <div class="font-bold italic text-sm">AMALITECH</div>
                <div class="md:flex space-x-1 text-xs">
                  <div className="text-dark-green">2022-2023</div>
                </div>
              </div>

              <div class="border-r-2 border-dark-green absolute h-full left-2 md:left-20 top-2 z-10 "></div>

              <div class="ml-10">
                <div class="font-bold text-sm mt-6">Backend Developer</div>
                <div class="mb-10 text-sm">
                  Fusce auctor gravida dui, ut tristique nisi aliquam quis.{" "}
                </div>
              </div>
            </div>

            <div class="flex items-center relative">
              <div class="hidden md:block w-20">
                <div class="font-bold italic text-sm">MEST</div>
                <div class="md:flex space-x-1 text-xs">
                  <div className="text-dark-green">2021-2022</div>
                </div>
              </div>

              <div class="border-r-2 border-dark-green absolute h-full left-2 md:left-20 top-2 z-10 "></div>

              <div class="ml-10">
                <div class="font-bold text-sm mt-6">Frontend Developer</div>
                <div class="mb-10 text-sm">
                  Fusce auctor gravida dui, ut tristique nisi aliquam quis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

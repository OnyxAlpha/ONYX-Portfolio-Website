export default function ExperiencesSection() {
  return (
    <section id="experiences">
      <div>
        <h1 className="text-center text-xl font-bold md:text-3xl">Work Experience</h1>
      </div>

      <div className="lg:flex lg:justify-center">

      <div className="bg-blue-100 m-5 border-2 border-slate-900 rounded-lg p-3 lg:w-3/4">
        <div className="border-b-2 border-slate-900 flex justify-between mb-2">
          <div>
            <p className="text-sm font-semibold md:text-xl">Web Developer @ Moreton Bay Regional Council</p>
          </div>
          <div>
            <p className="text-sm md:text-xl">01/Feb-28/Feb 2024</p>
          </div>
        </div>

        <div>
          <div className="flex">
          <i class="fa-solid fa-location-dot mt-1 mr-1 md:text-xl"></i>
          <p className="md:text-xl md:mt-1">MEST, Africa</p>
          </div>

          <div className="p-4">
             <ul className="list-disc">
                <li className="mb-2 md:text-lg">Planned a website</li>
                <li className="mb-2 md:text-lg">Created site maps and userflows</li>
               <li className="mb-2 md:text-lg">Created a form</li>
            </ul>
          </div>

          <div className="flex gap-5">
          <p className="border border-slate-400 rounded-lg px-1 font-semibold md:text-lg">HTML</p>
          <p className="border border-slate-400 rounded-lg px-1 font-semibold md:text-lg">CSS</p>
          <p className="border border-slate-400 rounded-lg px-1 font-semibold md:text-lg">Figma</p>
          </div>
        </div>
      </div>
      </div>

      <div className="lg:flex lg:justify-center">

      <div className="bg-blue-100 m-5 border-2 border-slate-900 rounded-lg p-3 lg:w-3/4">
        <div className="border-b-2 border-slate-900 flex justify-between mb-2">
          <div>
            <p className="text-sm font-semibold md:text-xl">Frontend Developer @ InfotechdotnetSystems</p>
          </div>
          <div>
            <p className="text-sm md:text-xl">Sept/2022-Nov/2023</p>
          </div>
        </div>

        <div>
          <div className="flex">
          <i class="fa-solid fa-location-dot mt-1 mr-1 md:text-xl"></i>
          <p className="md:text-xl md:mt-1">Accra, Ghana</p>
          </div>

          <div className="p-4">
             <ul className="list-disc">
                <li className="mb-2 md:text-lg">Worked with backend developers to create APIs</li>
                <li className="mb-2 md:text-lg">Actively developed and maintain user-friendly and interactive UI</li>
               <li className="mb-2 md:text-lg">Consistently developed and deployed code to the organization's GitHub repository</li>
            </ul>
          </div>

          <div className="flex gap-5">
          <p className="border border-slate-400 rounded-lg px-1 font-semibold md:text-lg">Angular</p>
          <p className="border border-slate-400 rounded-lg px-1 font-semibold md:text-lg">API</p>
          <p className="border border-slate-400 rounded-lg px-1 font-semibold md:text-lg">Typescript</p>
          </div>
        </div>
      </div>
      </div>

      <div className="lg:flex lg:justify-center">

      <div className="bg-blue-100 m-5 border-2 border-slate-900 rounded-lg p-3 lg:w-3/4">
        <div className="border-b-2 border-slate-900 flex justify-between mb-2">
          <div>
            <p className="text-sm font-semibold md:text-xl">Frontend Developer @ Simeds</p>
          </div>
          <div>
            <p className="text-sm md:text-xl">Aug/2023-Jan/2024</p>
          </div>
        </div>

        <div>
          <div className="flex">
          <i class="fa-solid fa-location-dot mt-1 mr-1 md:text-xl"></i>
          <p className="md:text-xl md:mt-1">Accra, Ghana</p>
          </div>

          <div className="p-4">
             <ul className="list-disc">
                <li className="mb-2 md:text-lg">Actively write scalable, reusable, and effective typescript code</li>
                <li className="mb-2 md:text-lg">Actively debug code to improve performance</li>
               <li className="mb-2 md:text-lg">Consistently developed and deployed code to the organization's GitHub repository</li>
            </ul>
          </div>

          <div className="flex gap-5">
          <p className="border border-slate-400 rounded-lg px-1 font-semibold md:text-lg">Typescript</p>
          <p className="border border-slate-400 rounded-lg px-1 font-semibold md:text-lg">Debugging</p>
          <p className="border border-slate-400 rounded-lg px-1 font-semibold md:text-lg">GitHub</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

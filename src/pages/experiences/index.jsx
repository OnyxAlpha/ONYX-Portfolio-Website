export default function Experiences() {
    return (
       <section className="bg-light-white"> 
        <div className=" font-semibold text-2xl flex-1 ml-72 h-4/6 w-6/12 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h2>
          Work <span className="text-dark-green">Experience</span>
        </h2>
           <div>Image</div>
           <h4>Job title</h4>
           <h3>Name of organization</h3>
           <p>Duration</p>
           <p>Location</p>
       <hr />
        </div>
       </section>
    );
};
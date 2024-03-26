import React from "react";

export default function Skills() {
  return (
    <>
      <section>
        <div className="text-center">
          <h3 className="font-semibold text-xl pt-5 md:text-3xl">Our Skills</h3>
        </div>

        <div className="grid grid-cols-3 p-10 md:grid-cols-5">
          <div className="bg-sky-200 text-center">
            <i class="fa-brands fa-html5"></i>
            <p>HTML5</p>
          </div>

          <div className="text-center">
            <i class="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </div>

          <div className="bg-sky-200 text-center">
            <i class="fa-brands fa-js"></i>
            <p>JavaScript</p>
          </div>

          <div className="text-center">
            <i class="fa-brands fa-react"></i>
            <p>React JS</p>
          </div>

          <div className="bg-sky-200 text-center">
            <i class="fa-brands fa-node-js"></i>
            <p>Nodejs</p>
          </div>

          <div className="text-center">
          <i class="fa-brands fa-envira fa-rotate-by" style={{rotate: "40deg"}}></i>
            <p>MongoDB</p>
          </div>

          <div className="bg-sky-200 text-center">
            <i class="fa-brands fa-github"></i>
            <p>GitHub</p>
          </div>

          <div className="text-center">
            <p>icon</p>
            <p>Tailwind</p>
          </div>

          <div className="bg-sky-200 text-center">
            <p>icon</p>
            <p>Responsive Design</p>
          </div>

          <div className="text-center">
            <p>icon</p>
            <p>Figma</p>
          </div>

          <div className="bg-sky-200 text-center md:col-span-2">
            <p>icon</p>
            <p>APIs</p>
          </div>

          <div className="text-center">
            <p>icon</p>
            <p>Command Line</p>
          </div>

          <div className="bg-sky-200 col-span-3 text-center md:col-span-2">
            <p>icon</p>
            <p>Deployment and Hosting</p>
          </div>
        </div>
      </section>
    </>
  );
}

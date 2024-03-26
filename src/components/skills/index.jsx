import React from "react";
import tailwindlogo from "../../assets/tailwindlogo.png";
import rwdlogo from "../../assets/rwdlogo.png";
import apilogo from "../../assets/apilogo.png";
import clilogo from "../../assets/clilogo.png";
import deploymentlogo from "../../assets/deploymentlogo.png";
import figmalogo from "../../assets/figmalogo.png";

export default function Skills() {
  return (
    <>
      <section className="bg-slate-100">
        <div className="text-center">
          <h3 className="font-semibold text-xl pt-5 md:text-3xl">Our Skills</h3>
        </div>

        <div className="grid grid-cols-3 p-10 md:grid-cols-5">
          <div className="bg-sky-200 text-center p-5">
            <i class="fa-brands fa-html5 text-red-600 text-6xl"></i>
            <p>HTML5</p>
            <p>Advanced</p>
          </div>

          <div className="text-center p-5">
            <i class="fa-brands fa-css3-alt text-sky-600 text-6xl"></i>
            <p>CSS</p>
            <p>Advanced</p>
          </div>

          <div className="bg-sky-200 text-center p-5">
            <i class="fa-brands fa-js text-amber-300 text-6xl"></i>
            <p>JavaScript</p>
            <p>Intermediate</p>
          </div>

          <div className="text-center p-5">
            <i class="fa-brands fa-react text-cyan-600
            text-6xl"></i>
            <p>React JS</p>
            <p>Intermediate</p>
          </div>

          <div className="bg-sky-200 text-center p-5">
            <i class="fa-brands fa-node-js text-green-600 text-6xl"></i>
            <p>Nodejs</p>
            <p>Intermediate</p>
          </div>

          <div className="text-center p-5">
          <i class="fa-brands fa-envira fa-rotate-by text-green-500 text-6xl" style={{rotate: "40deg"}}></i>
            <p>MongoDB</p>
            <p>Intermediate</p>
          </div>

          <div className="bg-sky-200 text-center p-5">
            <i class="fa-brands fa-github text-6xl"></i>
            <p>GitHub</p>
            <p>Advanced</p>
          </div>

          <div className="text-center p-5">
            <img src={tailwindlogo} alt="tailwind css logo"/>
            <p>Tailwind</p>
            <p>Intermediate</p>
          </div>

          <div className="bg-sky-200 text-center p-5">
            <img src={rwdlogo} alt="responsive web design"/>
            <p>Responsive Design</p>
            <p>Advanced</p>
          </div>

          <div className="text-center p-5">
            <img src={figmalogo} alt="figma logo" />
            <p>Figma</p>
            <p>Intermediate</p>
          </div>

          <div className="bg-sky-200 text-center p-5 md:col-span-2">
            <img src={apilogo} alt="api logo"/>
            <p>APIs</p>
            <p>Intermediate</p>
          </div>

          <div className="text-center p-5">
            <img src={clilogo} alt="command line logo"/>
            <p>Command Line</p>
            <p>Intermediate</p>
          </div>

          <div className="bg-sky-200 col-span-3  p-5 md:col-span-2">
            <img src={deploymentlogo} alt="deployment logo" className="h-28 w-36"/>
            <p>Deployment and Hosting</p>
            <p>Intermediate</p>
          </div>
        </div>
      </section>
    </>
  );
}

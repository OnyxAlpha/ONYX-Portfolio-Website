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
      <section className="bg-slate-900">
        <div className="text-center">
          <h3 className="font-semibold text-xl text-white pt-5 md:text-3xl">Our Skills</h3>
        </div>

        <div className="grid grid-cols-3 p-10 md:grid-cols-5">
          <div className="bg-sky-200 text-center p-5">
            <i class="fa-brands fa-html5 text-red-600 text-5xl"></i>
            <p className="text-sm font-semibold text-white">HTML5</p>
            <p className="text-white">Advanced</p>
          </div>

          <div className="text-center p-5">
            <i class="fa-brands fa-css3-alt text-sky-600 text-5xl"></i>
            <p className="text-sm font-semibold text-white">CSS</p>
            <p className="text-white">Advanced</p>
          </div>

          <div className="bg-sky-200 text-center p-5">
            <i class="fa-brands fa-js text-amber-300 text-5xl"></i>
            <p className="text-sm font-semibold text-white">JavaScript</p>
            <p className="text-white">Intermediate</p>
          </div>

          <div className="text-center p-5">
            <i class="fa-brands fa-react text-cyan-600
            text-5xl"></i>
            <p className="text-sm font-semibold text-white">React JS</p>
            <p className="text-white">Intermediate</p>
          </div>

          <div className="bg-sky-200 text-center p-5">
            <i class="fa-brands fa-node-js text-green-600 text-5xl"></i>
            <p className="text-sm font-semibold text-white">Nodejs</p>
            <p className="text-white">Intermediate</p>
          </div>

          <div className="text-center p-5">
          <i class="fa-brands fa-envira fa-rotate-by text-green-500 text-5xl" style={{rotate: "40deg"}}></i>
            <p className="text-sm font-semibold text-white">MongoDB</p>
            <p className="text-white">Intermediate</p>
          </div>

          <div className="bg-sky-200 text-center p-5">
            <i class="fa-brands fa-github text-5xl"></i>
            <p className="text-sm font-semibold text-white">GitHub</p>
            <p className="text-white">Advanced</p>
          </div>

          <div className="text-center p-5">
            <img src={tailwindlogo} alt="tailwind css logo"/>
            <p className="text-sm font-semibold text-white">Tailwind</p>
            <p className="text-white">Intermediate</p>
          </div>

          <div className="bg-sky-200 text-center p-5">
            <img src={rwdlogo} alt="responsive web design"/>
            <p className="text-sm font-semibold text-white">Responsive Design</p>
            <p className="text-white">Advanced</p>
          </div>

          <div className="text-center p-5">
            <img src={figmalogo} alt="figma logo" className="h-14 w-16" />
            <p className="text-sm font-semibold text-white">Figma</p>
            <p className="text-white">Intermediate</p>
          </div>

          <div className="bg-sky-200 text-center p-5 md:col-span-2">
            <img src={apilogo} alt="api logo" className="h-14 w-16"/>
            <p className="text-sm font-semibold text-white">APIs</p>
            <p className="text-white">Intermediate</p>
          </div>

          <div className="text-center p-5">
            <img src={clilogo} alt="command line logo" className="h-14 w-16"/>
            <p className="text-sm font-semibold text-white">Command Line</p>
            <p className="text-white">Intermediate</p>
          </div>

          <div className="bg-sky-200 col-span-3  p-5 text-center md:col-span-2">
            <img src={deploymentlogo} alt="deployment logo" className="h-14 w-16"/>
            <p className="text-sm font-semibold text-white">Deployment and Hosting</p>
            <p className="text-white">Intermediate</p>
          </div>
        </div>
      </section>
    </>
  );
}

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
            <p>icon</p>
            <p>HTML5</p>
          </div>

          <div className="text-center">
            <p>icon</p>
            <p>CSS</p>
          </div>

          <div className="bg-sky-200 text-center">
            <p>icon</p>
            <p>JavaScript</p>
          </div>

          <div className="text-center">
            <p>icon</p>
            <p>React JS</p>
          </div>

          <div className="bg-sky-200 text-center">
            <p>icon</p>
            <p>Nodejs</p>
          </div>

          <div className="text-center">
            <p>icon</p>
            <p>MongoDB</p>
          </div>

          <div className="bg-sky-200 text-center">
            <p>icon</p>
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

      <section id="skills" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skill Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">HTML</h3>
            <p className="text-gray-700">Proficiency: Intermediate</p>
            <p className="text-gray-700">Description: HTML is the standard markup language for creating web pages and web applications.</p>
          </div>

          {/* Add more skill cards here */}
        </div>
      </div>
    </section>
    </>
  );
}

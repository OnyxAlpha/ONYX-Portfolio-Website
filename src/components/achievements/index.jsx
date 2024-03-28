import React, { useState, useEffect } from "react";

export default function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    fetch(`${process.env.REACT_APP_ONYX_PORFOLIO_API}/achievements`)
      .then((response) => response.json())
      .then((data) => {
        setAchievements(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <>
      <section id="achievements" className="bg-slate-500">
        <div className="text-center p-10">
          <h1 className="text-3xl">Our Achievements</h1>
        </div>
        <section
          id="Projects"
          className="w-fit pb-10 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="w-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <img
                  src={achievement.image}
                  alt="Product"
                  className="h-80 w-96 object-cover rounded-t-xl"
                />
                <div className="p-4">
                <i class="fa-solid fa-note-sticky p-4"> : </i>
                  <p>{achievement.description}</p>
                  <i class="fa-solid fa-calendar-days p-4"> : </i>  
                  <p>{achievement.date}</p>
                </div>
              </a>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

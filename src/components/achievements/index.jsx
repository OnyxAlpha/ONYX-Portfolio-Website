import React, { useState, useEffect } from "react";

export default function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    const url = new URL (`${process.env.REACT_APP_PORFOLIO_API}/administratorachievements`)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setAchievements(data.Achievements);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <>
      <section id="achievements" className="bg-slate-300">
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
                  src={`https://savefiles.org/${achievement.image}?shareable_link=163`}
                  alt="Product"
                  className="h-80 w-96 object-cover rounded-t-xl"
                />
                <div className=" font-bold p-4">
                  <p>{achievement.title}</p>
                    
                  <p>{achievement.description}</p>
                </div>
              </a>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

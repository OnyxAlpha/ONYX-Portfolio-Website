import { useEffect, useState } from "react";

export default function AdminExperiences({ sidebarToggle }) {
  const [experiences, setExperiences] = useState([]);

  const addExperiences = async (event) => {
    // setsetUserPage('achievements');
    console.log(event.target);
    event.preventDefault();
    const formData = new FormData(event.target);
    // console.log({formData});

    const data = await fetch(
      `${process.env.REACT_APP_PORTFOLIO_API}/experiences`,
      {
        method: "POST",
        body: formData,
      }
    );
    getExperiences();
    if (data.status === 201) {
      const incomingData = await data.json();
      console.log(incomingData);
    }
  };

  const getExperiences = () => {
    const url = new URL(`${process.env.REACT_APP_PORTFOLIO_API}/experiences`);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setExperiences(data.Achievements)
      });
  };

  const updateExperience = () => {
    console.log("updated experience");
  };

  const deleteExperience = () => {
    console.log("delet experience");
  };

  useEffect(() => {
    getExperiences();
  }, []);
  return (
    <>
      <div
        className={`${
          sidebarToggle ? "" : "ml-80 mr-7 sm:w-74"
        } w-98 mx-10 bg-white pt-5 rounded-lg`}
      >
        <div className="w-full">
          <h1 className="text-2xl font-medium p-5">Add New Experience</h1>
        </div>
        <hr className="bg-gray-500 h-1 mx-5" />

        <div className="p-5">
          <form
            onSubmit={addExperiences}
            className={`${sidebarToggle ? "" : "w-89"} w-full`}
          >
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title*
              </label>
              <input
                type="text"
                id="title"
                name="institutionName"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Institution Name*
              </label>
              <input
                type="text"
                id="title"
                name="institutionName"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Position*
              </label>
              <input
                type="text"
                id="title"
                name="institutionName"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Location*
              </label>
              <input
                type="text"
                id="title"
                name="location"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Start Date*
              </label>
              <input
                type="date"
                id="title"
                name="startDate"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="title"
                name="endDate"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div
        className={`${
          sidebarToggle ? "" : "ml-80"
        } w-89 text-center mx-10 pb-10`}
      >
        <h1 className="text-2xl font-medium p-5">Our Experiences</h1>
        <div
          className={`${
            sidebarToggle ? "" : "w-89"
          } w-full border rounded-lg text-left overflow-hidden  bg-white`}
        >
          <div className="flex justify-between">
            <p className="p-2 text-xl">experience title</p>
            <div className="flex gap-3 px-2">
              <i
                onClick={() => updateExperience()}
                className="fa-solid fa-pen-to-square p-2 text-xl text-violet-500 hover:text-violet-700 focus:text-violet-700"
              ></i>
              <div className="h-5 bg-gray-500 w-0.5 mt-3"></div>
              <i
                onClick={() => deleteExperience()}
                class="fa-solid fa-trash p-2 text-xl text-rose-600 hover:text-rose-700 focus:text-rose-700"
              ></i>
            </div>
          </div>
          <hr />
          <p className="text-base leading-normal overflow-hidden p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            alias ratione dolorem nobis. Rerum, laudantium minus. Ad molestias
            repudiandae quasi quo porro distinctio qui id sed ipsam culpa.
            Consectetur dolorum sint consequuntur beatae expedita facere natus
            ad eaque, quaerat animi tempora quo veritatis obcaecati a! Natus
            voluptas reprehenderit autem excepturi.
          </p>
        </div>
      </div>
    </>
  );
}

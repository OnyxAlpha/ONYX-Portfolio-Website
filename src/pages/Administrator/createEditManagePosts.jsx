export default function AdminPosts({ sidebarToggle }) {
  const addPosts = () => {
    console.log("jwbdjnedk");
  };

  return (
    <>
      <div
        className={`${
          sidebarToggle ? "" : "ml-80 mr-7 sm:w-74"
        } w-98 mx-10 bg-violet-100 rounded m-2`}
      >
        <div className="w-full">
          <h1 className="text-2xl font-medium p-5">Add New Posts</h1>
        </div>
        <hr className="text-black" />

        <div className="p-5">
          <form
            onSubmit={addPosts}
            className={`${sidebarToggle ? "" : "w-89"} w-full`}
          >
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
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
              <label htmlFor="image" className="block text-gray-700">
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="url" className="block text-gray-700">
                URL
              </label>
              <input
                type="url"
                id="url"
                name="url"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div
        className={`${
          sidebarToggle ? "" : "ml-80"
        } w-89 text-center mx-10 mb-10`}
      >
        <h1 className="text-2xl font-medium p-5">My Posts</h1>
        <div
          className={`${
            sidebarToggle ? "" : "w-89"
          } w-full border rounded-lg text-left overflow-hidden`}
        >
          <div className="flex justify-between">
            <p className="p-2 text-xl">post Name</p>
            <div>
              <i class="fa-solid fa-pen-to-square p-2 text-xl"></i>
            </div>
          </div>
          <hr />
          <p className="text-base leading-normal overflow-hidden p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias ratione dolorem nobis. Rerum, laudantium minus. Ad molestias repudiandae quasi quo porro distinctio qui id sed ipsam culpa. Consectetur dolorum sint consequuntur beatae expedita facere natus ad eaque, quaerat animi tempora quo veritatis obcaecati a! Natus voluptas reprehenderit autem excepturi.</p>
        </div>
      </div>
    </>
  );
}

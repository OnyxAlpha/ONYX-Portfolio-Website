import { useEffect, useState } from "react";

export default function AdminPosts({ sidebarToggle, setsetUserPage }) {
const [posts, getPostState] = useState([]);
const [image, setImage] = useState(null);
const [datacheck, setDataCheck] = useState(false)

const [editformData, setFormData] = useState({
  title: '',
  description: '',
  image: File,
  url: ''
});

const handleImageChange = (e) => {
  const selectedImage = e.target.files[0];
  setImage(selectedImage);
};



const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...editformData, [name]: value });
};



  const submitBlog = async (event) => {
   if(datacheck == true){
    setsetUserPage('posts');
    console.log(event.target);
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log({formData});

    const data = await fetch(`${process.env.REACT_APP_PORTFOLIO_API}/blog`,{
      method: "POST",
      body: formData, 
    });
  if (data.status === 201) {
    const incomingData = await data.json();
    console.log(incomingData);
  }
   }else{
    const data = await fetch(`${process.env.REACT_APP_PORTFOLIO_API}/blog`,{
      method: "PATCH",
      body: editformData, 
    });
      const incomingData = await data.json();
      console.log(incomingData);
   }
  };



  const getBlogs = async ()=>{
    const url = new URL (`${process.env.REACT_APP_PORTFOLIO_API}/blog`)
    fetch(url).then((res)=> res.json())
    .then((data)=>{
      console.log(data.blogs);
      getPostState(data.blogs)
      if(data.length > 0 ){
        getPostState(data)
      }
    })
  }



    


  const updatetBlog = (data) =>{
    setDataCheck(true);
    console.log({data})


  }

  const deletetBlog = () =>{
    console.log("delete experience")
  }

  
  if(!posts){
    console.log('...waiting')
  }
  
  useEffect(()=>{
      getBlogs();
  },[]);


  return (
    <>
      <div
        className={`${
          sidebarToggle ? "" : "ml-80 mr-7 sm:w-74"
        } w-98 mx-10 bg-white pt-5 rounded-lg`}
      >
        <div className="w-full">
            <p className=" font-medium px-5 text-gray-500">Blogs</p>
          <h1 className="text-2x  l font-medium p-5">Add New Blog</h1>
        </div>
        <hr className="bg-gray-500 h-1 mx-5" />

        <div className="p-5">
          <form
            onSubmit={submitBlog}
            className={`${sidebarToggle ? "" : "w-89"} w-full`}
          >
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title*
              </label>
              <input
                type="text"
                id="title"
                onChange={handleChange}
                name="title"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">
                Description*
              </label>
              <textarea
                id="description"
                name="description"
                onChange={handleChange}
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
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="url" className="block text-gray-700">
                URL*
              </label>
              <input
                type="url"
                id="url"
                name="url"
                onChange={handleChange}
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
        <h1 className="text-2xl font-medium p-5">Our blogs</h1>
        {posts.map((post)=>{
            return (
              <>
        <div
          className={`${
            sidebarToggle ? "" : "w-89"
          } w-full border rounded-lg text-left overflow-hidden mb-2 bg-white`}
        >
         
                <div className="flex justify-between">
            <p className="p-2 text-xl">{post.title}</p>
            <div className="flex gap-3 px-2">
              <i onClick={()=> updatetBlog(post)}className="fa-solid fa-pen-to-square p-2 text-xl text-violet-500 hover:text-violet-700 focus:text-violet-700"></i>
              <div className="h-5 bg-gray-500 w-0.5 mt-3"></div>
              <i onClick={()=> deletetBlog()} class="fa-solid fa-trash p-2 text-xl text-rose-600 hover:text-rose-700 focus:text-rose-700"></i>
            </div>
          </div>
          <hr />
         <div className="flex gap-5">
         <img src={`https://savefiles.org/${post.image}?shareable_link=163`} className='w-48' alt="" />
          <p className="text-base leading-normal overflow-hidden p-2">
            {post.description}
          </p>
         </div>
        </div>

              </>
            )
          })}
      </div>
    </>
  );
}

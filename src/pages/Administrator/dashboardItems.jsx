import React from 'react'

export const DashboardItems = ({sidebarToggle, setsetUserPage}) => {

const getBlogs=()=>{
  console.log('Posts Done!');
}

const getAchievements=()=>{
  console.log('Posts Done!');
}

const getExperiences=()=>{
  console.log('Posts Done!');
}

  return (
    <>
      <div
        className={`${
          sidebarToggle ? "" : "ml-80 mr-7 sm:w-74"
        } w-98 mx-10 bg-white rounded-lg`}
      > 
      </div>
      <div className={`${
          sidebarToggle ? "" : "ml-80"
        } w-98 mx-10 bg-violet-700 p-5 rounded-lg`}>
        <p className='text-lg text-white font-semibold'>My Dashboard</p>
        <hr className="bg-white-500 h-1" />
      </div>

      <div
        className={`${
          sidebarToggle ? "" : "ml-80"
        } w-89 text-center mx-10 pb-10`}
      >
        <div className='flex justify-between'>
        <h1 className="text-2xl font-medium p-5">My posts</h1>
        <p onClick={()=> setsetUserPage('posts')} className='text-lg text-gray-500 hover:text-gray-700 focus:text-gray-700 font-normal py-5 '>manage posts <i className="fa-solid fa-arrow-right pl-2"></i></p>
        </div>
        <div
          className={`${
            sidebarToggle ? "" : "w-89"
          } w-full border rounded-lg text-left overflow-hidden  bg-white`}
        >
          <div className="flex justify-between">
            <p className="p-2 text-xl">post Name</p>
          </div>
          <hr />
          <p className="text-base leading-normal overflow-hidden p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias ratione dolorem nobis. Rerum, laudantium minus. Ad molestias repudiandae quasi quo porro distinctio qui id sed ipsam culpa. Consectetur dolorum sint consequuntur beatae expedita facere natus ad eaque, quaerat animi tempora quo veritatis obcaecati a! Natus voluptas reprehenderit autem excepturi.</p>
        </div>
      </div>

      <div
        className={`${
          sidebarToggle ? "" : "ml-80"
        } w-89  mx-10 pb-10`}
      >
        <div className='flex justify-between'>
        <h1 className="text-2xl font-medium p-5">My Achievements</h1>
        <p onClick={()=> setsetUserPage('achievements')} className='text-lg text-gray-500 hover:text-gray-700 focus:text-gray-700 font-normal py-5 '>manage achievemnets <i className="fa-solid fa-arrow-right pl-2"></i></p>
        </div>
        <div
          className={`${
            sidebarToggle ? "" : "w-89"
          } w-full border rounded-lg text-left overflow-hidden  bg-white`}
        >
          <div className="flex justify-between">
            <p className="p-2 text-xl">achievement Name</p>
          </div>
          <hr />
          <p className="text-base leading-normal overflow-hidden p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias ratione dolorem nobis. Rerum, laudantium minus. Ad molestias repudiandae quasi quo porro distinctio qui id sed ipsam culpa. Consectetur dolorum sint consequuntur beatae expedita facere natus ad eaque, quaerat animi tempora quo veritatis obcaecati a! Natus voluptas reprehenderit autem excepturi.</p>
        </div>
      </div>

      <div
        className={`${
          sidebarToggle ? "" : "ml-80"
        } w-89 text-center mx-10 pb-10`}
      >
        <div className='flex justify-between'>
        <h1 className="text-2xl font-medium p-5">My Experiences</h1>
        <p onClick={()=> setsetUserPage('experiences')} className='text-lg text-gray-500 hover:text-gray-700 focus:text-gray-700 font-normal py-5 '>manage Experiences <i className="fa-solid fa-arrow-right pl-2"></i></p>
        </div>
        <div
          className={`${
            sidebarToggle ? "" : "w-89"
          } w-full border rounded-lg text-left overflow-hidden  bg-white`}
        >
          <div className="flex justify-between">
            <p className="p-2 text-xl">experience Name</p>
          </div>
          <hr />
          <p className="text-base leading-normal overflow-hidden p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias ratione dolorem nobis. Rerum, laudantium minus. Ad molestias repudiandae quasi quo porro distinctio qui id sed ipsam culpa. Consectetur dolorum sint consequuntur beatae expedita facere natus ad eaque, quaerat animi tempora quo veritatis obcaecati a! Natus voluptas reprehenderit autem excepturi.</p>
        </div>
      </div>

      <div className={`${
          sidebarToggle ? "" : "ml-80"
        } w-89 text-center mx-10 `}>
          <p className='text-gray-500'>Onyx 2024&#174;</p>
      </div>
    </>
  )
}

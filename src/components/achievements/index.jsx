import React from "react";

export default function Achievements() {
  
    return (
        <>
         <section className="bg-gray-200">
         <div class=" text-center p-10">
            <h1 class="text-3xl">Achievements</h1>
          </div>
          <section
            id="Projects"
            class="w-fit pb-10 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
          >
            <div class="w-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1610122748280-d0ae76b10750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product"
                  class="h-80 w-96 object-cover rounded-t-xl"
                />
                <div>
                <i class="fa-solid fa-note-sticky p-4"> : </i> <br/>
                <i class="fa-solid fa-calendar-days p-4"> : </i>  
                </div>
                
              </a>
            </div>
            <div class="w-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1610122748280-d0ae76b10750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product"
                  class="h-80 w-96 object-cover rounded-t-xl"
                />
                <div>
                <i class="fa-solid fa-note-sticky p-4"> : </i> <br/>
                <i class="fa-solid fa-calendar-days p-4"> : </i>  
                </div>
                
              </a>
            </div>
            <div class="w-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1610122748280-d0ae76b10750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product"
                  class="h-80 w-96 object-cover rounded-t-xl"
                />
                <div>
                <i class="fa-solid fa-note-sticky p-4"> : </i> <br/>
                <i class="fa-solid fa-calendar-days p-4"> : </i>  
                </div>
                
              </a>
            </div>
          </section>
         </section>
         
        </>
      );
}

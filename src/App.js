import React from "react";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Achievements from "./pages/achievements";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Experiences from "./pages/experiences";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import AdminLogin from "./pages/Administrator/adminLogin";
import AdminAchievements from "./pages/Administrator/achievements";
import AdminDashboard from "./pages/Administrator/admindashboard";
import AdminPosts from "./pages/Administrator/createEditManagePosts";
import AdminExperiences from "./pages/Administrator/experiences";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:'/', element:<Homepage/>},
  {path:'/about', element:<About/>},
  {path:'/achievements', element:<Achievements/>},
  {path:'/blog', element:<Blog/>},
  {path:'/contact', element:<Contact/>},
  {path:'/experiences', element:<Experiences/>},
  {path:'/skills', element:<Skills/>},
  {path:'/administratorlogin', element:<AdminLogin/>},
  {path:'/administratorachievements', element:<AdminAchievements/>},
  {path:'/administratordashboard', element:<AdminDashboard/>},
  {path:'/administratorposts', element:<AdminPosts/>},
  {path:'/administratorexperiences', element:<AdminExperiences/>},
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}


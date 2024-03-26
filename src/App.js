import React from "react";
import Homepage from "./pages/homepage";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blog-details";
import Contact from "./pages/contact";
import Experiences from "./pages/experiences";
import Projects from "./pages/projects";
import AdminLogin from "./pages/Administrator/adminLogin";
import AdminSignup from "./pages/Administrator/adminSignup";
import AdminAchievements from "./pages/Administrator/achievements";
import AdminDashboard from "./pages/Administrator/admindashboard";
import AdminPosts from "./pages/Administrator/createEditManagePosts";
import AdminExperiences from "./pages/Administrator/experiences";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blogdetail", element: <BlogDetail /> },
  { path: "/contact", element: <Contact /> },
  { path: "/experiences", element: <Experiences /> },
  { path: "/projects", element: <Projects/> },
  { path: "/administratorlogin", element: <AdminLogin /> },
  { path: "/administratorsignup", element: <AdminSignup /> },
  { path: "/administratorachievements", element: <AdminAchievements /> },
  { path: "/administratordashboard", element: <AdminDashboard /> },
  { path: "/administratorposts", element: <AdminPosts /> },
  { path: "/administratorexperiences", element: <AdminExperiences /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

import React from "react";
import Homepage from "./pages/homepage";
import BlogDetail from "./pages/blog-details";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import AdminLogin from "./pages/Administrator/adminLogin";
import AdminSignup from "./pages/Administrator/adminSignup";
import AdminAchievements from "./pages/Administrator/achievements";
import AdminDashboard from "./pages/Administrator/admindashboard";
import AdminPosts from "./pages/Administrator/createEditManagePosts";
import AdminExperiences from "./pages/Administrator/experiences";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/blogdetail", element: <BlogDetail /> },
  { path: "/contact", element: <Contact /> },
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

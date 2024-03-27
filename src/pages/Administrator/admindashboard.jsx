import { useState } from "react";
import { Navbar } from "../../components/admin/navbar";
import { Sidebar } from "../../components/admin/sidenav";
import AdminExperiences from "./experiences";
import AdminAchievements from "./achievements";
import AdminPosts from "./createEditManagePosts";
import { DashboardItems } from "./dashboardItems";

export default function AdminDashboard() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [userPage, setsetUserPage] = useState("dashboard");

  return (
    <>
      <div className="flex">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setsetUserPage={setsetUserPage}
        />
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>

      <div>
        {userPage === "dashboard" && <DashboardItems sidebarToggle={sidebarToggle} />}
        {userPage === "posts" &&  <AdminPosts sidebarToggle={sidebarToggle} />}
        {userPage === "achievements" && <p> <AdminAchievements /> </p>}
        {userPage === "experiences" && <p> <AdminExperiences /> </p>}
      </div>
    </>
  );
}

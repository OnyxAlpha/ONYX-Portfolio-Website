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
      <div className="flex bg-violet-100">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setsetUserPage={setsetUserPage}
        />
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>

      <div className="bg-violet-100">
        {userPage === "dashboard" && <DashboardItems sidebarToggle={sidebarToggle} setsetUserPage={setsetUserPage} />}
        {userPage === "posts" &&  <AdminPosts sidebarToggle={sidebarToggle} setsetUserPage={setsetUserPage} />}
        {userPage === "achievements" && <p> <AdminAchievements sidebarToggle={sidebarToggle} /> </p>}
        {userPage === "experiences" && <p> <AdminExperiences sidebarToggle={sidebarToggle} /> </p>}
      </div>
    </>
  );
}

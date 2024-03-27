import { useState } from "react";
import { Navbar } from "../../components/admin/navbar";
import { Sidebar } from "../../components/admin/sidenav";

export default function AdminDashboard() {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    return (
        <>
        <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle}/>
        <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
        </div>
        </>
    );
};
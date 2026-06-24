"use client";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64"> {/* reserve sidebar width */}
        <Topbar />
        <main className="p-6 mt-16">{children}</main>
      </div>
    </div>
  );
}

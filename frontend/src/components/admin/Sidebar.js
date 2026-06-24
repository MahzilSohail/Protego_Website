"use client";
import Image from "next/image";
import Link from "next/link";
import { FiHome, FiBox, FiShoppingCart, FiUsers, FiSettings, FiUser, FiBell, FiBarChart2, FiPercent } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-6">
      
      {/* LOGO + NAME */}
      <div className="flex items-center gap-3 mb-5">
        <Image
          src="/logo.jpg"
          alt="Protego Logo"
          width={60}
          height={60}
          className="rounded"
        />
        <div>
          <h2 className="text-xl font-bold">Protego</h2>
          <p className="text-xs text-gray-400">Admin Panel</p>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-3">
        <Link href="/admin/dashboard" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <FiHome /> Dashboard
        </Link>

        <Link href="/admin/products" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <FiBox /> Products
        </Link>

        <Link href="/admin/orders" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <FiShoppingCart /> Orders
        </Link>

        <Link href="/admin/users" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <FiUsers /> Customers
        </Link>

        <Link href="/admin/analytics" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <FiBarChart2 /> Analytics
        </Link>

        <Link href="/admin/coupons" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <FiPercent /> Coupons
        </Link>

        <Link href="/admin/notifications" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <FiBell /> Notifications
        </Link>

        <Link href="/admin/profile" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <FiUser /> Profile
        </Link>

        <Link href="/admin/settings" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <FiSettings /> Settings
        </Link>
      </nav>
    </aside>
  );
}

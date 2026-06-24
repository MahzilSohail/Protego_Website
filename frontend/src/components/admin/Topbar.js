"use client";
import { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";

export default function Topbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Send value to parent page for filtering
    if (onSearch) {
      onSearch(value.toLowerCase());
    }
  };

  return (
    <header className="fixed left-64 right-0 top-0 h-16 bg-white border-b flex items-center px-6 z-10">
      <div className="flex items-center gap-3">
        <FiSearch className="text-gray-500" />
        <input
          placeholder="Search orders, products..."
          value={query}
          onChange={handleSearch}
          className="border rounded px-3 py-2 w-64 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <FiBell className="text-gray-600" />
        <span className="text-sm text-gray-700">Admin</span>
      </div>
    </header>
  );
}

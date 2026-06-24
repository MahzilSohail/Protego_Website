"use client";
import Image from "next/image";

const sample = [
  { id: 1, title: "Protego Pro", price: 35000, image: "/protegoring.jpg" },
  { id: 2, title: "Protego Lite", price: 29000, image: "/protegoring.jpg" },
];

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {sample.map((p) => (
        <div key={p.id} className="bg-white rounded-lg shadow p-4">
          <img src={p.image} alt={p.title} className="w-full h-44 object-contain" />
          <h4 className="mt-3 font-semibold">{p.title}</h4>
          <p className="text-gray-600">Rs. {p.price}</p>
          <div className="flex gap-2 mt-3">
            <button className="px-3 py-1 bg-blue-900 text-white rounded">Edit</button>
            <button className="px-3 py-1 border rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

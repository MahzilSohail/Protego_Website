"use client";
import React from "react";
import { IoAddOutline } from "react-icons/io5";
import Link from "next/link";
import { model } from "@/pro";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Productcard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-36">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Pro-Model Rings
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {model.map((model) => (
          <div
            key={model.id}
            className="relative w-80 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all"
          >
            {/* Image Section */}
            <div className="flex justify-center items-center p-6 relative">
              <Link href={"/Detailpro/"}>
              <img
                src="/protegoring.jpg"
                className="w-48 h-48 object-contain"
              />
              </Link>
              <div className="absolute bottom-1 right-2 z-50 flex items-center justify-center w-14 h-14 rounded-full transform -translate-x-1.5 bg-blue-50 px-6 py-2 shadow-md">
                <IoAddOutline className="scale-[3] text-[150px]" />
              </div>
            </div>

            {/* Bottom Info Section */}
            <div className="flex flex-col items-center p-5 bg-gradient-to-b from-white to-blue-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {model.name}
              </h2>
              <p className="text-gray-700 font-medium mb-3">{model.price}</p>

              <div className="w-8 h-8 m-0.5 border-2 border-gray-400 flex items-center justify-center cursor-pointer transition-transform">
                <div
                  className="w-6 h-6"
                  style={{ backgroundColor: model.color }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productcard;

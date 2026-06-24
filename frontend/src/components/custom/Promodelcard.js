"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProModelHero() {
  return (
    <>
      {pro.map((item) => (
        <SingleHero key={item.id} item={item} />
      ))}
    </>
  );
}

function SingleHero({ item }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % item.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [item.images.length]);

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${item.color1} 0%, ${item.color2} 60%)`,
      }}
    >
      {/* Heading */}
      <h1
        className=" absolute top-[180px] z-30 text-white text-5xl font-bold font-serif text-center leading-[0.9]"
        //
      >
        {item.name}
      </h1>

      {/* Slider */}
      <div className="relative z-20 w-[240px] md:w-[300px] lg:w-[340px] h-[240px] md:h-[300px] lg:h-[340px] flex items-center justify-center">
        <img
          src={item.images[index]}
          alt={item.name}
          className="object-contain w-full h-full transition-all duration-700"
        />
      </div>

      {/* Shop Now button */}
      <Link
        href={`/Detailpro/`}
        className="absolute z-40 bg-white text-gray-900 rounded-full px-7 py-3 text-base font-medium shadow-md"
        style={{ bottom: "24%", transform: "translateY(50%)" }}
      >
        Shop Now
      </Link>

      {/* Price pill */}
      <div className="absolute z-40 bottom-12 right-14">
        <span className="inline-block bg-white text-gray-900 rounded-full px-6 py-2 text-base font-medium shadow-md">
          {item.price}
        </span>
      </div>
    </div>
  );
}

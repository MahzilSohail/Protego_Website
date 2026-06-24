"use client";
import React, { useRef, useState, useEffect } from "react";
import { IoAddOutline } from "react-icons/io5";
import Link from "next/link";
import {
  motion,
  animate,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Productcardlite() {
  const { addToCart } = useCart();
  const scrollRef = useRef(null);
  const [lite, setLite] = useState([]);

  // Fetch Lite models from backend
  useEffect(() => {
    const fetchLite = async () => {
      try {
        const res = await fetch("http://localhost:3001/lite"); // backend endpoint
        const data = await res.json();
        setLite(data);
      } catch (err) {
        console.error("API Error:", err);
      }
    };
    fetchLite();
  }, []);

  // Track horizontal scroll progress
  const { scrollXProgress } = useScroll({ container: scrollRef });

  // Apply fade-mask animation
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-fuchsia-100 to-indigo-100 flex flex-col items-center px-28 py-32 overflow-hidden">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center uppercase tracking-wider">
        Lite-Model Rings
      </h1>

      {/* Progress Indicator */}
      <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      {/* Horizontal Scroll Area With Arrows */}
      <div className="relative w-full">

        {/* Left Arrow */}
        <button
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
            }
          }}
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-40
      bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center
      hover:bg-gray-100 hover:shadow-xl transition"
        >
          <span className="text-4xl text-gray-700">‹</span>
        </button>

        {/* Scroll container */}
        <motion.div
          ref={scrollRef}
          style={{ maskImage }}
          className="flex gap-10 pr-10 snap-x snap-mandatory overflow-x-auto no-scrollbar w-full"
        >
          {lite.map((item) => (
            <div
              key={item.id}
              className="snap-center min-w-[30vw] max-w-[40vw] bg-white rounded-3xl shadow-xl border border-gray-200 transition-transform hover:scale-[1.02]"
            >
              <div className="flex justify-center items-center p-4 relative">

                <Link href={`/Detailite/`}>
                  <div
                    className={`w-60 h-60 rounded-xl bg-center bg-cover 
                ${item.id === 1 ? "anim1" : ""}
                ${item.id === 2 ? "anim2" : ""}
                ${item.id === 3 ? "anim3" : ""}
                ${item.id === 4 ? "anim4" : ""}
                ${item.id === 5 ? "anim5" : ""}
              `}
                  />
                </Link>

                <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    <IoAddOutline className="text-blue-700 text-3xl" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center p-6 bg-gradient-to-b from-white to-blue-100">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 text-lg font-medium">{item.price}</p>

                <div
                  className="w-8 h-8 mt-3 border-2 border-gray-400"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <button
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
            }
          }}
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-40
      bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center
      hover:bg-gray-100 hover:shadow-xl transition"
        >
          <span className="text-4xl text-gray-700">›</span>
        </button>
      </div>

      <ScrollStyles />
    </div>
  );
}

// Mask animation hook
const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

function ScrollStyles() {
  return (
    <style>{`
      #progress {
        position: absolute;
        top: 5rem;
        left: 2rem;
        transform: rotate(-90deg);
      }
      #progress .bg {
        stroke: #d4d4d4;
        stroke-width: 10%;
        fill: none;
      }
      #progress .indicator {
        stroke: #2563eb;
        stroke-width: 10%;
        fill: none;
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }


      /* --- Image Animations For 5 Divs --- */
  .anim1 {
    animation: slide1 10s linear infinite;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .anim2 {
    animation: slide2 10s linear  infinite;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .anim3 {
    animation: slide3 10s linear infinite;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .anim4 {
    animation: slide4 10s linear infinite;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .anim5 {
    animation: slide5 10s linear infinite;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  @keyframes slide1 {
    0% { background-image: url("/image/liteblue.jpg");opacity: 0; }
    10% { background-image: url("/image/liteblue2.jpg");opacity: 1; }
    90% { background-image: url("/image/liteblue3.jpg");opacity: 1; }
    100% { background-image: url("/image/liteblue4.jpg");opacity: 0; }
  }

  @keyframes slide2 {
    0% { background-image: url("/image/litegreen.jpg"); }
    33% { background-image: url("/image/litegreen2.jpg"); }
    66% { background-image: url("/image/litegreen3.jpg"); }
    100% { background-image: url("/image/litegreen4.jpg"); }
  }

  @keyframes slide3 {
    0% { background-image: url("/image/litepink.jpg"); }
    33% { background-image: url("/image/litepink2.jpg"); }
    66% { background-image: url("/image/litepink3.jpg"); }
    100% { background-image: url("/image/litepink4.jpg"); }
  }

  @keyframes slide4 {
    0% { background-image: url("/image/litewhite.jpg"); }
    33% { background-image: url("/image/litewhite2.jpg"); }
    66% { background-image: url("/image/litewhite3.jpg"); }
    100% { background-image: url("/image/litewhite4.jpg"); }
  }

  @keyframes slide5 {
    0% { background-image: url("/image/litebrown.jpg"); }
    33% { background-image: url("/image/litebrown2.jpg"); }
    66% { background-image: url("/image/litebrown3.jpg"); }
    100% { background-image: url("/image/litebrown4.jpg"); }
  }
    `}</style>
  );
}

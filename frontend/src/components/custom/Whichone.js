"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function ProtegoComparison() {
  const [showTable, setShowTable] = useState(false);
  const [slide, setSlide] = useState(0);
  const [selected, setSelected] = useState("pro");
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/slides")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);

  // const slides = [
  //   {
  //     id: "pro",
  //     title: "Pro Model",
  //     tag: "Recommended for Travelers",
  //     img: "/protegobgr.png",
  //   },
  //   {
  //     id: "lite",
  //     title: "Lite Model",
  //     tag: "Great for Daily Use",
  //     img: "/image/litepinkbgr.png",
  //   },
  //   {
  //     id: "student",
  //     title: "Student Model",
  //     tag: "Best for Students",
  //     img: "/image/stdwhitebgr.png",
  //   },
  // ];

  const models = {
    pro: [
      "SOS Trigger",
      "Real-Time Location Sharing",
      "Live Audio Recording",
      "Video Auto Recording",
      "Anti-Theft Shock",
      "AI Sound Detection",
      "Voice-Command SOS",
      "False Alert Prevention",
      "Solar/Kinetic Charging",
      "Geo-fencing Alerts",
      "Safe Route Suggestion",
      "Haptic Communication",
      "Guardian Integration",
      "Trusted Ride Mode",
      "App Support",
    ],
    lite: [
      "SOS Trigger",
      "Real-Time Location Sharing",
      "Live Audio Recording",
      "AI Sound Detection",
      "Voice-Command SOS",
      "False Alert Prevention",
      "Solar/Kinetic Charging",
      "Geo-fencing Alerts",
      "Safe Route Suggestion",
      "Haptic Communication",
      "Guardian Integration",
      "Trusted Ride Mode",
      "App Support",
    ],
    student: [
      "SOS Trigger",
      "Real-Time Location Sharing",
      "AI Sound Detection",
      "Voice-Command SOS",
      "False Alert Prevention",
      "Solar/Kinetic Charging",
      "Safe Route Suggestion",
      "Guardian Integration",
      "Trusted Ride Mode",
      "App Support",
    ],
  };

  const allFeatures = [
    ...new Set([...models.pro, ...models.lite, ...models.student]),
  ];

  const isIncluded = (m, f) => models[m].includes(f);

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mb-6">
        Which one is best to use?
      </h2>

      {/* Slider */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-sm bg-gray-100 mb-12">
        <div
          className="flex transition-all duration-500"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 p-10 text-center"
            >
              <div className="text-lg font-semibold mb-2">{slide.title}</div>
              <p className="text-sm text-gray-600 mb-4">{slide.tag}</p>
              <div className="h-48 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <img className="w-28 h-44" src={slide.img} />
              </div>
            </div>
          ))}
        </div>
        {/* Slider Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={() =>
              setSlide((slide - 1 + slides.length) % slides.length)
            }
            className="px-3 py-1 bg-white shadow rounded"
          >
            ‹
          </button>
          <button
            onClick={() => setSlide((slide + 1) % slides.length)}
            className="px-3 py-1 bg-white shadow rounded"
          >
            ›
          </button>
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setShowTable(!showTable)}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          {showTable ? "Hide Comparison" : "Show Comparison"}
        </button>
      </div>

      {/* Comparison Table */}
      {showTable && (
        <div className="transition-all duration-500 ease-in-out">
          {/* Switcher */}
          <div className="flex justify-center gap-3 mb-8">
            {["pro", "lite", "student"].map((m) => (
              <button
                key={m}
                onClick={() => setSelected(m)}
                className={`px-5 py-2 rounded-md border text-sm transition
                ${
                  selected === m
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {m.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Matrix */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow">
            <div className="grid grid-cols-4 bg-gray-50">
              <div className="p-4 font-medium">Features</div>
              <div className="p-4 font-medium text-center relative">
                Pro
                <span className="absolute top-2 right-2 text-xs bg-black text-white px-2 py-1 rounded">
                  Recommended
                </span>
              </div>
              <div className="p-4 font-medium text-center">Lite</div>
              <div className="p-4 font-medium text-center">Student</div>
            </div>

            {allFeatures.map((feature, idx) => (
              <div
                key={feature}
                className={`grid grid-cols-4 py-3 px-4 text-sm
                ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              `}
              >
                <div className="font-medium">{feature}</div>

                {["pro", "lite", "student"].map((m) => (
                  <div
                    key={m}
                    className={`text-center ${
                      selected === m && isIncluded(m, feature)
                        ? "bg-black text-white rounded-md mx-3 py-1"
                        : ""
                    }`}
                  >
                    {isIncluded(m, feature) ? "●" : ""}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Suggestion Text */}
          <p className="text-center mt-6 text-gray-600 text-sm">
            Tip: Select a model above to highlight its strengths.
          </p>
        </div>
      )}

      {/* Why choose section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-center mb-6">
          Why choose each model?
        </h3>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h4 className="font-semibold mb-2">Pro Model</h4>
            <p className="text-gray-600 text-sm">
              Best for travelers, working women and outdoor users. Offers full
              features including video recording and anti-theft.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h4 className="font-semibold mb-2">Lite Model</h4>
            <p className="text-gray-600 text-sm">
              Great balance of features and battery. Ideal for regular daily use
              and moderate safety needs.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h4 className="font-semibold mb-2">Student Model</h4>
            <p className="text-gray-600 text-sm">
              Best for students and first-time users. Very lightweight and
              covers all essential safety features.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

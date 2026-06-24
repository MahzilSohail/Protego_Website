"use client";
import React, { useState, useEffect } from "react";
import { GoAlertFill } from "react-icons/go";
import { TbDeviceMobilePin } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";
import { RiMobileDownloadLine } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { motion } from "framer-motion";
// const appfeatures = [
//   {
//     id: "emergency",
//     title: "Emergency Alert",
//     desc:
//       "Instant SOS that notifies guardians and emergency services with one tap. Sends location and live status.",
//     icon: <GoAlertFill />,
//   },
//   {
//     id: "geofencing",
//     title: "Geo-fencing Alerts",
//     desc:
//       "Define safe zones. Get automatic alerts when the device exits a protected area.",
//     icon: <TbDeviceMobilePin />,
//   },
//   {
//     id: "saferoute",
//     title: "Safe Route Suggestion",
//     desc:
//       "App suggests safer routes based on traffic, past incidents, and preferred paths.",
//     icon: <AiOutlineSafety />,
//   },
//   {
//     id: "haptic",
//     title: "Haptic Communication",
//     desc:
//       "Discrete vibrations for silent alerts. 3-vibration pattern means 'guardian en route'.",
//     icon: <RiMobileDownloadLine />,
//   },
//   {
//     id: "trustedride",
//     title: "Trusted Ride Mode",
//     desc:
//       "Detects deviations from the intended route and alerts trusted contacts immediately.",
//     icon: <FaCar />,
//   },
// ];

const icons = {
  GoAlertFill: <GoAlertFill />,
  TbDeviceMobilePin: <TbDeviceMobilePin />,
  AiOutlineSafety: <AiOutlineSafety />,
  RiMobileDownloadLine: <RiMobileDownloadLine />,
  FaCar: <FaCar />,
};

export default function ProtegoFeatures() {
  const [appfeatures, setappfeatures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/appfeatures")
      .then((res) => res.json())
      .then((data) => setappfeatures(data))
      .catch((err) => console.log("API Error:", err));
  }, []);

  return (
    <section
      className="w-full py-16"
      aria-labelledby="protego-features-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="protego-features-title"
              className="text-4xl font-bold sm:text-5xl text-slate-900 leading-tight"
            >
              Protego Smart App Features
            </h2>

            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Real-time protection features built for everyday use. From one-tap
              alerts to trusted-ride monitoring, Protego keeps guardians informed.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {appfeatures.map((f) => (
                <article
                  key={f.id}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center border border-slate-100">
                    <div className="text-4xl text-blue-900 w-10 h-10">
                      {icons[f.icon]}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {f.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>

          </div>

          {/* Phone Mockup */}
          <div className="flex items-center justify-center">
            <motion.div
              className="bg-gradient-to-b from-white via-slate-50 to-slate-100 relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/image/mockup.webp"
                alt="Protego app mockup"
                className="w-full h-auto rounded-2xl shadow-2xl border border-slate-100"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
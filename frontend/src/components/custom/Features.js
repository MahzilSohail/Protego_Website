"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";

export default function ProtegoFeatures() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch features from backend
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await fetch("http://localhost:3001/features"); // backend URL
        if (!res.ok) throw new Error("Failed to fetch features");
        const data = await res.json();
        setFeatures(data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchFeatures();
  }, []);

  // Function to dynamically get icon component
  const getIcon = (iconName) => {
    const IconComponent = FaIcons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-blue-900 text-xl">
        Loading features...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        {error}
      </div>
    );

  return (
    <motion.div
      className="min-h-screen text-blue-900 flex flex-col items-center py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title Section */}
      <h1 className="text-4xl md:text-5xl text-black font-bold mb-4 text-center">
        Protego Smart Ring Features
      </h1>
      <p className="text-center text-black mb-12 max-w-2xl text-lg">
        Discover how Protego keeps you safe with advanced smart technology, instant alerts, and seamless app integration — all designed to protect you effortlessly.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all"
          >
            <div className="text-4xl text-blue-800 mb-4">
              {getIcon(feature.icon)}
            </div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-blue-800 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer Text */}
      <motion.div
        className="mt-16 text-center text-blue-800 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="text-black text-lg font-medium">
          Experience <span className="font-bold text-blue-900">Protego</span> — your invisible guardian for every step you take.
        </p>
      </motion.div>
    </motion.div>
  );
}

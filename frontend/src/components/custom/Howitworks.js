"use client";
import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
          How it works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          PROTEGO keeps you connected, aware and protected without asking you to change
          your routine. Here is a simple walkthrough of how the experience flows from the
          moment you set it up.
        </p>

        <motion.div className="grid md:grid-cols-3 gap-10 mt-10"
        initial={{ opacity: 0, y: 50 }}           
      whileInView={{ opacity: 1, y: 0 }}         
      viewport={{ once: false, amount: 0.4 }}    
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
          <div className="flex flex-col items-center">
            <div className="bg-white shadow-sm rounded-xl p-6 w-full h-full">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Step 1: Pair your device
              </h3>
              <p className="text-gray-600">
                Connect the ring to the PROTEGO mobile app. The app guides you through
                a quick setup so everything syncs automatically.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white shadow-sm rounded-xl p-6 w-full h-full">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Step 2: Add guardians
              </h3>
              <p className="text-gray-600">
                Select trusted contacts who will receive your alerts. You control what
                they see and when they are notified.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white shadow-sm rounded-xl p-6 w-full h-full">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Step 3: Use it anytime
              </h3>
              <p className="text-gray-600">
                With one tap, the system sends alerts, your location and route details,
                letting your guardians respond quickly when you need them.
              </p>
            </div>
          </div>
        </motion.div>

        <p className="text-gray-700 mt-16 max-w-3xl mx-auto">
          Once set up, PROTEGO runs quietly in the background. Whether you are commuting,
          traveling, or simply moving around your city, it keeps your circle informed and
          aware without interrupting your day. The goal is simple: support that feels
          natural, fast and reliable when it matters.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;

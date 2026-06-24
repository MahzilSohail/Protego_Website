"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaShieldAlt,
  FaHandsHelping,
  FaLightbulb,
  FaBullseye,
} from "react-icons/fa";
import Link from "next/link";

const Section = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

 function About() {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Protego
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A revolutionary smart ring designed to protect, empower, and connect you — wherever you go.
        </motion.p>
        <img
          src="/protegobgr.png"
          alt="Protego Smart Ring"
          className="mt-12 w-40 rounded-full shadow-2xl"
        />
      </section>

      {/* Our Story */}
      <Section>
        <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/team2.jpg"
              alt="Protego team"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Protego was born from a simple belief — safety should never be an afterthought.  
              Our team of innovators and designers in Lahore envisioned a piece of wearable tech  
              that seamlessly fits into your lifestyle while keeping you safe and connected.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              What began as a small university project has evolved into a global initiative empowering people worldwide.  
              Protego’s mission is to build trust through design, technology, and purpose.
            </p>
          </div>
        </section>
      </Section>

      {/* Vision & Values */}
      <Section>
        <section className="bg-gray-50 py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-10">
            Our Vision and Values
          </h2>
          <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: <FaBullseye className="text-blue-900 text-4xl mx-auto mb-3" />,
                title: "Precision",
                text: "Every Protego ring is engineered with care, precision sensors, and advanced materials.",
              },
              {
                icon: <FaLightbulb className="text-blue-900 text-4xl mx-auto mb-3" />,
                title: "Innovation",
                text: "We combine AI, IoT, and compact design to create meaningful, protective technology.",
              },
              {
                icon: <FaHandsHelping className="text-blue-900 text-4xl mx-auto mb-3" />,
                title: "Community",
                text: "We work closely with our users, listening and improving with every version released.",
              },
              {
                icon: <FaShieldAlt className="text-blue-900 text-4xl mx-auto mb-3" />,
                title: "Protection",
                text: "Protego ensures safety at a touch — your silent ally in uncertain moments.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </Section>

      {/* Timeline / Journey */}
      <Section>
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-blue-900 mb-12">
            Our Journey
          </h2>

          <div className="space-y-20">
            {[
              {
                year: "2025",
                title: "The Idea Was Born",
                text: "During a campus innovation fair, our founders conceptualized Protego to address real-world personal safety challenges.",
                img: "/idea.png",
              },
              {
                year: "2025",
                title: "Prototype Launch",
                text: "After months of R&D, our first prototype, a voice-activated smart ring successfully responded to emergency triggers.",
                img: "/testing.jpg",
              },
              {
                year: "2026",
                title: "The First Global Edition",
                text: "We launched the global version of Protego, integrating AI-based sound detection, live GPS, and SOS alerts.",
                img: "/production.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full md:w-1/2 rounded-xl shadow-xl"
                />
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-blue-900">
                    {item.year} – {item.title}
                  </h3>
                  <p className="text-gray-700 mt-3 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </Section>

      {/* Mission Section */}
      <Section>
        <section className="relative bg-blue-900 text-white py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-8">
              To redefine wearable safety through intelligent design and human-centered innovation.  
              Protego isn’t just a product — it’s a promise to protect lives and empower confidence in every moment.
            </p>
            <Link href={"/"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-white text-blue-900 px-8 py-3 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Explore Our Ring
            </motion.button>
            </Link>
          </div>
        </section>
      </Section>

      {/* Closing CTA */}
      <Section>
        <section className="bg-gray-50 py-20 text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">
            Join the Protego Movement
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed mb-8">
            Become part of our growing community of innovators, creators, and everyday heroes.  
            Together, we’re redefining what it means to stay safe and stay connected.
          </p>
          <div className="flex mx-28 gap-12">
          <img
            src="/protegogroup.jpg"
            alt="Protego community"
            className="mx-auto  w-2/3 md:w-1/2 rounded-xl shadow-lg"
          />
          <img
            src="/protegocommunity.jpg"
            alt="Protego community"
            className="mx-auto  w-2/3 md:w-1/2 rounded-xl shadow-lg"
          />
          </div>
        </section>
      </Section>
    </div>
  );
}


export default About;
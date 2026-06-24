"use client";
// import React from "react";
import React, { useState } from "react";

import Footer from '@/components/custom/Footer'
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import WhatsAppButton from "@/components/custom/Whatsappbtn";
import Navbar from "@/components/custom/Navbar";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !message) {
      alert("Please fill all fields before submitting.");
      return;
    }

    // If all fields are filled, send the data (dummy success message for now)
    alert("Your message has been sent successfully.");

    // After sending, clear fields
    setFullName("");
    setEmail("");
    setMessage("");
  };



  return (
    <div>
    <Navbar/>
      <WhatsAppButton />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-5">
        {/* Heading Section */}
        <div className="text-center pt-20 pb-10 max-w-2xl mb-10">
          <h1 className="text-3xl font-semibold text-blue-900 mb-3">
            Get In Touch For Enquires & Offers
          </h1>
          <p className="text-gray-700">
            Have questions or feedback? <span className="font-medium text-blue-900">Protego</span> is here to help!
            Contact us using the form below, and our team will get back to you soon.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-md font-medium hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Subscription Section */}
        <div className="w-full max-w-md mt-10 text-center">
          <p className="text-gray-700 mb-3 font-medium">
            Subscribe for exclusive offers and updates
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow border border-gray-300 rounded-l-md p-2 outline-none focus:ring-2 focus:ring-blue-800"
            />
            <button className="bg-blue-900 text-white px-4 rounded-r-md hover:bg-blue-800 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center text-gray-700">
          <p className="flex items-center justify-center gap-2 mb-2">
            <FaEnvelope className="text-blue-900" /> wecare@protego.com
          </p>
          <p className="flex items-center justify-center gap-2 mb-2">
            <FaPhoneAlt className="text-blue-900" /> +92 323 8451415
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-blue-900" /> 123 Mall Road, Lahore, Pakistan
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-blue-900 text-2xl">
          <a href="#" className="hover:text-blue-700"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-700"><FaTiktok /></a>
          <a href="#" className="hover:text-blue-700"><FaFacebook /></a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;

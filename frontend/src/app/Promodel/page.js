"use client";
import Footer from "@/components/custom/Footer";
import Whatsappbutton from "@/components/custom/Whatsappbtn";
import React from "react";
import Productcardpro from "@/components/custom/ModelcardPro";
import Navbar from "@/components/custom/Navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Productcardpro />
      <Whatsappbutton />
      <Footer />
    </div>
  );
}

export default Homepage;

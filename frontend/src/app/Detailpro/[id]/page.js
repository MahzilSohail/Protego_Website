import React from "react";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import Detailcard from "@/components/custom/DetailcardPro";
import Whatsappbutton from "@/components/custom/Whatsappbtn";

export default function Detail({ params }) {
  const { id } = params;

  return (
    <div>
      <Navbar />
  <Detailcard id={params.id} />;
       <Whatsappbutton />
      <Footer />
    </div>
  );
  
}
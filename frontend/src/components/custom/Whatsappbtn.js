import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phone = "923238451415";
  const message = encodeURIComponent("Hi! I have a question about the Protego Ring. Can you please share more details?");
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="bg-white fixed right-4 bottom-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition transform hover:scale-105" >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      // style={{
      //   background:
      //     "linear-gradient(135deg,#25D366 0%, #128C7E 100%)", // WhatsApp green gradient
      //   color: "white",
      // }}
    >
      <FaWhatsapp className="text-green-500 text-[40px]" />
    </a>
    </div>
  );
}

export default WhatsAppButton;

// <a
//       href="{href}"
//       className="fixed right-4 bottom-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition transform hover:scale-105">
//       <FaWhatsapp className="text-green-500 text-[40px]" />
//     </a>
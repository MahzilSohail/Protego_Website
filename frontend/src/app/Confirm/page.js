"use client";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/custom/Footer";

export default function OrderConfirmationPage() {
  const order = {
    name: "Mahzil",
    email: "mahzilsohail1@gmail.com",
    orderNumber: "PG-8670717",
    orderDate: new Date().toLocaleDateString(),
  };
  

  return (
    <div>
    <div className="mt-10 min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1 className="text-4xl font-extrabold tracking-widest text-blue-900 mb-10">
        PROTEGO
      </h1>

      <FaCheckCircle className="text-green-600 text-6xl mb-5" />

      <h2 className="text-2xl font-semibold mb-2">
        Thank You
      </h2>
      <p className="text-gray-700 max-w-md mb-6">
        We’ve received your order and are now processing it. Keep an eye on your
        inbox for a confirmation.{" "}
        {/* <span className="font-semibold text-black">{order.email}</span>. */}
      </p>

      <div className="text-gray-600 mb-10">
        <p>
          Order Number:{" "}
          <span className="text-black font-medium">{order.orderNumber}</span>
        </p>
        <p>
          Order Date:{" "}
          <span className="text-black font-medium">{order.orderDate}</span>
        </p>
      </div>
      <Link href={"/"}
     className="bg-black text-white px-8 py-3 rounded-lg font-semibold tracking-wide hover:bg-gray-800 transition"
        >
        CONTINUE SHOPPING
      </Link> 
    </div>
    <Footer/>
    </div>
  );
}

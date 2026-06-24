"use client";
import React, { useState } from "react";
import ProtegoTabs from "./Descriptionpro";
import Sliderpro from "./Sliderpro";
import { useCart } from "@/context/CartContext";
import { lite } from "@/lite";
import { useParams, useRouter } from "next/navigation";

const Detailcard = () => {
  const { addToCart } = useCart();
  const params = useParams();
  const router = useRouter();

  const productId = params.id;
  const product = lite.find((p) => p.id == productId);

  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product Not Found</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-20 sm:py-28">
      <div className="w-full max-w-7xl m-4 flex flex-col lg:flex-row gap-12 lg:gap-20 px-4">

        {/* Image Slider */}
        <div className="w-full lg:w-[45%] flex justify-center items-center">
          <Sliderpro images={product.images} />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-auto px-0 lg:px-14">

          <span className="text-gray-400 leading-relaxed block mb-1 sm:mb-2">
            PROTEGO - Protection on the go
          </span>

          {/* Dynamic Name */}
          <p className="text-2xl leading-relaxed mb-1 sm:mb-2">
            {product.name}
          </p>

          {/* Dynamic Price */}
          <span className="text-[20px] leading-relaxed block mb-4 sm:mb-6">
            {product.price}
          </span>

          <ProtegoTabs />

          {/* Delivery Info */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-[18px] py-2 sm:py-4 leading-relaxed">
              Estimated Delivery Time
            </h3>
            <span className="text-gray-500 text-sm sm:text-base">
              LAHORE: 7-10 Days. <br /> Rest of Pakistan: 10-12 Business Days.
            </span>
          </div>

          {/* Size Chart */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-[20px] py-2 sm:py-4">Size Chart</h3>
            <img src="/Sizechart.jpg" className="w-full max-w-xs sm:max-w-sm" />
          </div>

          {/* Size Selection */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-[18px] py-2 sm:py-4 leading-relaxed">Size</h3>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 border flex items-center justify-center text-sm ${
                    selectedSize === size
                      ? "border-black"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-[18px] py-2 sm:py-4 leading-relaxed">
              Quantity
            </h3>
            <div className="flex items-center border w-fit px-3 py-2 gap-4">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="text-xl text-gray-600"
              >
                −
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-xl text-gray-600"
              >
                +
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={() =>
              addToCart({
                ...product,
                size: selectedSize,
                quantity,
              })
            }
            className="my-2 sm:my-4 w-full border py-3 tracking-wider hover:bg-gray-300 transition"
          >
            ADD TO CART
          </button>

          {/* BUY NOW */}
          <button
            onClick={() => {
              addToCart({
                ...product,
                size: selectedSize,
                quantity,
              });
              router.push("/Checkout");
            }}
            className="w-full bg-gray-600 text-white py-3 tracking-wider hover:bg-gray-700 transition"
          >
            BUY NOW
          </button>

        </div>
      </div>
    </div>
  );
};

export default Detailcard;


















// "use client";
// import React, { useState } from "react";
// import ProtegoTabs from "./Descriptionlite";
// import { useCart } from "@/context/CartContext";
// import ProductGallery from "./Sliderlite";

// const Detailcard = ({ item }) => {
//   const { addToCart } = useCart();
//   const sizes = ["S", "M", "L", "XL"];
//   const [selectedSize, setSelectedSize] = useState("S");
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center items-center py-20 sm:py-28">
//       <div className="w-full max-w-7xl m-4 flex flex-col lg:flex-row gap-12 lg:gap-20 px-4">
//         {/* Image Section */}
//         <div className="w-full lg:w-[45%] flex justify-center items-center">
//           <ProductGallery/>
//         </div>

//         {/* Details Section */}
//         <div className="w-full lg:w-auto px-0 lg:px-14">
//           <span className="text-gray-400 leading-relaxed block mb-1 sm:mb-2">
//             PROTEGO - Protection on the go
//           </span>
//           <p className="text-2xl leading-relaxed mb-1 sm:mb-2">Lite-Model Blue</p>
//           <span className="text-[20px] leading-relaxed block mb-4 sm:mb-6">Rs. 14,000</span>

//           <ProtegoTabs/>

//           <div className="mb-4 sm:mb-6">
//             <h3 className="text-[18px] py-2 sm:py-4 leading-relaxed">Estimated Delivery Time</h3>
//             <span className="text-gray-500 text-sm sm:text-base">
//               LAHORE: 7-10 Days. <br /> Rest of Pakistan: 10-12 Business Days.
//             </span>
//           </div>

//           <div className="mb-4 sm:mb-6">
//             <h3 className="text-[20px] py-2 sm:py-4">Size Chart</h3>
//             <img src="Sizechart.jpg" alt="Size Chart" className="w-full max-w-xs sm:max-w-sm" />
//           </div>

//           <div className="mb-4 sm:mb-6">
//             <h3 className="text-[18px] py-2 sm:py-4">Size</h3>
//             <div className="flex flex-wrap gap-3">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`w-12 h-12 border flex items-center justify-center text-sm ${
//                     selectedSize === size ? "border-black" : "border-gray-300 text-gray-500"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity Selector */}
//           <div className="mb-4 sm:mb-6">
//             <h3 className="text-[18px] py-2 sm:py-4 leading-relaxed">Quantity</h3>
//             <div className="flex items-center border w-fit px-3 py-2 gap-4">
//               <button
//                 onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
//                 className="text-xl text-gray-600"
//               >
//                 −
//               </button>
//               <span className="text-lg">{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="text-xl text-gray-600"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Add to Cart */}
//           <button
//             onClick={() => addToCart(item)}
//             className="my-2 sm:my-4 w-full border py-3 tracking-wider hover:bg-gray-300 transition"
//           >
//             ADD TO CART
//           </button>

//           {/* Buy it now */}
//           <button className="w-full bg-gray-600 text-white py-3 tracking-wider hover:bg-gray-700 transition">
//             BUY IT NOW
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detailcard;

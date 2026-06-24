"use client";
import { useState } from "react";

export default function ProductGallery({ images = [], className }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Safe fallback if no images provided
  if (!images.length) {
    return <div>No images available</div>;
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Main Image */}
      <div className="w-full flex-1 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex space-x-2 justify-center flex-wrap">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`border-2 rounded overflow-hidden ${
              idx === currentIndex ? "border-blue-500" : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}









// "use client";
// import { useState } from "react";

// const images = [
//   { src: "/image/problue.jpg", alt: "Image 1" },
//   { src: "/image/problue2.jpg", alt: "Image 2" },
//   { src: "/image/problue3.jpg", alt: "Image 3" },
//   { src: "/image/problue4.jpg", alt: "Image 4" },
//   { src: "/image/probluech.jpg", alt: "Image 5" },
// ];

// export default function ProductGallery({ className }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div className={`flex flex-col ${className}`}>
//       {/* Main image */}
//       <div className="w-full flex-1 overflow-hidden rounded-lg bg-gray-100">
//         <img
//           src={images[currentIndex].src}
//           alt={images[currentIndex].alt}
//           className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover"
//         />
//       </div>

//       {/* Thumbnails */}
//       <div className="mt-4 flex space-x-2 justify-center flex-wrap">
//         {images.map((img, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`border-2 rounded overflow-hidden ${
//               idx === currentIndex ? "border-blue-500" : "border-transparent"
//             }`}
//           >
//             <img
//               src={img.src}
//               alt={img.alt}
//               className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }





// // "use client";
// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/navigation";

// // // import modules
// // import { Navigation } from "swiper/modules";

// // export default function Sliderpro() {
// //   return (
// //     <div className="w-full flex justify-center">
// //       <Swiper
// //         navigation={true}
// //         modules={[Navigation]}
// //         className="w-[680px] h-[680px] md:w-[420px] md:h-[420px] rounded-lg"
// //         style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
// //       >
// //         {[
// //           "/image/problue.jpg",
// //           "/image/problue4.jpg",
// //           "/image/problue3.jpg",
// //           "/image/problue2.jpg",
// //           "/image/probluech.jpg",
// //         ].map((src, i) => (
// //           <SwiperSlide
// //             key={i}
// //             className="flex justify-center items-center bg-white"
// //           >
// //             <img
// //               src={src}
// //               alt="Protego Ring"
// //               className="object-contain w-[90%] h-[90%]"
// //             />
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // }

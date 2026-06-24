"use client";
import React from "react";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Homecard() {
  const [model, setModels] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/model")
      .then((res) => res.json())
      .then((data) => setModels(data));
    console.log(setModels);
  }, []);

  return (
    <div>
      <div className="pt-20">
        <div className="w-full h-[60vh] md:h-[70vh] lg:h-[90vh] flex justify-center items-center">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            loop
            muted
          >
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-black text-center pt-28">
        PROTEGO - Protection on the Go
      </h2>

      <div className="flex justify-center items-center py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {model.map((setModels) => (
            <div
              key={setModels.id}
              className="relative w-80 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all"
            >
              {/* Image Section */}
              <div className="flex justify-center items-center p-6 relative">
                <Link href={setModels.link}>
                  <div
                    className="slider"
                    style={{
                      margin: "0rem 4rem",
                      height: "15rem",
                      width: "12rem",

                      "--img1": `url(${setModels.images[0]})`,
                      "--img2": `url(${setModels.images[1]})`,
                      "--img3": `url(${setModels.images[2]})`,
                      "--img4": `url(${setModels.images[3]})`,
                      "--img5": `url(${setModels.images[4]})`,
                    }}
                  ></div>

                  <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 bg-blue-50 text-gray-900 px-6 py-2 font-medium shadow-md">
                    View Product
                  </div>
                </Link>
              </div>

              {/* Bottom Info Section */}
              <div className="text-center p-5">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {setModels.name}
                </h2>

                {/* Rating Section */}
                <div>
                  <div className="flex justify-center items-center space-x-1 mb-1 text-yellow-500">
                    {Array.from({ length: Math.floor(setModels.rating) }).map(
                      (_, i) => (
                        <FaStar key={i} />
                      )
                    )}

                    {setModels.rating % 1 !== 0 && <FaStarHalfAlt />}
                  </div>

                  <p className="text-gray-700 text-sm font-medium">
                    {setModels.reviews} reviews
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homecard;

import React, { useRef } from "react";
import mindData from "../../JSON/smallFood.json";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

const FoodScroll = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-6 px-4 mt-6">
      <div className="bg-white rounded-3xl shadow-md px-4 py-4 md:py-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            What's on your mind?
          </h2>
          <div className="gap-2 hidden sm:flex">
            <button
              onClick={() => scroll("left")}
              className="bg-white shadow-sm rounded-full p-2"
            >
              <IoArrowBackSharp size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white shadow-sm rounded-full p-2"
            >
              <IoArrowForward size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth"
        >
          {mindData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 w-16 sm:w-20"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-22 h-22 sm:w-25 sm:h-25 object-contain hover:scale-110 transition-transform duration-200 rounded-lg cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodScroll;

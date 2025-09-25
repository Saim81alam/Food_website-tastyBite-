import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/5695589/pexels-photo-5695589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Delicious Pizza",
    subtitle: "Taste the best pizza in town!",
  },
  {
    id: 2,
    image: "https://i.redd.it/n4p9yngu3hk81.jpg",
    title: "Juicy Burgers",
    subtitle: "Bite into happiness!",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQ0NsRAjdbRtwtKi01nKPyQEWW8dqwUzovQ&s",
    title: "Crispy Rolls",
    subtitle: "Roll into a new flavor!",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className=" w-full m-auto overflow-x-hidden px-4 mt-25 flex justify-center">
      <div className="relative w-full max-w-7xl aspect-[3/1] md:aspect-[16/5] rounded-3xl overflow-hidden shadow-md">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center pl-4 sm:pl-8 md:pl-16 text-white">
              <h2 className="text-lg sm:text-2xl md:text-5xl font-bold">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-md md:text-xl mt-2">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

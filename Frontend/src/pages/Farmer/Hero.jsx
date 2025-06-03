import React, { useState, useEffect } from "react";
import { Leaf } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero from "../../assets/hero_1.jpg";
import hero2 from "../../assets/hero_2.jpg";
import hero3 from "../../assets/hero_3.jpg";
import hero4 from "../../assets/hero_4.jpg";
import hero5 from "../../assets/hero_5.jpg";

const slides = [
  {
    image: hero,
    heading: "Farming is the best solution of world's starvation",
    subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: hero2,
    heading: "Organic vegetables is good for health",
    subtext: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
  {
    image: hero3,
    heading: "Providing Fresh Produce Every Single Day",
    subtext: "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    image: hero4,
    heading: "Farming as a Passion",
    subtext: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.",
  },
  {
    image: hero5,
    heading: "Good Food For All",
    subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Hero = () => {
 const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
  <div
    className="min-h-screen bg-cover bg-center pt-20 relative transition-all duration-700"
    style={{ backgroundImage: `url(${slides[current].image})` }}
  >
    {/* Blur overlay */}
    <div className="absolute inset-0 z-0 bg-black/10 backdrop-blur-xs" />
    {/* Overlay for text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
      <div className="max-w-2xl mx-auto text-center p-8 rounded-xl bg-black/10 shadow-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-2 mb-4 drop-shadow-lg">
          <Leaf className="text-lime-300" /> {slides[current].heading}
        </h1>
        <p className="text-white/90 text-base sm:text-lg drop-shadow">
          {slides[current].subtext}
        </p>
      </div>
    </div>
    {/* Carousel Controls */}
    <button
      className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/10 hover:bg-black/60 text-white rounded-full p-2 transition"
      onClick={prevSlide}
      aria-label="Previous Slide"
    >
      <ChevronLeft size={32} />
    </button>
    <button
      className="absolute right-6 top-1/2 -translate-y-1/2 z-20  bg-black/10 hover:bg-black/60 text-white rounded-full p-2 transition"
      onClick={nextSlide}
      aria-label="Next Slide"
    >
      <ChevronRight size={32} />
    </button>
    {/* Dots navigation */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
      {slides.map((_, idx) => (
        <button
          key={idx}
          className={`w-3 h-3 rounded-full ${idx === current ? "bg-lime-400" : "bg-white/60"} border border-green-700`}
          onClick={() => setCurrent(idx)}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  </div>
);
}

export default Hero

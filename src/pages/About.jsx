import React from "react";
import about from "../assets/about.webp";

function About() {
  return (
    <div className="bg-nav">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full min-h-[95vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${about})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero content */}
        <div className="relative text-center px-6 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="text-white mt-4 md:mt-6 max-w-xl md:max-w-2xl mx-auto">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans go off without a hitch. (Hitch costs extra 😉)
          </p>
        </div>
      </section>

      {/* About / Info Section */}
      <section className="p-6 flex flex-col items-center justify-center w-full text-center md:text-left">
        <p className="max-w-3xl my-6 px-4 md:px-0">
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>

        {/* CTA Box */}
        <div className="bg-[rgba(255,204,141,1)] w-full md:w-[80%] max-w-4xl p-6 rounded-md my-12 mx-auto text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Your destination is waiting.<br />Your van is ready.
          </h2>
          <button className="bg-black text-white p-3 mt-6 rounded-lg cursor-pointer hover:bg-gray-700 transition">
            Explore our vans
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;

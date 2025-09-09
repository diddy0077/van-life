import React from "react";
import Nav from "../components/Nav";
import about from "../assets/about.webp";
function About() {
  return (
    <div className="bg-nav">
      <Nav />
      <section
        id="hero"
        className="p-6 w-full min-h-[95vh] flex items-center justify-center flex-col relative"
        style={{
          backgroundImage: `url(${about})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          backgroundPosition: "left center", // keeps it centered
          backgroundAttachment: "scroll", // or 'fixed' for parallax effect
        }}
      >
        <div className="bg-black/40 inset-0 absolute w-full"></div>
      </section>

      <section className="p-6 flex flex-col items-center justify-center w-full">
        <h1 className="font-bold text-3xl">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className="max-w-3xl my-6">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className="bg-[rgba(255,204,141,1)] w-full p-6 rounded-md mt-12 mx-[8rem]">
          <h2 className="text-2xl font-semibold">Your destination is waiting.<br />Your van is ready.</h2>
          <button className="bg-black text-white p-2 rounded-lg mt-6 cursor-pointer hover:bg-gray-700">Explore our vans</button>
        </div>
      </section>
    </div>
  );
}

export default About;

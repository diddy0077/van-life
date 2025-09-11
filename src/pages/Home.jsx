import React from 'react'
import home from '../assets/home.webp'

function Home() {
  return (
    <div>
      <section
        id="hero"
        className="p-6 w-full min-h-screen flex items-center justify-center flex-col relative" // ensure it has enough height
        style={{
          backgroundImage: `url(${home})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // fills without stretching
          backgroundPosition: "center", // keeps it centered
          backgroundAttachment: "scroll", // or 'fixed' for parallax effect
        }}
      >
        <div className='bg-black/30 inset-0 absolute w-full'></div>
        <div className="text-white relative z-[100] ">
          <h1 className='font-bold text-4xl'>
          You got the travel plans, we've got the travel vans.
        </h1>
          <p className='mt-4'>Add Adventure to your life by joining the #vanlife movement.</p>
          <p>Rent the perfect van to make your perfect road trip.</p>
          <button className='bg-amber-500 hover:bg-amber-300 text-white w-full p-2 mt-16 rounded-md cursor-pointer transition duration-300'>Find your van</button>
        </div>
      </section>
    </div>
  );
}

export default Home
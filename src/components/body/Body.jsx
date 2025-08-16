import React from 'react';
import pulengImage from '../../assets/puleng.jpg';

const Body = () => {
  return (
    <div className="bg-rose-600 h-screen w-screen mt-14 flex flex-row items-center justify-center px-8">
      {/* Text container */}
      <div className="flex flex-col space-y-6 w-full md:w-1/2 text-white">
        <h1 className="font-bold text-4xl">Puleng Letsie</h1>

        <p className="font-bold text-2xl text-amber-200">
          Life Coach & Web Developer
        </p>

        <p className="text-lg text-slate-100">
          I empower others to live authentically and build boldly. Blending code with purpose, I create digital spaces that reflect truth, trust, and transformation.
        </p>

        <div className="flex space-x-4">
          <button className="font-bold px-6 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition">
            Start Your Journey
          </button>
          <button className="font-bold px-6 py-2 bg-white text-rose-600 rounded hover:bg-rose-700 hover:text-white transition">
            Explore Insights
          </button>
        </div>

        <p className="font-bold text-amber-200 text-xl">
          P's insights on life you don't want to miss.
        </p>
      </div>

      {/* Image container */}
      <div className="w-full md:w-1/2 h-auto flex justify-center">
        <img
          src={pulengImage}
          alt="Puleng Letsie"
          className="w-64 h-64 object-cover rounded-lg border-4 border-white shadow-lg"
        />
      </div>
    </div>
  );
};

export default Body;


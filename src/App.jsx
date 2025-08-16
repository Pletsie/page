import React from 'react';
import './index.css';
import pulengImage from './assets/puleng.jpg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        {/* Framed Image */}
        <div className="bg-white p-4 rounded-xl shadow-xl inline-block">
          <img
            src={pulengImage}
            alt="Puleng Letsie"
            className="mx-auto w-32 h-32 object-cover rounded-lg border-4 border-white shadow-md"
          />
        </div>

        {/* Name */}
        <h1 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
          Puleng Letsie
        </h1>

        {/* Title */}
        <p className="mt-2 text-lg text-indigo-600 dark:text-indigo-400 font-medium">
          Life Coach & Web Developer
        </p>

        {/* Mission Statement */}
        <p className="mt-4 text-md text-gray-600 dark:text-gray-300">
          I empower others to live authentically and build boldly. Blending code with purpose, I create digital spaces that reflect truth, trust, and transformation.
        </p>

        {/* Call to Action */}
        <div className="mt-6">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
            Let’s Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;




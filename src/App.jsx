import React from 'react';
import Body from './components/Body/Body';

const App = () => {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 w-screen bg-rose-100 z-50 px-8 py-4 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-teal-700 text-2xl tracking-wide">PULENG</h1>
          <ul className="flex space-x-10 text-xl text-teal-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">My Story</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Coaching</a></li>
            <li><a href="#">Connect</a></li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <Body />
    </>
  );
};

export default App;






import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">YourLogo</div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="/features" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </nav>
    </header>
  );
}

export default Header;
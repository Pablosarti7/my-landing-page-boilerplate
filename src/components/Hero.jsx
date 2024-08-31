import React from 'react';

function Hero() {
  return (
    <section className="container mx-auto px-6 py-16 text-center lg:py-32">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
        Welcome to Our Amazing Product
      </h1>
      <p className="text-xl mb-8 text-gray-600">
        Discover how we can transform your business with our innovative solution.
      </p>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700 transition duration-300">
        Learn More
      </button>
    </section>
  );
}

export default Hero;
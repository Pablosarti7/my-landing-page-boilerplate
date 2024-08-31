import React from 'react';

function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-indigo-500 py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Join thousands of satisfied customers and transform your business today.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
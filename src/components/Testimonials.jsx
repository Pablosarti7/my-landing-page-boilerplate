import React from 'react';

function Testimonials() {
  const testimonials = [
    { name: 'John Doe', role: 'CEO, TechCorp', quote: 'This product has revolutionized our workflow.' },
    { name: 'Jane Smith', role: 'Marketing Director, InnovateCo', quote: 'I can\'t imagine running our campaigns without it.' },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="font-semibold text-gray-800">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
import React from 'react';

function Features() {
  const features = [
    { title: 'Easy to Use', description: 'Our intuitive interface makes it simple for anyone to get started.' },
    { title: 'Powerful Analytics', description: 'Gain valuable insights with our advanced analytics tools.' },
    { title: '24/7 Support', description: 'Our dedicated team is always here to help you succeed.' },
  ];

  return (
    <section className="bg-gray-50 py-10 sm:py-16 lg:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
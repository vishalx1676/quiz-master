import React from 'react';
import database from '../assets/database.png';
import graph from '../assets/graph.png';
import menu from '../assets/menu.png';
import light from '../assets/thunderbolt.png';

const features = [
  {
    title: 'Multiple Categories',
    description: 'Dive into a wide array of topics, from history to science.',
    icon: menu,
  },
  {
    title: 'Score Tracking',
    description: 'Monitor your progress and see how you improve over time.',
    icon: graph,
  },
  {
    title: 'API-Based Questions',
    description: 'Fresh and diverse questions powered by the Trivia API.',
    icon: database,
  },
  {
    title: 'Fast Performance',
    description: 'Enjoy a smooth and quick quiz experience without delay.',
    icon: light,
  },
];

const Features = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      
      <h2 className="mb-10 text-3xl font-bold text-center text-slate-800">
        Why Choose Our Quiz?
      </h2>
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 text-center transition bg-white shadow-md rounded-xl hover:shadow-lg"
          >
            <img src={item.icon} alt={item.title} className="w-8 h-8 mb-4" />
            <h3 className="mb-2 text-lg font-semibold text-gray-700">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

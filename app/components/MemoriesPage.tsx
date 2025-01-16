"use client"
import React from 'react';

const MemoriesPage = () => {
  const memories = [
    {
      title: "Sea-side Memories",
      date: " 2023",
      description: "I still remember the Mcdonalds  Your smile lit up the entire room, and we talked for hours about our dreams and aspirations. That day marked the beautiful journey together.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Choclate Dat",
      date: " 2023",
      description: "Always remmeber the Dairy milk Song , close your and miss me I can read your lips on your finger tips I can feel your smile Come on My lips and happines in your EYes, Miss mee",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Proposed day/ 3rd-April in Ramzan ",
      date: "3rd April, 2023",
      description: "Remember when we tried to cook that complicated recipe? The kitchen was a mess, but we couldn't stop laughing. Even though the food was barely edible, it's one of my favorite memories with you.",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-12">
          Precious Memories with Talha
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memories.map((memory, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                {/* <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                /> */}
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-pink-600 mb-2">
                  {memory.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {memory.date}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {memory.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoriesPage;
"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

// BirthdayCard Component
export const BirthdayCard = () => {
  const [countdown, setCountdown] = useState(3);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setTimeout(() => setShowCard(true), 1000);
    }
  }, [countdown]);

  if (!showCard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center">
        <div className="text-8xl font-bold text-pink-600 animate-bounce">
          {countdown === 0 ? 'Happy Birthday LOVE YOU!' : countdown}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="relative h-12 bg-pink-500">
          <Heart className="absolute top-2 left-4 text-white animate-bounce" size={24} />
          <a href='Card'> </a>
          <Heart className="absolute top-2 right-4 text-white animate-bounce delay-100" size={24} />
        </div>
        
        <div className="p-4">
          <div className="relative w-100 h-74 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image 
              src="/img.png"
              alt="Birthday Memory"
              width={500} // Replace with your desired width
              height={300} // Replace with your desired height
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              {/* <p className="text-white text-lg">My Love</p> */}
            </div>
          </div>
        </div>

        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold text-pink-600 mb-4 animate-fade-in">
            Happy Birthday MY PRINCE! 🎉
          </h1>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Happy birthday, Talha, my Prince, my Love! Today is the day we celebrate the most amazing person. I hope your day is filled with love, laughter, and all your favorite things.
            ...
            {/* Rest of your text */}
          </p>

          <div className="text-sm text-pink-500 font-semibold animate-pulse">
            With Love ❤️
          </div>
          
          <div className="mt-2 text-gray-600 italic">
            - Sadia Saleem
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-4 left-4 animate-spin-slow">✨</div>
          <div className="absolute bottom-4 right-4 animate-spin-slow">✨</div>
        </div>
      </div>
    </div>
  );
};

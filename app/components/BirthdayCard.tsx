"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-pink-500 p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-white text-xl font-bold flex items-center gap-2 hover:text-pink-200 transition-colors">
  <a>
    <Heart size={24} className="text-white" />
    Birthday Boy
  </a>
</Link>

<Link href="/app/components/memories.tsx" className="text-white hover:bg-pink-600 px-4 py-2 rounded-lg transition-colors">
  <a>
    Memories
  </a>
</Link>
      </div>
    </nav>
  );
};

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
          <a href='Card'> Click Here Prince</a>
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
          Happy birthday, Talha My Prince My Love! 
          Today's the day we celebrate the most amazing person 
          I hope your day is filled with love, laughter, 
          and all your favorite things.As I sit down to write this letter to you,
           I'm overwhelmed with emotions. I don't even know where to begin.
            From the moment we met in class, I knew there was something special 
            about you. You are always in serious mood,first time i saw your bright smile, 
            i love it. Always keep smile on your face .Over the past three years,
            our friendship has grown into something so much more. We've shared countless memories, 
            from late-night study sessions and deep conversations. 
            You're the one person who truly love me, and I love how
             we can always count on each other. Whether it's for help with 
            Assignment and Uni Project hahah or chat about life, 
            you're always there for me Thank you . Your support and mean the world to me. 
             You have this amazing ability to make me laugh haha Love You , 
           even on my worst days. Talha. It's the little things too..As we celebrate 
           another year of life, 
            I want to say thank you. Thank you for being my partner 
             and my best friend. Thank you for making every day brighter 
            just be with me. Thank you for being you, Talha.I love you for
            who you are, As we look to the future, I know that there will be ups and downs.
             There will be challenges and obstacles. But I'm ready to face them
          all with you, Talha. I'm ready to take on the world with you by my side.

          So here's to many more adventures, 
          laughter, and memories to be created together! 
          Here's to many more late-night conversations,arguments and deep talks.
          Here's to many more years of love, happiness, and growth together.

          Happy birthday, my love! I love you more than words can express.

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

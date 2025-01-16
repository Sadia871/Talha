import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-pink-500 p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link 
        href="/" 
        className="text-white text-xl font-bold flex items-center gap-2 hover:text-pink-200 transition-colors"
      >
        <Heart size={24} className="text-white" />
        Birthday Boy
      </Link>
      <Link 
        href="./app/components/memories.tsx" 
        className="text-white hover:bg-pink-600 px-4 py-2 rounded-lg transition-colors"
      >
        Memories
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;

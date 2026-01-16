import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-10 md:px-24 h-24 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="text-2xl font-black tracking-tighter">
        AA<span className="text-blue-600">.</span>
      </div>

      <div className="flex gap-12 items-center">
        <ul className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-black">
          <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#work" className="hover:text-blue-600 transition-colors">Work</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
        <a 
          href="#contact"
          className="bg-black text-white px-6 py-3 text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-24 bg-white font-sans pt-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT: Social Bar */}
        <div className="hidden md:flex flex-col items-center justify-center gap-6">
          <div className="w-[1px] h-24 bg-black"></div>
          <span className="rotate-180 [writing-mode:vertical-lr] text-[10px] uppercase font-bold tracking-[0.3em] py-4">Follow Me</span>
          <div className="flex flex-col gap-4 text-[11px] font-black uppercase tracking-tighter">
            {/* GITHUB LINK UPDATED */}
            <a 
              href="https://github.com/AABams-Dev" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-blue-600 transition-colors"
            >
              GH
            </a>
           
            {/* X/TWITTER LINK UPDATED */}
            <a 
              href="https://x.com/ABams01" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-blue-600 transition-colors"
            >
              X
            </a>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* TEXT BLOCK */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-gray-400">
              Front-End Developer
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              AYOBAMI <br /> 
              <span className="text-transparent" style={{WebkitTextStroke: '1px black'}}>ARINADE</span>
            </h1>
            <p className="text-gray-500 max-w-md text-lg leading-relaxed">
              I help brands and entrepreneurs build digital experiences that are functional, beautiful and high-impact.
            </p>
            
            <a href="#work" className="inline-block mt-10 border-2 border-black px-12 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-black hover:text-white transition-all">
              View My Work
            </a>
          </div>

          {/* IMAGE BLOCK */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden border border-black/5 shadow-2xl">
               <img 
                 src="/profile.jpg" 
                 alt="Ayobami Arinade" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-blue-600 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
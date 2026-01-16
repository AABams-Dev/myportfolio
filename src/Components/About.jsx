import React from 'react';
import { MdOutlineAgriculture, MdAccountBalance, MdCode, MdMusicNote } from "react-icons/md";

const About = () => {
  return (
    // Added id="about" for smooth scrolling
    <section id="about" className="py-24 px-10 md:px-24 bg-tg-gray font-sans border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION TITLE */}
        <div className="mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-tg-text-muted mb-4">The Journey</h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-tg-black leading-[0.9]">
            Real Life. <br /> 
            <span className="text-gray-400">Real Impact.</span>
          </h3>
          <div className="w-20 h-1 bg-blue-600 mt-8"></div> {/* Visual accent to match Hero */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: The Narrative (Main Bio) */}
          <div className="lg:col-span-7 space-y-6 text-lg text-tg-black leading-relaxed">
            <p className="font-bold">
              Ayobami Arinade is a front-end engineer, Web3 builder, and creative thinker shaped by real-world experience.
            </p>
            <p className="text-tg-text-muted">
              With a strong foundation in Web2 and a growing footprint in Web3, Ayobami brings a rare blend of technical skill, business understanding, and human-centered design to every project.
            </p>
            <p className="text-tg-text-muted">
              Before tech, he sharpened his understanding of scale in the banking sector (First Bank), insurance and agriculture. These roles taught him structure, risk, and communication—lessons he now applies to the blockchain.
            </p>
            
            {/* HACKATHON WINS SECTION */}
            <div className="pt-8 border-t border-gray-300">
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-blue-600">Hackathon Track Record</h4>
              <p className="text-sm text-tg-text-muted italic">
                Contributed to 4+ winning hackathons alongside David Patrick and other elite developers, perfecting the art of rapid product development and team-led problem solving.
              </p>
            </div>
          </div>

          {/* RIGHT: Experience "Pillars" */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="group bg-white p-6 border border-gray-200 shadow-sm flex items-center gap-5 hover:border-blue-600 transition-all duration-300">
              <div className="text-tg-black group-hover:scale-110 transition-transform"><MdAccountBalance size={24} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest">Finance & Admin</p>
                <p className="text-xs text-tg-text-muted text-nowrap">First Bank | Insurance Officer</p>
              </div>
            </div>

            <div className="group bg-white p-6 border border-gray-200 shadow-sm flex items-center gap-5 hover:border-blue-600 transition-all duration-300">
              <div className="text-tg-black group-hover:scale-110 transition-transform"><MdCode size={24} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest">Web3 Ecosystem</p>
                <p className="text-xs text-tg-text-muted">Ambassador: NexusLabs & GOATNetwork</p>
              </div>
            </div>

            <div className="group bg-white p-6 border border-gray-200 shadow-sm flex items-center gap-5 hover:border-blue-600 transition-all duration-300">
              <div className="text-tg-black group-hover:scale-110 transition-transform"><MdOutlineAgriculture size={24} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest">Real-World Ops</p>
                <p className="text-xs text-tg-text-muted">Press Operations | Land Farming</p>
              </div>
            </div>

            <div className="bg-tg-black p-6 text-white flex items-center gap-5 shadow-lg">
              <div className="text-blue-400 animate-pulse"><MdMusicNote size={24} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Creative Rhythm</p>
                <p className="text-xs opacity-80">Piano Player & Creative Thinker</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
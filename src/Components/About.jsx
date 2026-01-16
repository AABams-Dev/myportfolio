import React from 'react';
import { MdPeople, MdCode, MdLayers } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="py-24 px-10 md:px-24 bg-white font-sans border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION TITLE */}
        <div className="mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">The Journey</h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-[0.9]">
            Real Life. <br /> 
            <span className="text-gray-400">Real Impact.</span>
          </h3>
          <div className="w-20 h-1 bg-blue-600 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: The Narrative */}
          <div className="lg:col-span-7 space-y-6 text-lg text-black leading-relaxed">
            <p className="font-bold">
              Ayobami Arinade is a front-end engineer and Web3 builder driven by community and ecosystem growth.
            </p>
            <p className="text-gray-500">
              With a strong foundation in Web2 and a deep commitment to the decentralized future, Ayobami brings technical skill and strategic community management to every project he touches.
            </p>
            <p className="text-gray-500">
              He currently serves as a <b>Community Moderator at Kairos Bridge</b>, focusing on building inclusive digital spaces and bridging the gap between developers and users.
            </p>
            
            {/* HACKATHON WINS SECTION */}
            <div className="pt-8 border-t border-gray-300">
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-blue-600">Hackathon Track Record</h4>
              <p className="text-sm text-gray-500 italic">
                Contributed to 4+ winning hackathons alongside David Patrick and other elite developers, focusing on rapid prototyping and user-centric blockchain solutions.
              </p>
            </div>
          </div>

          {/* RIGHT: Professional Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* PILLAR 1: COMMUNITY MODERATION */}
            <div className="group bg-white p-8 border border-gray-200 shadow-sm flex items-center gap-5 hover:border-blue-600 transition-all duration-300">
              <div className="text-black group-hover:scale-110 transition-transform"><MdPeople size={28} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest">Community Operations</p>
                <p className="text-sm font-bold text-black">Moderator | Carriers Bridge</p>
              </div>
            </div>

            {/* PILLAR 2: WEB3 AMBASSADOR - GOATNETWORK & NEXUSLABS */}
            <div className="group bg-white p-8 border border-gray-200 shadow-sm flex items-center gap-5 hover:border-blue-600 transition-all duration-300">
              <div className="text-black group-hover:scale-110 transition-transform"><MdCode size={28} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest">Web3 Ecosystem</p>
                <p className="text-sm font-bold text-black">Ambassador: NexusLabs & GOATNetwork</p>
              </div>
            </div>

            {/* PILLAR 3: DEVELOPMENT STACK */}
            <div className="group bg-black p-8 text-white flex items-center gap-5 shadow-lg">
              <div className="text-blue-400"><MdLayers size={28} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Core Expertise</p>
                <p className="text-sm font-bold">Front-End & Web3 Architecture</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
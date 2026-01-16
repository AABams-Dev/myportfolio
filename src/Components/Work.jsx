import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const Work = () => {
  const projects = [
    {
      id: "01",
      title: "Web3 Hackathon Wins",
      category: "Blockchain / Rapid Dev",
      description: "Contributed to 4 winning hackathons alongside David Patrick, building high-impact solutions under pressure.",
    },
    {
      id: "02",
      title: "E-Commerce Infrastructure",
      category: "Front-end Engineering",
      description: "Designed and developed seamless shopping platforms with a focus on user experience and speed.",
    },
    {
      id: "03",
      title: "NexusLabs Hub",
      category: "Web3 Ambassador",
      description: "Helping translate complex blockchain concepts into accessible narratives for the global community.",
    }
  ];

  return (
    <section id="work" className="py-24 px-10 md:px-24 bg-white font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">Selected Work</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Case <span className="text-gray-300">Studies.</span></h3>
          </div>
        </div>

        {/* Projects List */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {projects.map((project) => (
            <div key={project.id} className="group py-12 flex flex-col md:flex-row justify-between items-start gap-8 hover:bg-gray-50 transition-all px-4">
              <div className="flex gap-8 items-start">
                <span className="text-sm font-bold text-gray-300 group-hover:text-black transition-colors">{project.id}</span>
                <div>
                  <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-300">{project.title}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mt-2">{project.category}</p>
                </div>
              </div>
              
              <div className="md:max-w-xs">
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest cursor-pointer group-hover:text-blue-600">
                  Coming Soon <MdArrowOutward />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
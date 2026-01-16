import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    id: 1,
    title: "Hackathon Champion",
    category: "Web3 / Rapid Prototyping",
    description: "Successfully contributed to 4+ winning hackathons. Specialized in building high-fidelity front-end interfaces and integrating blockchain functionality under tight deadlines.",
    link: "https://github.com/AABams-Dev",
    tags: ["React", "Ethers.js", "Tailwind"]
  },
  {
    id: 2,
    title: "Premium E-Commerce",
    category: "Web3 / Frontend",
    description: "Designed and developed a scalable digital storefront. Focused on optimized performance, secure checkout flows and a modern aesthetic.",
    link: "https://github.com/AABams-Dev",
    tags: ["TypeScript", "Tailwind", "Figma"]
  },
  {
    id: 3,
    title: "Ecosystem Hub",
    category: "Web3 Ambassador Tools",
    description: "Built a nexus-defence app game for NexusLabs  to drive ecosystem growth and user onboarding.",
    link: "https://github.com/AABams-Dev",
    tags: ["Web3", "Governance", "Next.js"]
  }
];

const Work = () => {
  return (
    <section id="work" className="py-24 px-10 md:px-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6">Case Studies</h2>
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
              Selected <br /> <span className="text-blue-600">Work.</span>
            </h3>
          </div>
          <div className="pb-2">
            <p className="text-gray-500 max-w-[240px] text-sm leading-relaxed border-l-2 border-black pl-4">
              A glimpse into the digital products and decentralized solutions I've helped bring to life.
            </p>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-gray-50 border border-gray-100 p-10 flex flex-col justify-between min-h-[450px] hover:bg-black transition-all duration-700 ease-in-out"
            >
              <div>
                <div className="flex justify-between items-start mb-16">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 group-hover:text-blue-400 transition-colors">
                    {project.category}
                  </span>
                  <div className="p-3 rounded-full border border-gray-200 group-hover:border-gray-800 group-hover:text-white transition-all">
                    <MdArrowOutward size={20} className="group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
                
                <h4 className="text-4xl font-black uppercase leading-none mb-6 group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-500 group-hover:text-gray-400 text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-10">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-bold uppercase tracking-widest border border-gray-300 px-3 py-1 group-hover:border-gray-700 group-hover:text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
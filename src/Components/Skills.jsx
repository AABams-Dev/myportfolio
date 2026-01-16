import React from 'react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiTypescript, SiFigma, SiTailwindcss 
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] bg-black" /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
  ];

  return (
    <section id="skills" className="py-24 px-10 md:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* SECTION HEADER (Matches your video) */}
        <div className="inline-block border-2 border-black px-8 py-2 mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.5em]">Skills</h2>
        </div>

        <div className="mb-12">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-10 text-left">Using Now:</p>
          
          {/* GRID (4 columns on desktop, 2 on mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';

const services = [
  {
    id: "01",
    title: "Web3 Development",
    details: "Building decentralized applications (dApps) with a focus on seamless user experience and secure smart contract integration."
  },
  {
    id: "02",
    title: "Front-End Architecture",
    details: "Creating scalable, high-performance web interfaces using React, Vite, and Tailwind CSS with a mobile-first approach."
  },
  {
    id: "03",
    title: "Community Strategy",
    details: "Leveraging experience from KariosBridge, NexusLabs and GOATNetwork to build, moderate and scale digital ecosystems."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-10 md:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">My Expertise</h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Services & <br /> <span className="text-gray-600">Solutions.</span>
          </h3>
        </div>

        {/* SERVICES LIST */}
        <div className="flex flex-col">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group border-t border-gray-800 py-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-white hover:text-black transition-all duration-500 px-4"
            >
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="text-sm font-bold text-blue-600">{service.id}</span>
                <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tight">{service.title}</h4>
              </div>
              <p className="max-w-md text-gray-500 group-hover:text-black text-sm md:text-base leading-relaxed">
                {service.details}
              </p>
            </div>
          ))}
          <div className="border-t border-gray-800"></div>
        </div>

      </div>
    </section>
  );
};

export default Services;
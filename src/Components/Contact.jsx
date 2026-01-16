import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xpqqwnkk");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 px-10 md:px-24 bg-tg-black text-white text-center min-h-[400px] flex flex-col justify-center">
        <h3 className="text-4xl font-black uppercase tracking-tighter">Message Received!</h3>
        <p className="text-gray-400 mt-4 font-bold uppercase tracking-widest text-[10px]">Ayobami will reach out shortly.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-8 text-blue-500 text-[10px] font-bold uppercase tracking-widest underline"
        >
          Send another message
        </button>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-10 md:px-24 bg-[#0A0A0B] text-white font-sans border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500 mb-12 text-center md:text-left">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              LET'S <br /> <span className="text-blue-600">TALK.</span>
            </h3>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Whether you're building a Web3 protocol or need a high-performance frontend, I'm ready to bring your vision to life.
            </p>
            
            {/* MY SOCIAL LINKS ADDED HERE */}
            <div className="flex gap-8 mb-8 text-[11px] font-black uppercase tracking-[0.2em]">
              <a href="https://github.com/AABams-Dev" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Github</a>
              <a href="https://x.com/ABams01" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Twitter</a>
            </div>

            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
               <span className="text-blue-600">Available for hire</span>
               <span>Remote / Global</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-500">Full Name</label>
              <input name="name" type="text" required className="bg-transparent border-b border-gray-800 py-3 outline-none focus:border-blue-600 transition-colors text-white" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-500">Email Address</label>
              <input name="email" type="email" required className="bg-transparent border-b border-gray-800 py-3 outline-none focus:border-blue-600 transition-colors text-white" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-500">Message</label>
              <textarea name="message" rows="4" required className="bg-transparent border-b border-gray-800 py-3 outline-none focus:border-blue-600 transition-colors resize-none text-white"></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button 
              type="submit" 
              disabled={state.submitting}
              className="bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] py-5 px-10 hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {state.submitting ? 'Transmitting...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* THE FOOTER LINE */}
        <div className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-gray-600">
           <p>© {new Date().getFullYear()} Ayobami Arinade</p>
           <p>Engineered for the Decentralized Web</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
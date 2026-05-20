import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-dark/80 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer inline-block mb-4">
              <span className="text-3xl font-bold font-poppins text-gradient">KS</span>
            </Link>
            <p className="text-gray-400 max-w-xs text-sm">
              Building intelligent applications and engaging web experiences. Let's create something amazing together.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Experience', 'Projects'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item.toLowerCase()} 
                      smooth={true} 
                      duration={500} 
                      className="text-gray-400 hover:text-primary cursor-pointer transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-4">Social</h4>
              <div className="flex gap-4">
                <a href="https://github.com/Saravanan264" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/saravanan-k-a54a9a297/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full text-gray-400 hover:text-primary hover:bg-white/10 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:saravanan492005@gmail.com" className="bg-white/5 p-2 rounded-full text-gray-400 hover:text-accent hover:bg-white/10 transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} K. Saravanan. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by K. Saravanan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

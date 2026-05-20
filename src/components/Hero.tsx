import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const roles = [
    'AI & Data Science Student',
    'Full Stack Developer',
    'Spring Boot Developer',
    'Machine Learning Enthusiast',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between z-10">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0"
        >
          <h2 className="text-xl sm:text-2xl text-gray-400 font-medium mb-2">
            Hello, I&apos;m
          </h2>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-poppins mb-4 tracking-tight text-white">
            K. <span className="text-gradient">Saravanan</span>
          </h1>

          {/* ROLE ANIMATION */}
          <div className="h-12 mb-6">
            <motion.p
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl sm:text-2xl text-gray-300 font-medium"
            >
              {roles[currentRoleIndex]}
            </motion.p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed">
            Passionate AI & Data Science student specializing in Full Stack
            Development, Spring Boot applications, and Machine Learning
            solutions. I enjoy building modern, scalable, and impactful
            software products.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">

            {/* DOWNLOAD RESUME */}
            <a
              href="/assets/Saravanan_K_Resume.pdf"
              download
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>

            {/* CONTACT BUTTON */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </Link>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6">

            {/* GITHUB */}
            <a
              href="https://github.com/Saravanan264"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/saravanan-k-a54a9a297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>

            {/* EMAIL */}
            <a
              href="mailto:saravanan492005@gmail.com"
              className="text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </motion.div>

        {/* PROFILE IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">

            {/* ANIMATED GLOW BORDER */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent animate-spin blur-sm"
              style={{ animationDuration: '8s' }}
            ></div>

            {/* IMAGE CONTAINER */}
            <div className="absolute inset-2 rounded-full bg-dark flex items-center justify-center overflow-hidden border-4 border-dark z-10 shadow-2xl">

              {/* PROFILE IMAGE */}
              <img
                src="/assets/profile.png"
                alt="K. Saravanan"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* FLOATING BADGES */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -left-4 glass px-4 py-2 rounded-lg z-20"
            >
              <span className="font-bold text-primary">AI</span>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-10 -right-8 glass px-4 py-2 rounded-lg z-20"
            >
              <span className="font-bold text-secondary">
                Spring Boot
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
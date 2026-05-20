import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Award, Code, BrainCircuit } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const highlights = [
    {
      icon: <BrainCircuit className="text-primary" size={24} />,
      title: "AI & ML Enthusiast",
      desc: "Passionate about building intelligent systems."
    },
    {
      icon: <Code className="text-secondary" size={24} />,
      title: "Full Stack Dev",
      desc: "Proficient in React & Spring Boot ecosystems."
    },
    {
      icon: <Award className="text-accent" size={24} />,
      title: "Problem Solver",
      desc: "Driven by innovation and logical thinking."
    },
    {
      icon: <BookOpen className="text-green-400" size={24} />,
      title: "Quick Learner",
      desc: "Always exploring new technologies and frameworks."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/2 space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am an <span className="text-white font-medium">AI and Data Science student</span> currently pursuing my degree at <span className="text-primary font-medium">P.S.R Engineering College</span> with a CGPA of <span className="text-accent font-bold">8.5</span>.
              </p>
              <p>
                My passion lies at the intersection of Artificial Intelligence and Full Stack Development. I love to architect robust backends using <span className="text-secondary font-medium">Spring Boot</span> and design engaging, modern frontend interfaces.
              </p>
              <p>
                As an enthusiastic learner and innovation-driven developer, I thrive on solving complex problems and transforming ideas into impactful software solutions. I am constantly expanding my skill set to stay ahead in the rapidly evolving tech landscape.
              </p>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-xl border border-white/5"
                >
                  <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

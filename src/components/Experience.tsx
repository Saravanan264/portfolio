import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: "Novitech",
      role: "Full Stack Intern",
      period: "2023 - Present",
      color: "from-primary to-accent",
      points: [
        "Developed robust backend modules using Spring Boot framework.",
        "Integrated MySQL database for efficient data management.",
        "Designed and implemented RESTful APIs for seamless frontend communication.",
        "Executed CRUD operations and improved overall system performance."
      ]
    },
    {
      company: "CodeBind Technologies",
      role: "AI/ML Intern",
      period: "2022",
      color: "from-secondary to-primary",
      points: [
        "Contributed to the development of self-cleaning robot schematics.",
        "Built and trained a facial recognition attendance system using ML techniques.",
        "Collaborated on digital outreach strategies and data analysis."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div ref={ref} className="relative border-l-2 border-white/10 ml-3 md:ml-0 md:pl-0 md:border-l-0">
          {/* Desktop central line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-12 relative flex md:justify-between items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-[-29px] md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-dark border-4 border-primary z-10 flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                </div>

                <div className="w-full md:w-[45%] pl-8 md:pl-0">
                  <div className={`glass-card p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow duration-300 relative`}>
                    <div className={`absolute top-6 ${isEven ? 'md:-right-3 md:border-l-0 md:border-r-[12px] md:border-r-white/5 md:border-y-transparent md:border-y-[12px]' : 'md:-left-3 md:border-r-0 md:border-l-[12px] md:border-l-white/5 md:border-y-transparent md:border-y-[12px]'} hidden md:block w-0 h-0`}></div>
                    
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="text-primary" size={20} />
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    </div>
                    <h4 className="text-lg text-gray-300 font-medium mb-1">{exp.company}</h4>
                    <span className="inline-block px-3 py-1 bg-white/5 text-primary text-sm rounded-full mb-4 font-medium border border-white/10">
                      {exp.period}
                    </span>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "AI Skill Gap & Resume Analyzer",
      description: "An AI-based resume analysis system that utilizes NLP for keyword extraction. It identifies skill gaps between the candidate's profile and job requirements, providing actionable improvement suggestions.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "NLP", "Machine Learning", "React", "Flask"]
    },
    {
      title: "Medical Report Analyzer",
      description: "An AI-driven application designed to analyze medical reports. It extracts vital health parameters and provides ML-powered summarized insights to assist healthcare professionals in quick decision-making.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "TensorFlow", "React", "Spring Boot", "MySQL"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent work in Artificial Intelligence and Full Stack Development.</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group border border-white/10"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 relative z-20 -mt-10">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="absolute top-4 right-4 z-20">
                  <span className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg">
                    <Star size={12} className="fill-white" />
                    Featured Project
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

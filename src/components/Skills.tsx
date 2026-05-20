import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={20} className="text-primary" />,
      skills: ["Java", "Python", "JavaScript"]
    },
    {
      title: "Frontend",
      icon: <Layout size={20} className="text-secondary" />,
      skills: ["ReactJS", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: <Server size={20} className="text-accent" />,
      skills: ["Spring Boot", "Node.js"]
    },
    {
      title: "Database",
      icon: <Database size={20} className="text-primary" />,
      skills: ["MySQL"]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={20} className="text-secondary" />,
      skills: ["Git & GitHub", "Postman", "VS Code", "IntelliJ IDEA"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I work with to bring ideas to life.</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="bg-white/5 p-2 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

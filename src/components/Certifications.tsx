import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "Full Stack Development",
      issuer: "Novitech",
      icon: <Award className="text-primary" size={32} />,
      link: "/assets/certificates/fullstack.pdf"
    },
    {
      title: "Foundations of Data Science",
      issuer: "Google",
      icon: <Award className="text-secondary" size={32} />,
      link: "/assets/certificates/datascience.pdf"
    },
    {
      title: "Data Structures & Algorithms using Java",
      issuer: "NPTEL",
      icon: <Award className="text-accent" size={32} />,
      link: "/assets/certificates/dsa.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Professional certifications and courses I&apos;ve completed to enhance my skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="bg-white/5 p-5 rounded-full mb-6 border border-white/10 group-hover:border-primary/50 transition-colors duration-300">
                {cert.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-8">{cert.issuer}</p>

              <div className="mt-auto w-full">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-primary/20 text-white rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300 group-hover:text-primary"
                >
                  <ExternalLink size={18} />
                  <span className="font-medium">View Certificate</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Trophy, Target, Zap } from 'lucide-react';

const KeyAchievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "Elite Certification in NPTEL DSA",
      description: "Achieved Elite Certification in NPTEL Data Structures & Algorithms using Java.",
      icon: <Trophy size={24} className="text-white" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Academic Excellence",
      description: "Consistently maintained a high academic performance with a CGPA of 8.5.",
      icon: <Star size={24} className="text-white" />,
      color: "from-primary to-secondary"
    },
    {
      title: "Internship Accomplishments",
      description: "Successfully delivered multiple ML-based projects and robust backend modules during internships.",
      icon: <Target size={24} className="text-white" />,
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Problem Solving",
      description: "Solved numerous complex algorithmic problems and optimized application performance.",
      icon: <Zap size={24} className="text-white" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Milestones and accomplishments that highlight my dedication and skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden"
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;

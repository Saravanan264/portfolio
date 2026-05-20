import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import KeyAchievements from './components/KeyAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="fixed inset-0 z-[-1] bg-dark overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-blob"></div>
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] rounded-full bg-secondary/20 blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] rounded-full bg-accent/20 blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <KeyAchievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

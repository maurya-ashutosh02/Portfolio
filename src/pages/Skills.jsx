import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SkillCard from '../components/skills/SkillCard';
import TypewriterHeader from '../components/skills/TypewriterHeader';
import FloatingEffects from '../components/skills/FloatingEffects';
import ProgressBars from '../components/skills/ProgressBars';
// import NeuralGlow from '../components/NeuralGlow';
import FluidCursor from '../components/FluidCursor';

gsap.registerPlugin(ScrollTrigger);

const skillData = {
   technical: [
  { name: 'React', level: 75, icon: '🔷' },
  { name: 'Node.js', level: 70, icon: '🟢' },
  { name: 'MongoDB', level: 75, icon: '🍃' },
  { name: 'Express', level: 70, icon: '🚂' },
  { name: 'HTML', level: 80, icon: '📄' },
  { 
    name: 'CSS', 
    level: 80,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.532L12 24l-8.59-2.468L1.5 0zM17.52 6.36h-11l.265 3h10.46l-.214 2.4-4.397 2.368-1.256.685-.56-1.255-1.54-.006.112.89 2.96 1.655 5.26-3.015.358-4.7z"/>
      </svg>
    )
  },
  { 
    name: 'TailwindCSS', 
    level: 75,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3.5c-3.03 0-5.422 1.565-6.683 4.255 1.24-1.095 3.1-1.967 5.408-1.967 4.14 0 6.046 2.858 6.348 5.43 0 0-.7.278-1.747.278-2.377 0-4.215-2.027-5.565-4.054-.176.607-.29 1.227-.29 1.835 0 3.258 3.955 6.105 8.784 6.105 1.91 0 3.65-.405 4.867-1.11-1.652 2.258-4.852 3.77-8.335 3.77-4.87 0-8.55-3.365-8.55-8.012 0-3.865 2.94-7.238 7.09-7.238 2.598 0 4.418 1.172 5.45 2.63.24-.682.53-1.33.87-1.945C15.993 4.474 14.146 3.5 12 3.5z"/>
      </svg>
    )
  },
  { 
    name: 'SQL', 
    level: 70,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0L0 5v14l12 5 12-5V5l-12-5zM7 11h10v2H7v-2zm0-4h10v2H7V7zm0 8h10v2H7v-2z"/>
      </svg>
    )
  },
],

  programming: [
    { name: 'JavaScript', level: 90, icon: '🟨' },
    { name: 'Java', level: 75, icon: '☕' },
    { name: 'Python', level: 50, icon: '🐍' },
  ],
  dsa: [
    { name: 'Problem Solving', level: 85, icon: '🧠' },
    { name: 'Algorithms', level: 80, icon: '📊' },
    { name: 'Data Structures', level: 85, icon: '🗃️' },
  ],
  other: [
    { name: 'Communication', level: 70, icon: '🗣️' },
    { name: 'Leadership', level: 75, icon: '⭐' },
    { name: 'Teamwork', level: 85, icon: '🤝' },
  ],
};

const Skills = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      const direction = ['left', 'right', 'bottom', 'left'][i % 4];
      gsap.fromTo(
        section,
        { autoAlpha: 0, x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0, y: direction === 'bottom' ? 100 : 0 },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            scrub:true,
          },
          stagger: 0.25,
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen text-white font-mono overflow-hidden p-10">
        
      <FloatingEffects/>
     <FluidCursor/>
      <div className="max-w-7xl mx-auto p-6 space-y-16">
        <section ref={el => (sectionsRef.current[0] = el)} className="skill-section">
          <TypewriterHeader text="Technical Skills ⚡" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {skillData.technical.map((skill, i) => (
              <SkillCard key={i} name={skill.name} level={skill.level} icon={skill.icon} />
            ))}
          </div>
        </section>

        <section ref={el => (sectionsRef.current[1] = el)} className="skill-section">
          <TypewriterHeader text="Programming Languages 💻" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {skillData.programming.map((skill, i) => (
              <SkillCard key={i} name={skill.name} level={skill.level} icon={skill.icon} />
            ))}
          </div>
        </section>

        <section ref={el => (sectionsRef.current[2] = el)} className="skill-section">
          <TypewriterHeader text="DSA & Problem Solving ⚙️" />
          <ProgressBars skills={skillData.dsa} />
        </section>

        <section ref={el => (sectionsRef.current[3] = el)} className="skill-section">
          <TypewriterHeader text="Other Skills 🌟" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {skillData.other.map((skill, i) => (
              <SkillCard key={i} name={skill.name} level={skill.level} icon={skill.icon} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const SkillCard = ({ name, level, icon }) => {
  const cardRef = useRef(null);

  const handleHover = () => {
    gsap.to(cardRef.current, { scale: 1.05, boxShadow: '0 0 15px 3px #0ff', duration: 0.3, ease: 'power1.out' });
  };

  const handleHoverOut = () => {
    gsap.to(cardRef.current, { scale: 1, boxShadow: '0 0 8px 1px rgba(0,255,255,0.5)', duration: 0.3, ease: 'power1.out' });
  };

  const handleClick = (e) => {
    const ripple = document.createElement('span');
    const rect = cardRef.current.getBoundingClientRect();
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    cardRef.current.appendChild(ripple);
    gsap.fromTo(
      ripple,
      { scale: 0, opacity: 0.6 },
      {
        scale: 4,
        opacity: 0,
        duration: 0.6,
        ease: 'power1.out',
        onComplete: () => ripple.remove(),
      }
    );
  };

  return (
    <Tippy content={`${name}: ${level}% proficiency`} placement="top" animation="fade" arrow={true}>
      <div
        ref={cardRef}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        onClick={handleClick}
        className="relative cursor-pointer p-6 bg-gradient-to-br from-neonBlue to-neonPurple rounded-xl shadow-neon-blue transition-transform duration-300 select-none"
      >
        <div className="text-5xl mb-4 animate-pulse">{icon}</div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-300">Proficiency: {level}%</p>
      </div>
    </Tippy>
  );
};

export default SkillCard;

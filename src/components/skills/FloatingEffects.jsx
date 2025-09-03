import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingEffects = () => {
  const bubbleRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    // Floating Bubbles Animation
    const bubbles = bubbleRef.current.querySelectorAll('.bubble');
    bubbles.forEach((bubble, i) => {
      gsap.to(bubble, {
        y: -50 - Math.random() * 50,
        x: Math.random() * 20 - 10,
        duration: 6 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i,
      });
    });

    // Floating Icons Animation
    const icons = iconsRef.current.querySelectorAll('.float-icon');
    gsap.timeline({ repeat: -1, yoyo: true, ease: 'sine.inOut' })
      .to(icons, { y: -15, stagger: 1, duration: 4 })
      .to(icons, { y: 0, stagger: 1, duration: 4 });
  }, []);

  return (
    <>
      <div
        ref={bubbleRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-full -z-10"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bubble w-6 h-6 rounded-full bg-neonBlue opacity-20 absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div
        ref={iconsRef}
        aria-hidden="true"
        className="fixed top-20 right-10 space-y-6 -z-10"
      >
        {['⚛️', '🟨', '🍃'].map((icon, i) => (
          <div key={i} className="float-icon text-4xl text-neonBlue select-none">
            {icon}
          </div>
        ))}
      </div>
    </>
  );
};

export default FloatingEffects;

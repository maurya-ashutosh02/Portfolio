import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RadialProgress = ({ size, strokeWidth, percentage }) => {
  const circleRef = useRef();
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        circleRef.current,
        { strokeDashoffset: circumference },
        {
          strokeDashoffset: circumference * (1 - percentage / 100),
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top 80%",
            end:"top 20%",
            scrub:true,
          },
          onComplete: () => {
            gsap.fromTo(
              circleRef.current,
              { scale: 1 },
              {
                scale: 1.1,
                yoyo: true,
                repeat: 1,
                duration: 0.3,
                ease: "bounce.out",
              }
            );
          },
        }
      );
    }, circleRef);
    return () => ctx.revert();
  }, [circumference, percentage]);

  return (
    <svg width={size} height={size} className="mx-auto">
      {/* Background ring */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#222"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Animated ring */}
      <circle
        ref={circleRef}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="url(#neonGradient)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 5px #0ff)" }}
      />
      {/* Percentage Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="18"
        fill="#0ff"
        className="font-bold"
      >
        {percentage}%
      </text>
      <defs>
        <linearGradient id="neonGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#00fff7" />
          <stop offset="100%" stopColor="#9f00ff" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const LinearProgress = ({ percentage }) => {
  const barRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { width: "0%" },
        {
          width: `${percentage}%`,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: barRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub:true,
          },
          onComplete: () => {
            gsap.fromTo(
              barRef.current,
              { scale: 1 },
              {
                scale: 1.05,
                yoyo: true,
                repeat: 1,
                duration: 0.3,
                ease: "bounce.out",
              }
            );
          },
        }
      );
    }, barRef);
    return () => ctx.revert();
  }, [percentage]);

  return (
    <div className="w-full bg-gray-800 rounded-full h-5 overflow-hidden shadow-neon-blue mt-3">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-neonBlue to-neonPurple"
        style={{ boxShadow: "0 0 8px #0ff, 0 0 18px #9f00ff" }}
      />
    </div>
  );
};

const ProgressBars = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center py-10">
      {skills.map((skill, idx) => (
        <div key={idx} className="text-center">
          <RadialProgress size={120} strokeWidth={8} percentage={skill.level} />
          <p className="mt-3 text-white font-semibold text-lg">{skill.name}</p>
          <LinearProgress percentage={skill.level} />
        </div>
      ))}
    </div>
  );
};

export default ProgressBars;

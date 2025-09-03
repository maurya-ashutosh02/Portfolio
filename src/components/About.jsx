import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import FluidCursor from "./FluidCursor";
const About = () => {
  const AboutDivRef = useRef(null);
  const ResumeDivRef = useRef(null);
  const DownloadBtn = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      AboutDivRef.current, // target
      { x: "50%", opacity: 0 }, // from
      {
        // to
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: AboutDivRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      ResumeDivRef.current,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 3,
        scrollTrigger: {
          trigger: ResumeDivRef.current,
          // when top of Resume hits 80% viewport height
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // useGSAP(()=>{
  //     gsap.fromTo(DownloadBtn.current,{

  //     })
  // })
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-16 w-full">
      <FluidCursor />
      {/* Left Side - About / Academics */}
      <div
        ref={AboutDivRef}
        className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
      >
        <h2 className="font-[font2] text-4xl lg:text-5xl font-bold text-white uppercase">
          About <span className="text-[#D3FD50]">Me</span>
        </h2>

        <p className="font-[font1] text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
          I am a passionate Computer Science student with a strong academic
          background. Currently pursuing my{" "}
          <span className="text-[#D3FD50] font-semibold">
            B.Tech in Computer Science
          </span>{" "}
          at Shri Ramswaroop Memorial College of Engineering and Management,
          Lucknow. I maintain consistency in both academics and coding practice,
          while also enjoying the process of learning new things. Beyond coding,
          I have a creative side in{" "}
          <span className="text-[#D3FD50] font-semibold">
            mobile photography
          </span>
          , where I capture and share moments through my lens. Most of my clicks
          are showcased on Instagram, reflecting my eye for detail and
          creativity.
        </p>

        {/* Academics */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">🎓 Academics</h3>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li>B.Tech CSE – SRMCEM, Lucknow (2022–2026)</li>
            <li>
              Intermediate (PCM) – Little flower Children School , Mau 2021
            </li>
            <li>High School – St. Francis School,Mau 2019</li>
          </ul>
        </div>

        {/* Coding */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">
            💻 Coding Consistency
          </h3>
          <p className="text-gray-300 text-base sm:text-lg">
            Practicing DSA in Java & competitive programming on{" "}
            <a
              href="https://leetcode.com/u/AshutoshMaurya02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D3FD50] font-medium underline hover:text-lime-400"
            >
              LeetCode
            </a>
            , solved{" "}
            <span className="font-semibold text-[#D3FD50]">400+ problems</span>.
          </p>
        </div>

        {/* Highlights */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">🌟 Highlights</h3>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li>Strong foundation in DSA</li>
            <li>Hands-on MERN stack projects</li>
            <li>
              Active participant in hackathons & contests on LeetCode to improve
              the coding Skills
            </li>
          </ul>
        </div>
      </div>

      {/*  Right Side - Resume */}
      <div
        ref={ResumeDivRef}
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 pt-6 lg:pt-0"
      >
        <h3 className="text-2xl font-semibold text-white">📄 Resume</h3>

        <a
          href="/resume.pdf"
          download="Ashutosh_Resume.pdf"
          className="px-6 py-3 bg-[#D3FD50] text-black font-bold rounded-2xl shadow-md hover:bg-lime-400 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;

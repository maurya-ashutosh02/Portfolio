import React, { useRef } from "react";
import FluidCursor from "../components/FluidCursor";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NeuralGlow from "../components/NeuralGlow";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // Sample projects array with detailed info for modal
  const projects = [
    {
      id: 1,
      title: "StaySync",
      description:
        "StaySync is a full-stack hotel booking platform I developed using the MERN stack on the backend, but instead of React, I built the frontend with HTML, CSS, and JavaScript for a more traditional web approach.",
      github: "https://github.com/maurya-ashutosh02/destiny_finder",
      live: "https://destiny-finder.onrender.com/listings",
      techStack: ["HTML", "CSS", "JS", "Mongodb", "Node", "Express"],
      image1:
        "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660487.jpg",
    },
    {
      id: 2,
      title: "Real time Chat-App",
      description:
        "I built a realtime chat app where authentication is handled with JWT tokens and messaging happens via Socket.io. Users can send messages instantly, join rooms, and the backend efficiently manages authentication and chat history.",
      github: "https://github.com/maurya-ashutosh02/Chat_App_Frontend",
      live: "https://chat-app-frontend-beta-five.vercel.app/",
      techStack: ["React","MongoDB","Tailwindcss","Express","Node","Socket.io","JWT Authentication"],
      image1:
        "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660487.jpg",
    },
    {
      id: 3,
      title: "Real time wheather prediction",
      description:
        "A react based real time wheather prediction ",
      github: "https://github.com/maurya-ashutosh02/React-Project",
      techStack: ["React", "TailwindCSS"],
      image1:
        "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660487.jpg",
    },
  ];

  const titleRef = useRef(null);

  // Project Title letter animation on mount
  useGSAP(() => {
    const letters = titleRef.current?.querySelectorAll("span");
    if (!letters) return;

    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(2)",
        color: () => {
          const colors = [
            "#D3FD50",
            "#FF6B6B",
            "#6BCB77",
            "#4D96FF",
            "#FFD93D",
          ];
          return colors[Math.floor(Math.random() * colors.length)];
        },
      }
    );
  }, []);

  // Scroll-triggered animations for project cards
  useGSAP(() => {
    gsap.from(".hero", {
      opacity: 0,
      y: 100,
      scaleY: 0.1,
      transformOrigin: "top center",
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".pitaji",
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <FluidCursor />
      <div className="p-4">
        <div className="pt-[20vh] sm:pt-[30vh] lg:pt-[45vh] text-center">
          <NeuralGlow />
          <h2
            ref={titleRef}
            className="font-[font2] text-[12vw] sm:text-[10vw] lg:text-[8vw] uppercase flex justify-center gap-2 cursor-default select-none"
          >
            {"Projects".split("").map((letter, idx) => (
              <span key={idx} className="inline-block">
                {letter}
              </span>
            ))}
          </h2>
        </div>

        <div className="mt-8 pitaji space-y-10 flex flex-wrap gap-6 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="hero w-full flex flex-col md:flex-row gap-4 mb-4 items-center justify-center"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

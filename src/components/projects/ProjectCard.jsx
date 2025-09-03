import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const ProjectCard = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);
  const detailRef = useRef(null);

  useEffect(() => {
    if (showDetail && detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [showDetail]);

  const handleClose = () => {
    gsap.to(detailRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => setShowDetail(false),
    });
  };

  if (!project) return null;

  return (
    <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] lg:h-[600px] relative transition-all rounded-none hover:rounded-[50px] overflow-hidden group flex items-center justify-center">
      {/* Main Card Content */}
      <img
        src={project.image1}
        alt={project.title}
        className="h-full w-full object-cover"
      />

      {/* Overlay Title */}
      <div className="absolute bg-[#D3FD50] rounded-full  top-4 left-4 text-black text-xl sm:text-2xl font-bold drop-shadow-lg">
        {project.title}
      </div>

      {/* View Details Button */}
      <div className="absolute bottom-4 left-4 opacity-100 md:opacity-0 md:group-hover:opacity-100">
        <button
          onClick={() => setShowDetail(true)}
          className="bg-[#D3FD50] px-6 py-2 rounded-full font-bold text-black shadow-lg hover:scale-105 transition cursor-pointer"
        >
          View Details
        </button>
      </div>

      {/* Overlay Description Card (Modal) */}
      {showDetail && (
        <div
          ref={detailRef}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <div className="w-full h-full bg-gray-900/95 rounded-2xl p-8 shadow-2xl flex flex-col justify-center items-center relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4 text-[#D3FD50]">
              {project.title}
            </h2>
            <p className="text-white text-lg text-center mb-6">
              {project.description}
            </p>

            {/* GitHub and Live demo links */}
            <div className="flex gap-4 mb-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
              >
                Live Demo
              </a>
            </div>

            {/* Tech Stack badges */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#D3FD50] text-black px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
import FluidCursor from "../components/FluidCursor";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Typed from "typed.js";
import About from "../components/About";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const typedRef = useRef(null);

  const imageArray = [
   image1,image5,image4,image2,image6
  ];

  useGSAP(() => {
    // 🔹 Image swap on scroll (already correct)
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 28%",
        end: "top -70%",
        scrub: 2,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });

    // 🔹 Responsive movement into page2
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop/tablet animation
      gsap.to(imageDivRef.current, {
        x: "50vw",
        y: window.innerHeight,
        scale: 1.2,
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#page2",
          start: "top 80%",
          end: "top -50%",
          scrub: true,
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile animation
      gsap.to(imageDivRef.current, {
        x: "6vw",
        y: window.innerHeight * 0.8,
        scale: 1,
        duration: 4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#page2",
          start: "top 90%",
          end: "top -30%",
          scrub: true,
        },
      });
    });

    return () => mm.revert(); // cleanup
  });

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["FullStack Developer", "Software Engineer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const btnRef = useRef(null);

  useEffect(() => {
    // Animate glow pulse continuously
    gsap.to(btnRef.current, {
      boxShadow: "0 0 20px #D3FD50, 0 0 40px #D3FD50",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  const handleHover = () => {
    // Scale up and intensify glow on hover
    gsap.to(btnRef.current, {
      scale: 1.1,
      boxShadow: "0 0 30px #D3FD50, 0 0 60px #D3FD50",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleHoverOut = () => {
    // Return to normal glow and scale
    gsap.to(btnRef.current, {
      scale: 1,
      boxShadow: "0 0 20px #D3FD50, 0 0 40px #D3FD50",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <>
      <div className="parent relative overflow-x-hidden">
        <FluidCursor />
        <div
          id="page1"
          className="relative box-border min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 gap-6  mb-3"
        >
          {/* Left Section - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              ref={imageDivRef}
              className="h-[50vw] w-full max-w-[45vw] sm:h-[30vw] sm:w-[50vw] lg:h-[28vw] lg:w-[20vw]

      rounded-4xl overflow-hidden shadow-xl border border-gray-400 "
            >
              <img
                ref={imageRef}
                className="h-full w-full object-cover"
                src={image6}
                alt="Profile Scroll Animation"
              />
            </div>
          </div>

          {/* Right Section - Text */}
          <div className="relative w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-300">
              Hello, It's me
            </h3>

            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[5vw] font-bold leading-tight">
              Ashutosh <span className="text-[#D3FD50]">Maurya</span>
            </h1>

            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold flex flex-wrap gap-2 justify-center lg:justify-start">
              And I'm a{" "}
              <span
                ref={typedRef}
                className="text-[#D3FD50] whitespace-nowrap"
              ></span>
              <span className="blinking-cursor">|</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              A passionate web developer with extensive experience in designing
              and building cutting-edge websites and applications. Expert in
              creating seamless, user-friendly, and fully responsive digital
              experiences that combine innovative design with robust, clean, and
              efficient code. Dedicated to delivering high-performance solutions
              that not only look stunning but also provide exceptional
              functionality and smooth user interactions. Committed to
              transforming ideas into elegant, scalable, and maintainable web
              applications that delight users and exceed expectations.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6 mt-6 justify-center lg:justify-start">
              <a
                href="https://www.facebook.com/maurya.ashutosh.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black transition"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.instagram.com/capture_.beauty_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black transition"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashutoshmaurya02/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black transition"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://github.com/maurya-ashutosh02"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black transition"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                ref={btnRef}
                className="bg-[#D3FD50] text-black text-sm sm:text-base font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg transition"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                Scroll Down
              </button>
            </div>
          </div>
        </div>

        <div
          id="page2"
          className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16"
        >
          {/* Left Side - About / Academics */}
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;

// components/ContactForm.js

import React, { useRef, useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegCommentDots,
} from "react-icons/fa";
import gsap from "gsap";
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import NeuralGlow from "../components/NeuralGlow";

const icons = {
  name: <FaUser />,
  email: <FaEnvelope />,
  phone: <FaPhoneAlt />,
  location: <FaMapMarkerAlt />,
  message: <FaRegCommentDots />,
};

function randomBubbleStyles() {
  const size = Math.random() * 60 + 40;
  const duration = Math.random() * 15 + 10;
  const left = Math.random() * 100;
  const opacity = Math.random() * 0.25 + 0.15;
  const color = `hsla(${Math.random() * 360},70%,70%,${opacity})`;
  return { size, duration, left, color };
}

export default function ContactForm() {
  // Reference for the form and button
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  // Bubble state
  const [bubbles] = useState(
    Array.from({ length: 14 }, () => randomBubbleStyles())
  );

  useEffect(() => {
    // Animate on mount
    gsap.from(formRef.current, {
      y: 50,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
    });
  }, []);

  // Input animation handlers
  function handleInputHover(e) {
    gsap.to(e.currentTarget, {
      scale: 1.03,
      boxShadow: "0 0 10px #d3fd50",
      borderColor: "#d3fd50",
      duration: 0.4,
      ease: "power2.out",
    });
  }
  function handleInputUnhover(e) {
    gsap.to(e.currentTarget, {
      scale: 1,
      boxShadow: "none",
      borderColor: "#fff3",
      duration: 0.4,
      ease: "power2.out",
    });
  }
  function handleInputFocus(e) {
    gsap.fromTo(
      e.currentTarget,
      { scale: 1.06 },
      { scale: 1, duration: 0.5, ease: "elastic.out(1,0.5)" }
    );
  }

  // Icon hover effect
  function handleIconHover(e) {
    gsap.to(e.currentTarget, {
      rotate: 18,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  }
  function handleIconUnhover(e) {
    gsap.to(e.currentTarget, {
      rotate: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  // Ripple effect on button
  function handleButtonClick(e) {
    const ripple = document.createElement("span");
    ripple.className = "absolute bg-[#D3FD50] rounded-full pointer-events-none";
    const parent = buttonRef.current;
    const rect = parent.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.3;
    const x = e.nativeEvent.offsetX - size / 2;
    const y = e.nativeEvent.offsetY - size / 2;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.opacity = 0.6;
    parent.appendChild(ripple);

    gsap.to(ripple, {
      scale: 2,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      onComplete: () => ripple.remove(),
    });
  }
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d77c99cb-347d-43dd-b811-e60be27a34a3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setStatus("Your message has been sent successfully!");
      event.target.reset();
    } else {
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div
        className="min-h-screen w-full flex items-center justify-center relative bg-[#0a1026] overflow-hidden
    "
      >
        <NeuralGlow />

        {/* Bubble background */}
        <div className="absolute w-full h-full top-0 left-0 z-0 pointer-events-none select-none">
          {bubbles.map((b, i) => (
            <span
              key={i}
              style={{
                width: `${b.size}px`,
                height: `${b.size}px`,
                left: `${b.left}%`,
                background: b.color,
                animation: `floatUp ${b.duration}s linear infinite`,
                bottom: `-${b.size}px`,
                opacity: b.opacity,
              }}
              className="rounded-full blur-md absolute"
            />
          ))}
          <style>
            {`@keyframes floatUp {
            0% { transform: translateY(0) scale(1);}
            100% { transform: translateY(-120vh) scale(1.2);}
          }`}
          </style>
        </div>

        {/* Glassmorphic Form */}
        <form
          onSubmit={onSubmit}
          ref={formRef}
          className="relative z-10 w-full max-w-lg p-8 md:p-12 rounded-2xl shadow-xl
        bg-white/10 backdrop-blur-3xl border border-white
        flex flex-col gap-6 items-stretch
        transition-all duration-300
        mx-2"
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">
            Contact Us
          </h2>
          {/* Name */}
          <div className="flex items-center relative border border-white/20 rounded-lg bg-white/10">
            <span
              className="pl-3 pr-1 py-2 text-xl text-[#fbfbfb] cursor-pointer transition-transform"
              tabIndex={-1}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconUnhover}
            >
              {icons.name}
            </span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="bg-transparent px-2 py-3 w-full rounded-lg text-white font-medium outline-none transition-all"
              onFocus={handleInputFocus}
              onMouseEnter={handleInputHover}
              onMouseLeave={handleInputUnhover}
            />
          </div>
          {/* Email */}
          <div className="flex items-center relative border border-white/20 rounded-lg bg-white/10">
            <span
              className="pl-3 pr-1 py-2 text-xl text-white cursor-pointer transition-transform"
              tabIndex={-1}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconUnhover}
            >
              {icons.email}
            </span>
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="bg-transparent px-2 py-3 w-full rounded-lg text-white font-medium outline-none transition-all"
              onFocus={handleInputFocus}
              onMouseEnter={handleInputHover}
              onMouseLeave={handleInputUnhover}
            />
          </div>
          {/* Contact Number */}
          <div className="flex items-center relative border border-white/20 rounded-lg bg-white/10">
            <span
              className="pl-3 pr-1 py-2 text-xl text-white cursor-pointer transition-transform"
              tabIndex={-1}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconUnhover}
            >
              {icons.phone}
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              className="bg-transparent px-2 py-3 w-full rounded-lg text-gray-200 font-medium outline-none transition-all"
              onFocus={handleInputFocus}
              onMouseEnter={handleInputHover}
              onMouseLeave={handleInputUnhover}
            />
          </div>
          {/* Location */}
          <div className="flex items-center relative border border-white/20 rounded-lg bg-white/10">
            <span
              className="pl-3 pr-1 py-2 text-xl text-white cursor-pointer transition-transform"
              tabIndex={-1}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconUnhover}
            >
              {icons.location}
            </span>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="bg-transparent px-2 py-3 w-full rounded-lg text-gray-200 font-medium outline-none transition-all"
              onFocus={handleInputFocus}
              onMouseEnter={handleInputHover}
              onMouseLeave={handleInputUnhover}
            />
          </div>
          {/* Message */}
          <div className="flex items-start relative border border-white/20 rounded-lg bg-white/10">
            <span
              className="pl-3 pt-3 text-xl text-[#fffffe] cursor-pointer transition-transform"
              tabIndex={-1}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconUnhover}
            >
              {icons.message}
            </span>
            <textarea
              name="message"
              required
              placeholder="Type your message"
              rows={3}
              className="bg-transparent px-2 py-3 w-full rounded-lg text-gray-200 font-medium outline-none resize-none transition-all"
              onFocus={handleInputFocus}
              onMouseEnter={handleInputHover}
              onMouseLeave={handleInputUnhover}
            />
          </div>
          {/* Submit Button */}
          <div className="relative mt-2 flex items-center justify-center">
            <button
              type="submit"
              ref={buttonRef}
              className="relative overflow-hidden flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#d3fd50] text-[#080c21] font-bold uppercase shadow-lg
            focus:outline-none text-lg
            transition-all duration-200 hover:bg-[#e8ff9d] active:scale-95 m-4"
              onClick={handleButtonClick}
            >
              Send Message
            </button>
            <div className="mt-2 flex items-center justify-center gap-4">
              {[
                {
                  icon: <FaFacebookF />,
                  color: "#0866FF",
                  href: "https://www.facebook.com/maurya.ashutosh.2025",
                  label: "Facebook",
                },
                {
                  icon: <FaInstagram />,
                  color: "#0866FF",
                  href: "https://www.instagram.com/capture_.beauty_",
                  label: "Facebook",
                },

                {
                  icon: <FaGithub />,
                  color: "#000000",
                  href: "https://github.com/maurya-ashutosh02",
                  label: "GitHub",
                },
              ].map((social, idx) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.15,
                      boxShadow: `0 0 14px 3px ${social.color}`,
                      duration: 0.4,
                      ease: "power2.out",
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      boxShadow: "none",
                      duration: 0.4,
                      ease: "power2.out",
                    });
                  }}
                >
                  <span
                    className="flex items-center justify-center w-12 h-12 bg-white/15 text-2xl rounded-full
        transition-colors duration-200 text-white border border-white/20 shadow-lg
        group-hover:text-white"
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          {status && (
            <p className="text-center text-sm text-green-400 font-medium mt-2">
              {status}
            </p>
          )}
        </form>
      </div>
    </>
  );
}

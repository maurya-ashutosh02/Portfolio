import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterHeader = ({ text }) => {
  return (
    <h2 className="text-4xl font-bold mb-8 text-neonPurple drop-shadow-neon">
      <Typewriter
        options={{
          strings: [text],
          autoStart: true,
          loop: true,
          delay: 80,
          cursor: '|',
        }}
      />
    </h2>
  );
};

export default TypewriterHeader;

import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font2] pt-10 text-center text-white">
      {/* Top Line */}
      <div className="text-[9vw] uppercase leading-[8vw] flex justify-center items-center">
        Hi, I am
      </div>

      {/* Name with Video in between */}
      <div className="text-[9vw] uppercase leading-[8vw] flex justify-center items-center gap-4">
        Ashutosh
        <div className="h-[6vw] w-[15vw] rounded-full -mt-5  overflow-hidden shadow-lg">
          <Video />
        </div>
        Maurya
      </div>

      
    </div>
  );
};

export default HomeHeroText;

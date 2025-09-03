import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-75 flex items-center border-white px-10 rounded-full uppercase">
        <Link className="text-[4.5vw] mt-4" to="/Home">
          About Me
        </Link>
      </div>
      <div className="border-4 hover:border-[#D3FD50] hover:text-[#D3FD50]  h-75 flex items-center border-white px-10 rounded-full uppercase">
        <Link className="text-[4.5vw] mt-4" to="/projects">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;

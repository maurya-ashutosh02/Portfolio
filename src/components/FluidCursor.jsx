// src/components/FluidCursor.jsx
import React, { useEffect, useRef } from "react";
import useFluidCursor from "../hooks/useFluidCursor";
const FluidCursor = () => {
  const canvasRef = useRef(null);

  useEffect(()=>{
    useFluidCursor();
  },[]);

  return (
    <canvas
      ref={canvasRef}
      id="fluid"
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default FluidCursor;

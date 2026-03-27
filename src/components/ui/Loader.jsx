import React from "react";

const Loader = ({ fullScreen = true, text = "Loading..." }) => {
  return (
    <div
      className={`
        ${fullScreen ? "fixed inset-0" : "w-full h-full"}
        flex flex-col items-center justify-center
        bg-[var(--bg)] z-50
      `}
    >
      {/* Spinner */}
      <div className="relative w-16 h-16">
        
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-border"></div>

        {/* Animated Gradient Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-secondary animate-spin"></div>

        {/* Inner Glow */}
        <div className="absolute inset-2 rounded-full bg-surface backdrop-blur-md"></div>
      </div>

      {/* Text */}
      <p className="mt-4 text-textSecondary text-sm tracking-wide animate-pulse">
        {text}
      </p>
    </div>
  );
};

export default Loader;
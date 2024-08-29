import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <a
        href="/"
        className="w-12 h-12 bg-dark text-light flex items-center justify-center
      rounded-full text-lg font-bold font-sans"
      >
        WG<span className="text-green-700">.</span>
      </a>
    </div>
  );
};

export default Logo;

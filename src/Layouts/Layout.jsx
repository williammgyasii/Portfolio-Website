import React from "react";

const Layout = ({ children, className }) => {
  return (
    <div
      className={`w-full w-screen h-full min-h-screen flex items-center block bg-primaryDark p-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;

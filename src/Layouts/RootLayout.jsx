import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default RootLayout;

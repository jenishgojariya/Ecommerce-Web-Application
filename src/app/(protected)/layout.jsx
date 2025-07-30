import { Navbar } from "@/components";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="p-4">
      <Navbar />
      <div className="px-1">{children}</div>
    </div>
  );
};

export default layout;

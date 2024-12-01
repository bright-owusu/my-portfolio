import React, { useState, useEffect} from "react";

const Sidebar = () => {
  

  return (
    <aside className="flex-none w-1/5 hidden s-1280:block h-full flex-col p-4 bg-sidebar">
      <h1 className="montserrat-bold text-3xl">Bright</h1>
      <nav className="flex flex-col mt-10 space-y-4">
        {[
          "Home",
          "About",
          "Skills",
          "Experience",
          "Projects",
          "Certifications",
          "Contact",
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="montserrat-md text-sm font-light hover:text-yellow-400 transition"
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

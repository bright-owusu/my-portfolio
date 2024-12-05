import React, { useEffect, useState} from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-primary backdrop-blur-sm text-white s-1280:hidden">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-10">
        <h1 className="text-2xl font-serif">Bright</h1>
        <ul className="hidden montserrat-thin tracking-wide space-x-6 text-sm s-768:flex">
          {[
            "Home",
            "About",
            "Skills",
            "Experience",
            "Projects",
            "Certifications",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="s-768:hidden">
          <span class="material-symbols-outlined">menu</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;

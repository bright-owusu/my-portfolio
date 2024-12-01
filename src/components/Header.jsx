import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-dark-primary backdrop-blur-sm text-white">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-10">
        <h1 className="text-2xl font-serif">Bright</h1>
        <ul className="flex montserrat-thin tracking-wide space-x-6 text-sm">
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
      </nav>
    </header>
  );
};

export default Header;

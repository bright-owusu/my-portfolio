import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

function App() {
  // DELETE THIS
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="h-screen w-full flex text-white bg-dark-primary">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-none w-full s-1280:w-4/5 text-black overflow-y-auto">
        <div className="fixed z-20 top-0 text-white bg-black">Window size: {windowSize.width} x {windowSize.height}</div>
        <Hero />
        {/* <Hero /> */}
        {/* ... */}
      </main>
    </div>
  );
}

export default App;

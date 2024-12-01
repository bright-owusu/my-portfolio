import React, { useState, useEffect } from "react";
import Header from "./components/Header";
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
    <div className="absolute w-full h-full text-white">
      <Header />
      <Hero />
      <div className="absolute text-white">Window size: {windowSize.width} x {windowSize.height}</div> 
    </div>
  );
}

export default App;

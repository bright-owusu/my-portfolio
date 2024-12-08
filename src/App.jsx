import React, { useState, useEffect } from "react";
import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // DELETE THIS =======================================================
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
  // ===================================================================  


  return (
    // <div className="h-screen w-full flex text-white bg-dark-primary">
    //   {/* Sidebar */}
    //   {/* <Sidebar /> */}

    //   {/* Main Content */}
    //   <main className="flex-none w-full text-black overflow-y-auto">
    //     <Header />
    //     {/* <div className="fixed z-20 s-1280:top-0 s-1280:right-0 top-16 right-0 text-white bg-black p-2">
    //       Window size: {windowSize.width} x {windowSize.height} {' - '}
    //       This website is under development
    //     </div> */}
    //     {/* <Hero /> */}
    //   </main>
    // </div>
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </>
    
  );
}

export default App;

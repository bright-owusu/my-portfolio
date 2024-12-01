import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../assets/banner-img.png";
import profileImage from "../assets/profile-img.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col h-screen w-full text-white justify-center text-center bg-dark-blue-prim"
    >
      {/* Banner Image */}
      <motion.div
        className="absolute top-0 z-0 w-full h-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={bannerImage}
          alt="Hero Banner"
          className="object-cover w-full h-full"
        />
      </motion.div>

      <div className="flex flex-wrap s-884:flex-nowrap z-10 justify-center s-884:gap-10 gap-5 s-884:px-10 s-680:px-24 s-320:px-5">
        {/* Profile Picture */}
        <motion.div
          className="flex-none s-884:h-[600px] s-768:h-[400px] s-320:h-[300px] transform -translate-y-[-50%] rounded-full overflow-hidden border-8 border-dark-blue-prim"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex flex-col gap-4 justify-center">
          {/* Name and Titles */}
          <motion.div
            className="s-884:text-left space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div
              id="name"
              className="righteous-regular tracking-wider s-972:text-6xl s-900:text-5xl s-740:text-4xl s-320:text-4xl"
            >
              Bright Owusu
            </div>
            <div className="montserrat-bold tracking-wider s-740:text-sm s-320:text-xs text-gray-300">
              DevOps Engineer | Cloud Enthusiast | AWS Certified Cloud
              Practitioner
            </div>
          </motion.div>

          {/* Intro Text */}
          <motion.div
            id="intro-text"
            className="montserrat-thin tracking-wider text-left space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="leading-normal s-320:text-sm">
              A passionate DevOps Engineer and software enthusiast with over six
              years of experience in oil and gas operations and over two years
              in DevOps and Cloud Computing.
            </div>
            <div className="leading-normal s-320:text-sm">
              My journey from the oil and gas industry to the world of DevOps
              and Cloud Computing reflects my love for innovation and
              problem-solving. I thrive at the intercession of cutting-edge
              technology and creative solutions, leveraging tools like Docker,
              Kubernetes, and Terraform to build impacful software systems.
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex montserrat-bold text-xs font-secondary tracking-wider space-x-4 mt-2 s-320:justify-center s-1220:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button className="px-6 py-2 border border-secondary rounded-lg hover-bg-secondary hover:text-black transition">
              View Resume
            </button>
            <button className="px-6 py-2 border border-secondary rounded-lg hover-bg-secondary hover:text-black transition">
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

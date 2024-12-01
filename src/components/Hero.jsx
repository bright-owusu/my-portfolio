import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../assets/banner-img.png";
import profileImage from "../assets/profile-img.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-full w-full top-0 bg-dark-primary text-white flex flex-col items-center text-center px-0 absolute"
    >
      {/* Banner Image */}
      <motion.div
        className="relative w-full s-1036:h-[250px] s-740:h-[200px] overflow-hidden pt-16"
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

      {/* Profile Picture (Overlapping Banner) */}
      <motion.div
        className="absolute transform -translate-y-[-50%] s-320:top-[10%] s-740:left-[40%] s-768:left-[35%] s-740:top-[13%] s-768:top-[13%] s-1024:left-[40%] s-1024:top-[13%] s-1036:left-[40%] s-1036:top-[13%] s-1220:left-[5%] s-1350:left-[8%] s-1450:left-[10%] s-1530:left-[8%] s-1540:left-[10%] top-[20%] lg:top-[20%] rounded-full overflow-hidden w-36 s-768:h-72 s-768:w-auto s-1220:h-3/4 ipad-pro-12.9:h-3/4 ipad-pro-12.9:w-auto border-8 border-dark-primary"
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

      <div className="s-1220:absolute s-320:items-center s-320:justify-center s-320:mt-36 s-768:mt-48 s-1036:mt-40 s-1220:mt-0 s-1540:max-w-3xl s-1530:max-w-3xl s-1450:max-w-3xl s-1350:max-w-2xl s-1220:max-w-2xl top-[40%] left-[40%]">
        {/* Name and Titles */}
        <motion.div
          className="text-left space-y-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div
            id="name"
            className="righteous-regular tracking-wider text-6xl s-320:text-3xl s-500:text-4xl s-740:text-6xl font-bold s-320:text-center s-1220:text-left s-1220:px-0"
          >
            Bright Owusu
          </div>
          <div className="montserrat-bold tracking-wider text-sm s-320:text-xxs s-500:text-xs text-gray-300 s-320:text-center s-1036:px-60 s-1220:text-left s-1220:px-0">
            DevOps Engineer | Cloud Enthusiast | AWS Certified Cloud
            Practitioner
          </div>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          id="intro-text"
          className="montserrat-thin tracking-wider text-left space-y-4 mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="mx-auto s-320:text-xs s-320:px-3 s-500:text-sm s-500:px-3 s-740:px-28 s-768:px-28 s-1024:px-60 s-1036:px-60 s-1220:px-0">
            A passionate DevOps Engineer and software enthusiast with over six
            years of experience in oil and gas operations and over two years in
            DevOps and Cloud Computing.
          </div>
          <div className="mx-auto s-320:text-xs s-320:px-3 s-500:text-sm s-500:px-3 s-740:px-28 s-768:px-28 s-1024:px-60 s-1036:px-60 s-1220:px-0">
            My journey from the oil and gas industry to the world of DevOps and
            Cloud Computing reflects my love for innovation and problem-solving.
            I thrive at the intercession of cutting-edge technology and creative
            solutions, leveraging tools like Docker, Kubernetes, and Terraform
            to build impacful software systems.
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex montserrat-bold text-xs font-secondary tracking-wider space-x-4 mt-7 s-320:justify-center s-1220:justify-start"
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
    </section>
  );
};

export default Hero;

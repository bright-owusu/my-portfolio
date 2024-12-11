import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/images/profile-img.webp";
import avatar from "../assets/images/avatar.jpg";

import { ButtonPrimary, ButtonOutline } from "./Button";

const heroHeadlines = [
  "DevOps Engineer",
  "Cloud Enthusiast",
  "AWS Certified Cloud Practitioner",
];

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-10 lg:place-items-center">
        <div>
          <div className="flex items-center gap-3 lg:hidden mb-2">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <figure className="img-box w-9 h-9 rounded-lg">
                <img
                  src={avatar}
                  width={40}
                  height={40}
                  alt="Bright Owusu portrait"
                  className=""
                />
              </figure>
            </motion.div>
            

            <motion.div 
              className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <h1>Bright Owusu</h1>
            </motion.div>
          </div>

          <motion.div 
            className="righteous-regular tracking-wider text-sky-400 text-[4rem] hidden lg:block"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Bright Owusu
          </motion.div>

          <motion.div 
            className="max-w-max leading-tight font-semibold text-[2rem] lg:text-[3rem] mb-8 lg:mb-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {
              heroHeadlines.map((headline, index) => (
                <div key={index} className="flex lg:mb-1">
                  <div className="material-symbols-rounded h-10 w-10 text-[1.5rem] lg:text-[2rem] font-bold text-sky-400 animate-pulse mt-[10px] lg:mt-4 pr-3" aria-hidden="true">
                    chevron_right
                  </div> 
                  <div>
                    {headline}
                  </div>
                </div>
              ))
            }
          </motion.div>

          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ButtonPrimary label="Download CV" icon="download" classes="flex" />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
              classes="flex"
            />
          </motion.div>
        </div>

        <motion.div 
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <figure className="w-[85%] max-w-[480px] ml-auto rounded-2xl">
            <img
              src={profileImg}
              alt="Bright Owusu portrait"
              className="img-cover rounded-full ring-[5px] ring-zinc-50/10"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

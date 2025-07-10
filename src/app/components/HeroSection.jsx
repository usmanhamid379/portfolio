"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [rotate, setRotate] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setRotate(!rotate)
    }, 4000)
  }, [rotate])
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-6 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="text-white mb-4 text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-8xl 
          lg:leading-normal font-extrabold lg:h-[140px] xl:h-[190px]">
            <TypeAnimation
              sequence={[
                "Hello, I am Usman",
                1000,
                "A Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a MERN stack developer with 2 years of professional experience, proficient in creating scalable 
            web applications and skilled in optimizing performance for enhanced user experiences.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <div
              href="/"
              className={`px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500
               to-secondary-500 hover:bg-slate-800 text-white mt-3 hover:cursor-pointer
               `}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              onClick={()=>{
                // window.open(`/cv/usman_cv.pdf`, '_blank')
                window.open(`/cv/CV_USMAN.docx`, '_blank')
              }}
              >
                Check CV
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-6 place-self-center mt-4 lg:mt-0"
        >
          <div className={`rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative 
          flex justify-center items-center duration-300 ease-in-out transition-all
          ${rotate?"[transform:rotateY(180deg)]"
          :"[ransform:rotateY(180deg)]"}
           `}>
            {
              rotate ? 
              <Image
              src="/images/avatar.avif"
              alt="hero image"
              className={` duration-300 ease-in-out transition-all rounded-full w-[180px] h-[180px] lg:w-[330px] lg:h-[330px]`}
              width={300}
              height={300}
            />
            :
            <Image
              src="/images/about-image.png"
              alt="hero image"
              className={`rounded-full duration-300 ease-in-out transition-all  w-[180px] h-[180px] lg:w-[330px] lg:h-[330px]`}
              width={300}
              height={300}
            />
            }
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

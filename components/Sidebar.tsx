
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from 'react';

import cn from 'clsx';




const Sidebar = (props) => {
  const { theme, setTheme } = useTheme();
  const [isLoading, setLoading] = useState(true);



  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

  };

  return (
    <>
      <Image
        src="/images/me.jpg"
        alt="avatar"
        height="128px"
        width="128px"
        layout="intrinsic"
        loading="lazy"
        quality={100}
        {...props}
        className={cn(
          props.className,
          'duration-1000 ease-in-out mx-auto rounded-full',
          isLoading
            ? 'grayscale blur-2xl scale-110 rounded-full'
            : 'grayscale-0 blur-0 scale-100 rounded-full'
        )}
        onLoadingComplete={() => setLoading(false)}
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Reza</span> Esmaili
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Front-end web developer
      </p>
      {/* Resume */}
      <a
        href="Reza-Esmaili-Resume.pdf"
        download="Reza Esmaili Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://wa.me/989372662709">
          <AiOutlineWhatsApp className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/reza-esmaili/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/esmailireza">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="px-2 py-4 my-4 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mb-1 mr-2" /> <span>Iran</span>
        </div>
        <p className="mx-2 mb-1"> esmailireza20@gmail.com </p>
        <p className="mx-2 mb-1"> +989372662709 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:esmailireza20@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        {/* {theme === "light" ? <span>UI Dark</span> : <span>UI Light</span>} */}
        <span>Change UI</span>

      </button>
    </>
  );
};

export default Sidebar;

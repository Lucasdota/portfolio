import Javascript from "../../public/javascript.svg";
import Typescript from "../../public/typescript.svg";
import Java from "../../public/java.svg";
import Git from "../../public/git.svg";
import SpringBoot from "../../public/spring.svg";
import JWT from "../../public/jwt.svg";
import PostgreSQL from "../../public/postgresql.svg";
import Tooltip from "@mui/material/Tooltip";
import Profile from "../../public/profile.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "../../public/react.svg";
import { useState } from "react";

const Hero = () => {
	const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  return (
    <motion.div
      className="w-full mb-12"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl 3xl:text-5xl font-extrabold mx-auto tracking-wider antialiased name font-poppins">
          Lucas Dota
        </h2>
        <div
          id="prof-pic"
          className="w-52 h-52 3xl:w-64 3xl:h-64 mx-auto rounded-full p-1 bg-gradient-to-b from-[#3c88a7] to-[#ca8e8e] relative"
        >
          <Image
            src={Profile}
            alt="profile pic"
            width={760}
            height={760}
            priority
            loading="eager"
            onLoad={() => setImgLoaded(true)}
            className="rounded-full w-full h-full"
          />
          {/* skeleton */}
          {!imgLoaded && (
            <motion.div className="absolute top-0 left-0 w-full h-full rounded-full animate-pulse bg-gradient-to-br from-neutral-300 to-neutral-400 dark:from-neutral-700 dark:to-neutral-850" />
          )}
        </div>
        <p className="text-center text-[0.95rem] 3xl:text-lg 3xl:py-3 py-2 border dark:border-neutral-600 rounded-lg border-dashed border-neutral-400 antialiased px-2">
          Hello, I&apos;m a developer based in São Paulo, Brazil.
        </p>
        <ul id="tech-stack" className="flex gap-5 3xl:gap-6 flex-wrap">
          <h3 className="font-bold text-xl 3xl:text-2xl antialiased">
            TECH STACK:
          </h3>
          <li className="bg-white dark:bg-slate-200 rounded">
            <Tooltip title="Java" arrow>
              <Image
                src={Java}
                alt="java icon"
                className="w-7 h-7 3xl:w-8 3xl:h-8"
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Spring Boot" arrow>
              <Image
                src={SpringBoot}
                alt="spring boot icon"
                className="w-7 h-7 3xl:w-8 3xl:h-8"
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="JWT" arrow>
              <Image
                src={JWT}
                alt="JWT icon"
                className="w-7 h-7 3xl:w-8 3xl:h-8 p-0.5"
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="PostgreSQL">
              <Image
                src={PostgreSQL}
                alt="postgres icon"
                className="w-7 h-7 3xl:w-8 3xl:h-8 p-0.5"
              />
            </Tooltip>
          </li>
          <li className="group relative">
            <Tooltip title="React" arrow>
              <Image
                src={React}
                alt="react icon"
                className="w-7 h-7 3xl:w-8 3xl:h-8"
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Typescript" arrow>
              <Image
                src={Typescript}
                alt="typescript icon"
                className="w-7 h-7 3xl:w-8 3xl:h-8"
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Javascript" arrow>
              <Image
                src={Javascript}
                alt="javascript icon"
                className="w-6 h-7 3xl:w-7 3xl:h-8"
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Git" arrow>
              <Image
                src={Git}
                alt="git icon"
                className="w-7 h-7 3xl:w-8 3xl:h-8"
              />
            </Tooltip>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Hero;

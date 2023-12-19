import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import quote from "../../../public/projects/quote-ss.webp";
import { TbSeparatorVertical } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Quote = () => {
	const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <Link
        href="https://nextjs-random-quote-gamma.vercel.app/"
        target="_blank"
        className="relative overflow-hidden w-fit h-fit flex justify-center rounded-xl"
      >
        <Image
          src={quote}
          alt="quote website frontpage screenshot"
          width={1024}
          height={490}
          priority
          loading="eager"
          className={`rounded-xl aspect-[16/8] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition duration-300 ease-in-out border ${
            hovered
              ? "dark:border-neutral-850 border-transparent"
              : "border-transparent"
          }`}
        />

        {/* overlay */}
        <motion.div
          className={`w-full h-full flex flex-col xl:hidden items-center justify-center rounded-xl absolute bg-black/70 transition-opacity ease-in-out duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          } border dark:border-neutral-850 border-transparent`}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <motion.h3
            className={`text-slate-50 tracking-wider`}
            animate={{
              y: hovered ? "0%" : "100%",
              opacity: hovered ? 1 : 0,
              transition: { delay: hovered ? 0.2 : 0.1 },
            }}
          >
            Quote Generator
          </motion.h3>

          <motion.div
            className="text-sm xs:text-[0.8rem] flex gap-2"
            animate={{
              y: hovered ? "0%" : "100%",
              opacity: hovered ? 1 : 0,
              transition: { delay: hovered ? 0.3 : 0 },
            }}
          >
            <p className="text-lime-300">#nextjs</p>
            <p className="text-amber-300">#react</p>
            <p className="text-sky-300">#tailwindcss</p>
          </motion.div>
        </motion.div>

        {/* mobile overlay */}
        <div className="w-full hidden h-full xl:flex flex-col items-center justify-center rounded-xl absolute bg-black/70 border dark:border-neutral-850 border-transparent">
          <h3 className="text-slate-50 tracking-wider">Quote Generator</h3>

          <div className="text-sm xs:text-[0.8rem] flex gap-2">
            <p className="text-lime-300">#nextjs</p>
            <p className="text-amber-300">#react</p>
            <p className="text-sky-300">#tailwindcss</p>
          </div>
        </div>
      </Link>

      {/* links */}
      <div className="flex items-center gap-6 shrink-0 text-sm">
        <div className="flex items-center gap-1.5">
          <Link
            aria-label="go to gymit website"
            target="_blank"
            href="https://nextjs-random-quote-gamma.vercel.app/"
            className="underline dark:decoration-neutral-300 decoration-neutral-500 underline-offset-2 dark:hover:text-green-400 dark:hover:decoration-green-400 dark:active:decoration-green-600 dark:active:text-green-600 hover:decoration-green-600 active:decoration-green-800 hover:text-green-600 active:text-green-800 px-1"
          >
            Website
          </Link>
          <CgWebsite />
        </div>
        <TbSeparatorVertical />
        <div className="flex items-center gap-1.5">
          <FaGithub />
          <Link
            aria-label="go to gymit github repository"
            target="_blank"
            href="https://github.com/Lucasdota/react_random_quote"
            className="underline dark:decoration-neutral-300 decoration-neutral-500 underline-offset-2 dark:hover:text-green-400 dark:hover:decoration-green-400 dark:active:decoration-green-600 dark:active:text-green-600 hover:decoration-green-600 active:decoration-green-800 hover:text-green-600 active:text-green-800 px-1"
          >
            Repository
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Quote;

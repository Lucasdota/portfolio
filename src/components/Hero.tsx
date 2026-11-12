import Javascript from "../../public/javascript.svg";
import Typescript from "../../public/typescript.svg";
import Shopify from "../../public/shopify.svg";
import Git from "../../public/git.svg";
import ReactIcon from "../../public/react.svg";
import Tooltip from "@mui/material/Tooltip";
import Profile from "../../public/profile.webp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Card from "@/components/ui/Card";

const techStack = [
  { name: "Shopify", icon: Shopify },
  { name: "React", icon: ReactIcon },
  { name: "Typescript", icon: Typescript },
  { name: "Javascript", icon: Javascript },
  { name: "Git", icon: Git },
];

const Hero = () => {
	const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  return (
    <Card delay={0.45}>
      <div className="flex items-center gap-6 sm:flex-col sm:gap-4 sm:text-center">
        <div
          id="prof-pic"
          className="profile-ring relative h-32 w-32 3xl:h-40 3xl:w-40 shrink-0 rounded-full p-[3px]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-850">
            <Image
              src={Profile}
              alt="profile pic"
              width={760}
              height={760}
              priority
              loading="eager"
              onLoad={() => setImgLoaded(true)}
              className="h-full w-full object-cover"
            />
            {/* skeleton */}
            {!imgLoaded && (
              <motion.div className="absolute top-0 left-0 w-full h-full rounded-full animate-pulse bg-gradient-to-br from-neutral-300 to-neutral-400 dark:from-neutral-700 dark:to-neutral-850" />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1 sm:items-center">
          <p className="text-sm 3xl:text-lg text-neutral-500 dark:text-neutral-400">
            Hello, I&apos;m
          </p>
          <h3 className="text-3xl sm:text-2xl 3xl:text-4xl font-extrabold tracking-wide antialiased name font-poppins leading-tight">
            Lucas Dota
          </h3>
          <p className="text-base 3xl:text-xl text-neutral-600 dark:text-neutral-300">
            a developer based in São Paulo, Brazil.
          </p>
          <Link
            href="/experience"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg border border-dashed border-neutral-400 dark:border-neutral-600 px-2.5 py-0.5 text-sm transition-colors duration-200 hover:border-green-600/60 hover:text-green-700 dark:hover:border-green-500/50 dark:hover:text-green-400 group/now"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Currently at <strong className="font-bold">Econverse</strong>
            <FiArrowRight className="transition-transform duration-200 group-hover/now:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* HR */}
      <div role="separator" className="my-5 w-full h-[1px] bg-neutral-300 dark:bg-neutral-700" />

      <div id="tech-stack" className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:justify-center">
        <h3 className="text-xs 3xl:text-base font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          Tech stack
        </h3>
        <ul className="flex flex-wrap gap-2.5">
          {techStack.map(({ name, icon }) => (
            <li key={name}>
              <Tooltip title={name} arrow>
                <span className="flex h-11 w-11 3xl:h-14 3xl:w-14 items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-white/5 transition duration-200 hover:-translate-y-1 hover:border-green-600/50 dark:hover:border-green-500/40">
                  <Image
                    src={icon}
                    alt={`${name.toLowerCase()} icon`}
                    className="h-6 w-6 3xl:h-8 3xl:w-8"
                  />
                </span>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Hero;

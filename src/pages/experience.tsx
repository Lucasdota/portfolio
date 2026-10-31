import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";
import { useRef, type ReactNode } from "react";
import {
  FaShopify,
  FaPlug,
  FaCogs,
  FaCubes,
  FaFilter,
  FaCodeBranch,
} from "react-icons/fa";
import ExperienceCard from "@/components/experience/ExperienceCard";

// same palette used for technologies in the projects page
const colors = {
  shopify: "text-green-700 dark:text-green-300",
  liquid: "text-blue-700 dark:text-blue-300",
  javascript: "text-yellow-700 dark:text-yellow-300",
  html: "text-orange-700 dark:text-orange-300",
  css: "text-sky-700 dark:text-sky-300",
  erp: "text-pink-700 dark:text-pink-300",
  git: "text-red-700 dark:text-red-300",
  github: "text-purple-700 dark:text-purple-300",
};

const Keyword = ({ className, children }: { className: string; children: ReactNode }) => (
  <strong className={`font-bold whitespace-nowrap ${className}`}>{children}</strong>
);

const experiences = [
  {
    company: "Econverse",
    role: "Junior Frontend Developer",
    startDate: new Date(2025, 1),
    highlights: [
      {
        icon: FaShopify,
        content: (
          <>
            Develop and customize Shopify themes using{" "}
            <Keyword className={colors.liquid}>Liquid</Keyword>,{" "}
            <Keyword className={colors.javascript}>JavaScript</Keyword>,{" "}
            <Keyword className={colors.html}>HTML</Keyword>, and{" "}
            <Keyword className={colors.css}>CSS</Keyword>.
          </>
        ),
      },
      {
        icon: FaPlug,
        content: (
          <>
            Design and implement integrations between{" "}
            <Keyword className={colors.shopify}>Shopify stores</Keyword> and{" "}
            <Keyword className={colors.erp}>ERP systems</Keyword> to meet each
            client&apos;s specific business requirements.
          </>
        ),
      },
      {
        icon: FaCogs,
        content: (
          <>
            Develop <Keyword className={colors.shopify}>Shopify Apps</Keyword>{" "}
            to automate processes and extend platform functionality.
          </>
        ),
      },
      {
        icon: FaCubes,
        content: (
          <>
            Build dynamic sections and configurable blocks using the{" "}
            <Keyword className={colors.shopify}>Shopify Theme Editor</Keyword>.
          </>
        ),
      },
      {
        icon: FaFilter,
        content: (
          <>
            Implement collection filtering, search logic, validations, and
            customized shopping experiences.
          </>
        ),
      },
      {
        icon: FaCodeBranch,
        content: (
          <>
            Collaborate in a team environment using{" "}
            <Keyword className={colors.shopify}>Shopify CLI</Keyword>,{" "}
            <Keyword className={colors.git}>Git</Keyword>, and{" "}
            <Keyword className={colors.github}>GitHub</Keyword> while following
            version control best practices.
          </>
        ),
      },
    ],
    technologies: [
      { name: "Shopify", className: colors.shopify },
      { name: "Liquid", className: colors.liquid },
      { name: "JavaScript", className: colors.javascript },
      { name: "HTML", className: colors.html },
      { name: "CSS", className: colors.css },
      { name: "Shopify CLI", className: colors.shopify },
      { name: "Git", className: colors.git },
      { name: "GitHub", className: colors.github },
    ],
  },
];

const Experience = () => {
  const timeline = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timeline,
    offset: ["start end", "end end"],
  });
  // springs from 0 on load, so the line draws itself even when the page doesn't scroll
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <>
      <Head>
        <title>Portfolio | Experience</title>
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-between px-8 pt-24 pb-8 md:px-6 xs:px-2">
        <motion.article
          className="max-w-lg w-[32rem] sm:w-full flex flex-col justify-center gap-12"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          variants={{
            exit: { opacity: 0, y: 10 },
          }}
        >
          <motion.h2
            className="text-4xl sm:text-2xl font-extrabold mx-auto tracking-wider antialiased name font-poppins text-center"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Experience
          </motion.h2>

          {/* TIMELINE */}
          {/* right padding mirrors the gap left of the timeline line on small screens */}
          <div ref={timeline} className="relative mb-12 sm:pr-[1.125rem]">
            <div className="absolute top-[2.9rem] sm:top-[2.4rem] bottom-2 left-6 w-[0.25rem] rounded-lg bg-neutral-300 dark:bg-neutral-700" />
            <motion.div
              style={{ scaleY }}
              className="absolute top-[2.9rem] sm:top-[2.4rem] bottom-2 left-6 w-[0.25rem] rounded-lg bg-secondary origin-top"
            />
            <ul className="ml-[3.01rem] flex flex-col gap-10">
              {experiences.map((experience) => (
                <ExperienceCard key={experience.company} {...experience} />
              ))}

              {/* STARTING POINT */}
              <motion.li
                className="relative flex h-4"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="relative -left-[1.88rem] h-4 w-4 shrink-0 rounded-full border-[3px] border-secondary bg-neutral-200 dark:bg-neutral-850" />
                <p className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm xs:text-xs text-neutral-500 dark:text-neutral-400">
                  2023 · Started learning how to code
                </p>
              </motion.li>
            </ul>
          </div>
        </motion.article>
      </section>
    </>
  );
};

export default Experience;

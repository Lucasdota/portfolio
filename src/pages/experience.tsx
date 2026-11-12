import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  FaShopify,
  FaPlug,
  FaCogs,
  FaCubes,
  FaFilter,
  FaCodeBranch,
} from "react-icons/fa";
import Page from "@/components/ui/Page";
import Keyword from "@/components/ui/Keyword";
import ExperienceCard from "@/components/experience/ExperienceCard";

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
            <Keyword color="blue">Liquid</Keyword>,{" "}
            <Keyword color="yellow">JavaScript</Keyword>,{" "}
            <Keyword color="orange">HTML</Keyword>, and{" "}
            <Keyword color="sky">CSS</Keyword>.
          </>
        ),
      },
      {
        icon: FaPlug,
        content: (
          <>
            Design and implement integrations between{" "}
            <Keyword color="green">Shopify stores</Keyword> and{" "}
            <Keyword color="pink">ERP systems</Keyword> to meet each
            client&apos;s specific business requirements.
          </>
        ),
      },
      {
        icon: FaCogs,
        content: (
          <>
            Develop <Keyword color="green">Shopify Apps</Keyword>{" "}
            to automate processes and extend platform functionality.
          </>
        ),
      },
      {
        icon: FaCubes,
        content: (
          <>
            Build dynamic sections and configurable blocks using the{" "}
            <Keyword color="green">Shopify Theme Editor</Keyword>.
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
            <Keyword color="green">Shopify CLI</Keyword>,{" "}
            <Keyword color="red">Git</Keyword>, and{" "}
            <Keyword color="purple">GitHub</Keyword> while following
            version control best practices.
          </>
        ),
      },
    ],
    technologies: [
      { name: "Shopify", color: "green" as const },
      { name: "Liquid", color: "blue" as const },
      { name: "JavaScript", color: "yellow" as const },
      { name: "HTML", color: "orange" as const },
      { name: "CSS", color: "sky" as const },
      { name: "Shopify CLI", color: "green" as const },
      { name: "Git", color: "red" as const },
      { name: "GitHub", color: "purple" as const },
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
    <Page headTitle="Portfolio | Experience" title="Experience" eyebrow="Where I've worked">
      {/* TIMELINE */}
      {/* right padding mirrors the gap left of the timeline line on small screens */}
      <div ref={timeline} className="relative mb-4 sm:pr-[1.125rem]">
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
            <div className="relative -left-[1.88rem] h-4 w-4 shrink-0 rounded-full border-[3px] border-secondary bg-page-light dark:bg-page-dark" />
            <p className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm xs:text-xs text-neutral-500 dark:text-neutral-400">
              2023 · Started learning how to code
            </p>
          </motion.li>
        </ul>
      </div>
    </Page>
  );
};

export default Experience;

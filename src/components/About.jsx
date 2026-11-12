import Link from "next/link";
import { FaUser, FaFileAlt, FaLanguage } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Keyword from "@/components/ui/Keyword";
import Pill from "@/components/ui/Pill";

const About = () => {
  return (
    <Card delay={0.5}>
      <SectionTitle icon={FaUser}>About</SectionTitle>
      <p className="text-[0.95rem] 3xl:text-lg antialiased whitespace-normal [text-wrap:pretty]">
        <Keyword color="green">Shopify Developer</Keyword> with experience in
        developing and customizing themes, building{" "}
        <Keyword color="green">Shopify Apps</Keyword>, and integrating Shopify
        stores with <Keyword color="pink">ERP systems</Keyword>. I work with{" "}
        <Keyword color="blue">Liquid</Keyword>,{" "}
        <Keyword color="yellow">JavaScript</Keyword> and{" "}
        <Keyword color="sky">CSS</Keyword> to create scalable, maintainable, and
        business-oriented e-commerce solutions. I use{" "}
        <Keyword color="orange">AI</Keyword> as a productivity tool to better
        understand large codebases, identify bugs more efficiently, and
        accelerate development while maintaining code quality.
      </p>

      {/* LANGUAGES */}
      <ul className="mt-5 flex flex-wrap gap-2">
        <li>
          <Pill>
            <FaLanguage className="text-green-700 dark:text-green-400" />
            Portuguese
            <span className="text-neutral-500 dark:text-neutral-400">· Native</span>
          </Pill>
        </li>
        <li>
          <Pill>
            <FaLanguage className="text-green-700 dark:text-green-400" />
            English
            <span className="text-neutral-500 dark:text-neutral-400">
              · C2 Proficient (EF SET 77/100)
            </span>
          </Pill>
        </li>
      </ul>

      <div className="mt-6 flex justify-center">
        <Link
          id="resume"
          href="/LD-Resume.pdf"
          target="_blank"
          className="group/btn inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-2.5 text-sm 3xl:text-lg font-bold text-white antialiased shadow-[0_8px_20px_-6px_rgba(22,163,74,0.6)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(22,163,74,0.75)] active:translate-y-0"
        >
          <FaFileAlt />
          My Resume
          <FiArrowUpRight className="transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </Card>
  );
};

export default About;

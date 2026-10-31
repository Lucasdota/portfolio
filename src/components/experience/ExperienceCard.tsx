import { motion } from "framer-motion";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import type { IconType } from "react-icons";
import Circles from "@/components/Circles";

export type Highlight = {
  icon: IconType;
  content: ReactNode;
};

export type Technology = {
  name: string;
  className: string;
};

type Props = {
  company: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  highlights: Highlight[];
  technologies: Technology[];
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatMonth = (date: Date) => `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;

// counts both the start and end months, the same way LinkedIn does
const getDuration = (start: Date, end: Date) => {
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];

  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);

  return parts.join(" ");
};

const ExperienceCard = ({ company, role, startDate, endDate, highlights, technologies }: Props) => {
  const [duration, setDuration] = useState<string>();
  const isCurrent = !endDate;

  // calculated on the client so the static build doesn't freeze "today"
  useEffect(() => {
    setDuration(getDuration(startDate, endDate ?? new Date()));
  }, [startDate, endDate]);

  // feeds the cursor position to the spotlight gradient
  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.li
      className="flex"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* TIMELINE NODE */}
      <div className="shrink-0 mt-[2.4rem] sm:mt-[1.9rem]">
        <Circles />
      </div>

      <article
        onMouseMove={handleMouseMove}
        className="green-cursor group relative -ml-4 w-full overflow-hidden rounded-xl p-6 sm:p-4 border border-neutral-300 dark:border-neutral-700 bg-slate-50 dark:bg-dark-bg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition-colors duration-300 hover:border-green-600/60 dark:hover:border-green-500/50"
      >
        {/* SPOTLIGHT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--x) var(--y), rgba(22, 163, 74, 0.12), transparent 45%)",
          }}
        />

        {/* HEADER */}
        <header className="relative flex items-center gap-4 sm:gap-3">
          <div className="h-11 w-11 shrink-0 rounded-full p-[2px] bg-gradient-to-b from-[#3c88a7] to-[#ca8e8e]">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-slate-50 dark:bg-neutral-850 font-poppins text-lg font-extrabold antialiased">
              {company[0]}
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="text-xl sm:text-lg font-extrabold tracking-wide antialiased name font-poppins leading-tight">
              {company}
            </h3>
            <p className="text-base sm:text-sm text-neutral-600 dark:text-neutral-300">
              {role}
            </p>
          </div>
        </header>

        {/* PERIOD */}
        <div className="relative mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="rounded-lg border border-dashed border-neutral-400 dark:border-neutral-600 px-2 py-0.5">
            {formatMonth(startDate)} — {endDate ? formatMonth(endDate) : "Present"}
          </span>
          {isCurrent && (
            <span className="flex items-center gap-1.5 text-green-700 dark:text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Current
            </span>
          )}
          {duration && (
            <motion.span
              className="text-neutral-500 dark:text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {duration}
            </motion.span>
          )}
        </div>

        {/* HR */}
        <div role="separator" className="relative my-5 w-full h-[1px] bg-neutral-300 dark:bg-neutral-700" />

        {/* HIGHLIGHTS */}
        <ul className="relative flex flex-col gap-4">
          {highlights.map(({ icon: Icon, content }, index) => (
            <motion.li
              key={index}
              className="group/item flex items-start gap-3 text-base sm:text-sm"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 + index * 0.08 }}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-green-600/10 text-green-700 dark:bg-green-400/10 dark:text-green-400 transition duration-200 group-hover/item:scale-110 group-hover/item:-rotate-6">
                <Icon size={14} />
              </span>
              <p className="whitespace-normal [text-wrap:pretty]">{content}</p>
            </motion.li>
          ))}
        </ul>

        {/* TECHNOLOGIES */}
        <div className="relative mt-6 text-base sm:text-sm flex gap-2 items-start justify-start flex-wrap">
          <p>Technologies:</p>
          {technologies.map(({ name, className }) => (
            <span key={name} className={className}>
              {name}
            </span>
          ))}
        </div>
      </article>
    </motion.li>
  );
};

export default ExperienceCard;

import { motion } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  // fades the card in when it enters the viewport; leave it out when a parent already animates the card
  delay?: number;
};

const Card = ({ children, className = "", delay }: Props) => {
  // feeds the cursor position to the spotlight gradient
  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      className={`green-cursor group relative overflow-hidden rounded-xl p-6 sm:p-4 border border-neutral-300/80 dark:border-neutral-700/60 bg-white/70 dark:bg-card-dark backdrop-blur-md shadow-card dark:shadow-card-dark transition-colors duration-300 hover:border-green-600/50 dark:hover:border-green-500/40 ${className}`}
      initial={delay === undefined ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
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
      {/* TOP HIGHLIGHT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
      />

      <div className="relative">{children}</div>
    </motion.article>
  );
};

export default Card;

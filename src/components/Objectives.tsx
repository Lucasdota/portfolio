import React from 'react';
import Circles from "@/components/Circles";
import Pill from "@/components/ui/Pill";
import { motion } from "framer-motion";

type Props = {
	year: number,
	description: string,
	index: number,
	isLast: boolean
}

const Objectives = ({year, description, index, isLast}: Props) => {

	return (
    <motion.li
      className="relative flex items-start gap-3 pl-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.12 }}
      variants={{
        hidden: { opacity: 0, x: -8 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {/* line down to the next milestone: from this node's center to the next one (gap-5 + node offset) */}
      {!isLast && (
        <>
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-[14px] bottom-[-34px] w-[2px] rounded bg-neutral-300 dark:bg-neutral-700"
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-[7px] top-[14px] bottom-[-34px] w-[2px] rounded bg-secondary origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 + 0.2 }}
          />
        </>
      )}
      <Circles className="absolute left-0 top-[6px]" />
      <Pill className="font-bold">{year}</Pill>
      <p className="pt-0.5 text-[0.95rem] 3xl:text-lg">{description}</p>
    </motion.li>
  );
}

export default Objectives

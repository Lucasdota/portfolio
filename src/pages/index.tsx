import React from "../../public/react.svg";
import { motion } from "framer-motion";
import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Roadmap from "../components/Roadmap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Homepage</title>
      </Head>
      <section
        className={`flex min-h-screen flex-col items-center justify-between px-8 pt-24 pb-8 tracking-wide md:px-6`}
      >
        <motion.article
          className="max-w-lg"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeOut" }}
          variants={{
            exit: { opacity: 0, y: 10 },
          }}
        >
          
          <Hero />

          <motion.hr
            className="border-t border-neutral-400"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          />

          <About />
          <Roadmap />

          {/* ACTIVITIES */}
          <motion.div
            className="mb-8"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.65 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-xl font-bold antialiased 3xl:text-2xl">
              ACTIVITIES<span className="text-primary">&nbsp;I&nbsp;</span>ENJOY
            </h2>
            <motion.p
              className="text-[0.95rem] 3xl:text-lg mt-8 antialiased indent-4"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              Go to Church, Working Out, Playing Soccer,
              Gaming, Travelling & Hanging Out with Family and Friends.
            </motion.p>
          </motion.div>
        </motion.article>
      </section>
    </>
  );
}

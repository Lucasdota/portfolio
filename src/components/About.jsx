import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <article className="my-12">
      <motion.h2
        className="text-xl font-bold mb-8 antialiased 3xl:text-2xl"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.45 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        ABOUT
      </motion.h2>
      <motion.p
        className="text-[0.95rem] 3xl:text-lg antialiased indent-4 whitespace-normal"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        I have knowledge in Java, Spring Boot, and JWT, which enables me to
        develop secure and efficient applications. I have experience with React,
        creating responsive and intuitive interfaces. I am also fluent in
        English, which is a valuable asset in the tech field. Currently, I am in
        my second semester of studying Systems Analysis and Development, and I
        am eager to start working in the field as soon as possible. I have two
        main projects that you can check out in the projects tab: one is a
        full-stack to-do list, and the other is a frontend supermarket website.
      </motion.p>
      <motion.div
        className="z-10 flex items-center justify-center my-12"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.55 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Link
          id="resume"
          href="/LD-Resume.pdf"
          target="_blank"
          className="text-center inline-block relative text-slate-50 bg-primary text-sm py-3 w-[8rem] overflow-hidden rounded-lg btn btn-effect font-bold antialiased 3xl:text-lg 3xl:w-[9rem]"
        >
          My Resume
        </Link>
      </motion.div>
    </article>
  );
};

export default About;

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
        I am currently focused on securing my first job as a front-end
        developer, eager to kickstart my career in the tech industry. After
        that, I plan to study back-end technologies to enhance my programming
        skills. Throughout my previous experiences, I have extensively
        interacted with customers, catering to their needs through face-to-face
        interactions and telephone. If you are seeking a driven and enthusiastic
        web developer to join your team, I would welcome the opportunity to
        discuss how I can add value. Please reach out to me to explore potential
        collaborations and learn more about my skills and experience.
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
          href="/Resume.pdf"
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

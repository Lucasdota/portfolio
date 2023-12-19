import { motion } from "framer-motion"
import Head from "next/head";
import GrocerGo from "@/components/GrocerGo";
import OtherProjects from "@/components/other_projects/OtherProjects";

const projects = () => {
	return (
    <>
      <Head>
        <title>Portfolio | Projects</title>
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
            className="text-4xl font-extrabold mx-auto tracking-wider antialiased name font-poppins"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Main Project
          </motion.h2>

          {/* GrocerGo */}
          <GrocerGo />

          {/* HR */}
          <motion.div
            role="separator"
            className="w-full h-[1px] bg-neutral-400"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.45 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          />

          
          <motion.h2
            className="text-4xl font-extrabold mx-auto tracking-wider antialiased name font-poppins"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Other Projects
          </motion.h2>

					{/* Other projects */}
					<OtherProjects />	

        </motion.article>
      </section>
    </>
  );
}

export default projects
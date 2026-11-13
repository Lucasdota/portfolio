import { motion } from "framer-motion";
import Head from "next/head";
import type { ReactNode } from "react";
import { FaSeedling } from "react-icons/fa";

type Props = {
  headTitle: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

// shared page shell: keeps every page on the same narrow column
const Page = ({ headTitle, title, eyebrow, children }: Props) => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <section className="flex min-h-screen flex-col items-center px-8 pt-28 pb-16 md:px-6 xs:px-4">
        <motion.article
          className="max-w-[35rem] w-[35rem] sm:w-full flex flex-col gap-8"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          variants={{
            exit: { opacity: 0, y: 10 },
          }}
        >
          <motion.header
            className="flex flex-col items-center gap-3 text-center"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {eyebrow && (
              <span className="flex items-center gap-2 rounded-full border border-green-600/30 bg-green-600/10 px-3 py-0.5 text-xs font-bold uppercase tracking-[0.2em] text-green-700 dark:border-green-400/25 dark:bg-green-400/10 dark:text-green-400">
                <FaSeedling size={10} />
                {eyebrow}
              </span>
            )}
            <h2 className="pb-1 text-4xl sm:text-3xl 3xl:text-5xl font-extrabold tracking-wider antialiased name font-poppins bg-gradient-to-b from-neutral-850 to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
              {title}
            </h2>
          </motion.header>

          {children}
        </motion.article>
      </section>
    </>
  );
};

export default Page;

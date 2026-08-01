import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import TodoImage from "../../../public/todo.webp";

export default function TodoApp() {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
    const [isZoomed, setIsZoomed] = useState<boolean>(false);
  
    useEffect(() => {
      if (!isZoomed) return;
  
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsZoomed(false);
      };
  
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isZoomed]);

  	return (
      <motion.div
        className="flex flex-col items-center gap-3"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div id="project-pic" className="relative">
        <Image
            src={TodoImage}
            alt="project pic"
            width={760}
            height={760}
            priority
            loading="eager"
            onLoad={() => setImgLoaded(true)}
            onClick={() => setIsZoomed(true)}
            className={`cursor-zoom-in rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]`}
          />

          {!imgLoaded && (
            <motion.div className="absolute top-0 left-0 w-full h-full rounded-full animate-pulse bg-gradient-to-br from-neutral-300 to-neutral-400 dark:from-neutral-700 dark:to-neutral-850" />
          )}
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-[1200px] aspect-square"
            >
              <Image
                src={TodoImage}
                alt="project pic zoomed in"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        <div className="flex items-center gap-1.5 text-sm shrink-0">
          <FaGithub />
          <Link
            aria-label="go to to-do app github repository"
            target="_blank"
            href="https://github.com/Lucasdota/todo_app_backend"
            className="underline dark:decoration-neutral-300 decoration-neutral-500 underline-offset-2 dark:hover:text-green-400 dark:hover:decoration-green-400 dark:active:decoration-green-600 dark:active:text-green-600 hover:decoration-green-600 active:decoration-green-800 hover:text-green-600 active:text-green-800 px-1"
          >
            Repository
          </Link>
        </div>

        <p className="text-base sm:text-sm px-4 whitespace-normal text-center">
          A full-stack &quot;to-do list&quot; application that allows users to
          register, log in using their email and password, and manage their
          tasks. Authentication is done using JSON Web Tokens (JWT), which are
          stored in cookies for secure session management. User information is
          saved in a database.
        </p>

        <div className="text-base sm:text-sm flex gap-2 items-start justify-start flex-wrap">
          <p>Technologies:</p>
          <span className="text-orange-700 dark:text-orange-300">Java</span>
          <span className="text-green-700 dark:text-green-300">
            Spring Boot
          </span>
          <span className="text-red-700 dark:text-red-300">JWT</span>
          <span className="text-purple-700 dark:text-purple-300">
            PostgreSQL
          </span>
          <span className="text-blue-700 dark:text-blue-300">React</span>
        </div>
      </motion.div>
    );
}

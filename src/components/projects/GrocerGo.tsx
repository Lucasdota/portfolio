import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TbSeparatorVertical } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import GrocerGoImage from "../../../public/grocergo.webp";

const GrocerGo = () => {
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
            src={GrocerGoImage}
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
                src={GrocerGoImage}
                alt="project pic zoomed in"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-6 shrink-0 text-sm">
        <div className="flex items-center gap-1.5">
          <Link
            aria-label="go to grocergo website"
            target="_blank"
            href="https://grocergo.vercel.app/"
            className="underline dark:decoration-neutral-300 decoration-neutral-500 underline-offset-2 dark:hover:text-green-400 dark:hover:decoration-green-400 dark:active:decoration-green-600 dark:active:text-green-600 hover:decoration-green-600 active:decoration-green-800 hover:text-green-600 active:text-green-800 px-1"
          >
            Website
          </Link>
          <CgWebsite />
        </div>
        <TbSeparatorVertical />
        <div className="flex items-center gap-1.5">
          <FaGithub />
          <Link
            aria-label="go to grocergo github repository"
            target="_blank"
            href="https://github.com/Lucasdota/GrocerGo"
            className="underline dark:decoration-neutral-300 decoration-neutral-500 underline-offset-2 dark:hover:text-green-400 dark:hover:decoration-green-400 dark:active:decoration-green-600 dark:active:text-green-600 hover:decoration-green-600 active:decoration-green-800 hover:text-green-600 active:text-green-800 px-1"
          >
            Repository
          </Link>
        </div>
      </div>

      <p className="text-base sm:text-sm px-4 whitespace-normal text-center">
        A frontend supermarket website where users can log in with their Google
        or GitHub account, storing information in local storage for future
        visits. Users can search for products using a search bar, add items to
        the cart, search for recipes based on products, and much more.
      </p>

      <div className="text-base sm:text-sm flex gap-2 items-start justify-start flex-wrap">
        <p>Technologies:</p>
        <span className="text-blue-700 dark:text-blue-300">React</span>
        <span className="text-green-700 dark:text-green-300">TailwindCSS</span>
        <span className="text-red-700 dark:text-red-300">Framer Motion</span>
      </div>
    </motion.div>
  );
};

export default GrocerGo;

import { motion, AnimatePresence } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaSearchPlus } from "react-icons/fa";

type Props = {
  src: StaticImageData;
  alt: string;
};

const ZoomableImage = ({ src, alt }: Props) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // the zoomed view is portaled to <body>, which only exists on the client
  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (!isZoomed) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed]);

  return (
    <>
      <button
        type="button"
        aria-label={`Zoom in: ${alt}`}
        onClick={() => setIsZoomed(true)}
        className="group/img relative block w-full overflow-hidden rounded-lg border border-neutral-300/70 dark:border-neutral-700/70 cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          width={760}
          height={760}
          priority
          loading="eager"
          onLoad={() => setImgLoaded(true)}
          className="h-auto w-full transition-transform duration-500 ease-out group-hover/img:scale-[1.03]"
        />
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900/60 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/img:opacity-100">
          <FaSearchPlus size={13} />
        </span>

        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-neutral-300 to-neutral-400 dark:from-neutral-700 dark:to-neutral-850" />
        )}
      </button>

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isZoomed && (
              <motion.div
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm cursor-zoom-out"
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
                    src={src}
                    alt={`${alt} zoomed in`}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="rounded-xl object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default ZoomableImage;

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSeedling,
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";

const pages = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

const socials = [
  {
    href: "https://github.com/Lucasdota",
    label: "Github",
    ariaLabel: "Go to my Github Repository",
    icon: FaGithubSquare,
  },
  {
    href: "https://www.linkedin.com/in/lucas-dota-trombini/",
    label: "Linkedin",
    ariaLabel: "Go to my Linkedin Profile",
    icon: FaLinkedin,
  },
  {
    href: "mailto:lucasdotat@hotmail.com",
    label: "Email",
    ariaLabel: "Send me an email! Opens up your email app",
    icon: FaEnvelope,
  },
];

const navBar =
  "mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-neutral-300/70 dark:border-neutral-700/60 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(32,33,36,0.25)] dark:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] px-4 antialiased";

const Navbar = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");
	const [darkTheme, setDarkTheme] = useState<boolean>();
	const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

	useEffect(() => {
		const localTheme = localStorage.theme;
		const htmlRef = document.querySelector<any>("html");
		const bodyRef = document.body;

		if (localTheme === undefined) {
			localStorage.setItem("theme", "dark");
			setDarkTheme(true);
			htmlRef?.classList.add("dark");
			bodyRef.classList.add("dark-scrollbar");
			htmlRef.style.colorScheme = "dark";
		} else if (localTheme === "light" && !htmlRef?.classList.contains("dark")) {
			localStorage.setItem("theme", "light");
      setDarkTheme(false);
      htmlRef?.classList.remove("dark");
			bodyRef.classList.remove("dark-scrollbar");
			htmlRef.style.colorScheme = "light";
    } else if (localTheme === "dark") {
			localStorage.setItem("theme", "dark");
      setDarkTheme(true);
      htmlRef?.classList.add("dark");
			bodyRef.classList.add("dark-scrollbar");
			htmlRef.style.colorScheme = "dark";
    }

		let newScheme = darkTheme ? "dark" : "light";
		document.documentElement.setAttribute("data-color-scheme", newScheme);

	}, [darkTheme])

	function handleTheme() {
		const htmlRef = document.querySelector("html");
		const bodyRef = document.body;

		if (htmlRef?.classList.contains("dark")) {
			localStorage.setItem("theme", "light");
			setDarkTheme(false);
			htmlRef?.classList.remove("dark");
			bodyRef.classList.remove("dark-scrollbar");

		} else {
			localStorage.setItem("theme", "dark");
			setDarkTheme(true);
			htmlRef?.classList.add("dark");
			bodyRef.classList.add("dark-scrollbar");
		}
	}

	function handleClick() {
		setIsOpen(!isOpen)
	}

  const logo = (
    <Link
      href="/"
      className="group flex items-center gap-[0.7rem] tracking-wide"
    >
      <FaSeedling
        className={`dark:text-green-500 text-green-600 duration-100 group-hover:-scale-x-100 dark:group-hover:drop-shadow-[0_0px_5px_rgba(22,163,74,0.6)] 3xl:h-6 3xl:w-6`}
        size={17}
      />
      <h1 className="text-xl 3xl:text-2xl name">Lucas Dota</h1>
    </Link>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-3 sm:px-2 sm:pt-2 dark:text-slate-50 text-neutral-850 font-poppins min-w-[300px]">
      {isMobile ? (
        <>
          <nav className={`${navBar} relative z-40 py-2`}>
            {/* LOGO */}
            {logo}
            <button
              onClick={handleClick}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex h-9 w-9 flex-col items-center justify-center rounded-lg transition-colors duration-200 hover:bg-neutral-500/10"
            >
              <span
                className={`w-6 h-0.5 dark:bg-slate-50 bg-neutral-800 rounded-sm transition-all duration-300 ease-out
										${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
              ></span>
              <span
                className={`w-6 h-0.5 dark:bg-slate-50 bg-neutral-800 rounded-sm transition-all duration-300 ease-out my-0.5
										${isOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`w-6 h-0.5 dark:bg-slate-50 bg-neutral-800 rounded-sm transition-all duration-300 ease-out
										${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
              ></span>
            </button>
          </nav>

          {/* OVERLAY */}
          <div
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 z-20 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />

          {/* DRAWER */}
          <div
            className={`fixed top-0 right-0 z-30 flex h-[100dvh] w-1/2 xs:w-[70%] flex-col items-center justify-center gap-14 border-l border-neutral-300 dark:border-neutral-700 bg-neutral-100/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-[-10px_0_40px_rgba(0,0,0,0.35)] transition-[transform,visibility] duration-300 ease-out ${
              isOpen ? "visible translate-x-0" : "invisible translate-x-full"
            }`}
          >
            {/* PAGE LINKS */}
            <div className="flex flex-col items-center gap-2">
              {[{ href: "/", label: "Home" }, ...pages].map(({ href, label }) => {
                const isActive = router.pathname === href;

                return (
                  <Link
                    key={href}
                    onClick={handleClick}
                    href={href}
                    aria-label={`Go to ${label} Page`}
                    className={`relative isolate rounded-xl px-5 py-1.5 text-2xl font-nunito tracking-widest transition-colors duration-200 ${
                      isActive ? "text-green-700 dark:text-green-400" : ""
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-mobile"
                        className="absolute inset-0 -z-10 rounded-xl bg-green-600/10 ring-1 ring-green-600/20 dark:bg-green-400/10 dark:ring-green-400/20"
                      />
                    )}
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* ICONS */}
            <div className="flex flex-col gap-3 items-start justify-center font-nunito text-xl">
              {socials.map(({ href, label, ariaLabel, icon: Icon }) => (
                <Link
                  key={href}
                  onClick={handleClick}
                  target="_blank"
                  href={href}
                  aria-label={ariaLabel}
                  className="group p-2 flex gap-3 items-center"
                >
                  <Icon
                    size={28}
                    className="transition duration-100 group-active:scale-90 dark:text-slate-50 text-neutral-850"
                  />
                  {label}
                </Link>
              ))}
            </div>

            {/* DARK/LIGHT MODE BUTTON */}
            <button
              aria-hidden="true"
              onClick={handleTheme}
              className="flex h-16 w-16 items-center justify-center rounded-full transition duration-300 dark:bg-dark-bg group dark:shadow-dark-shadow shadow-light-shadow border dark:border-none border-neutral-200 group bg-slate-50"
            >
              {darkTheme ? (
                <RiMoonFill
                  size={28}
                  className="group-active:scale-75 transition duration-300 ease-out text-slate-50"
                />
              ) : (
                <BsSun
                  size={28}
                  className="group-active:scale-75 text-neutral-800 transition duration-300 ease-out"
                />
              )}
            </button>
          </div>
        </>
      ) : (
        <nav className={`${navBar} py-2 3xl:py-3`}>
          {/* LOGO */}
          {logo}

          {/* PAGE LINKS */}
          <div className="flex h-full items-center gap-1 3xl:gap-2">
            {pages.map(({ href, label }) => {
              const isActive = router.pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  aria-label={`Go to ${label} Page`}
                  className={`relative isolate rounded-lg px-3 py-1 text-[1rem] 3xl:text-xl font-nunito tracking-widest transition-colors duration-200 ${
                    isActive
                      ? "text-green-700 dark:text-green-400"
                      : "hover:bg-neutral-500/10"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-lg bg-green-600/10 ring-1 ring-green-600/20 dark:bg-green-400/10 dark:ring-green-400/20"
                    />
                  )}
                  {label}
                </Link>
              );
            })}
          </div>

          {/* ICONS */}
          <div className="flex gap-4 items-center justify-center">
            <div className="flex items-center justify-center">
              {socials.map(({ href, ariaLabel, icon: Icon }) => (
                <Link
                  key={href}
                  target="_blank"
                  href={href}
                  aria-label={ariaLabel}
                  className="group p-2"
                >
                  <Icon className="transition duration-100 group-hover:-translate-y-1 group-hover:text-green-600 dark:group-hover:text-green-400 dark:text-slate-50 text-neutral-850 3xl:h-6 3xl:w-6" />
                </Link>
              ))}
            </div>
            {/* DARK/LIGHT MODE BUTTON */}
            <button
              aria-hidden="true"
              onClick={handleTheme}
              className="flex h-8 w-8 3xl:h-10 3xl:w-10 items-center justify-center rounded-full transition duration-300 dark:bg-dark-bg group dark:shadow-dark-shadow shadow-light-shadow border dark:border-none border-neutral-200 group bg-slate-50"
            >
              {darkTheme ? (
                <RiMoonFill className="group-hover:opacity-60 group-active:scale-75 transition duration-300 ease-out text-slate-50 3xl:h-5 3xl:w-5 h-4 w-4" />
              ) : (
                <BsSun className="group-hover:opacity-60 group-active:scale-75 text-neutral-800 transition duration-300 ease-out 3xl:h-5 3xl:w-5 h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

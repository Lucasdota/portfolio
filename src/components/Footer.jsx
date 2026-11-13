import React from 'react'
import { FaSeedling } from "react-icons/fa";

const Footer = () => {
	return (
    <footer className="flex flex-col items-center gap-4 px-8 pb-10 md:px-6 xs:px-4 text-sm 3xl:text-lg xs:text-xs antialiased min-w-[300px]">
      <div className="h-px w-full max-w-[35rem] bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-600" />
      <FaSeedling className="text-green-600 dark:text-green-500" />
      <div className="flex flex-col gap-1 items-center text-neutral-600 dark:text-neutral-400 text-center">
        <p>Developer, develop yourself.</p>
        <p>© All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer

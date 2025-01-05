import React from 'react'

const Footer = () => {
	return (
    <footer className="flex items-center h-24 dark:bg-neutral-850 bg-neutral-200 dark:text-slate-50 text-neutral-850 justify-center text-sm 3xl:text-lg xs:text-[0.6rem] antialiased min-w-[300px] xs:pb-4">
      <div className="flex-col gap-4 items-center">
        <p className="text-slate-850 dark:text-neutral-400">
          Developer, develope yourself.
        </p>
        <p className="text-slate-850 dark:text-neutral-400">
          © 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
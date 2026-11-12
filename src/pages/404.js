import Link from 'next/link';
import React from 'react'
import {TbError404Off} from "react-icons/tb"
import {BsPatchQuestion} from "react-icons/bs"
import {TiArrowBack} from "react-icons/ti"
import Page from "@/components/ui/Page";
import Card from "@/components/ui/Card";

const Custom404 = () => {
	return (
    <Page headTitle="Portfolio | 404" title="Page not found" eyebrow="Error 404">
      <Card delay={0.45} className="text-center">
        <TbError404Off className="mx-auto h-36 w-36 text-green-600 dark:text-green-500 drop-shadow-[0_0_18px_rgba(22,163,74,0.35)]" />
        <p className="mt-4 flex items-center justify-center gap-1.5 text-base">
          What are you trying to do brother <BsPatchQuestion />
        </p>
        <Link
          href="/"
          className="group/btn mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-2.5 text-sm font-bold text-white antialiased shadow-[0_8px_20px_-6px_rgba(22,163,74,0.6)] transition duration-200 hover:-translate-y-0.5"
        >
          <TiArrowBack className="transition-transform duration-200 group-hover/btn:-translate-x-0.5" />
          Back to home
        </Link>
      </Card>
    </Page>
  );
}

export default Custom404;

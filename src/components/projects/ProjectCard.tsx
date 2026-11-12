import Link from "next/link";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "@/components/ui/Card";
import ZoomableImage from "@/components/ui/ZoomableImage";
import Technologies, { type Technology } from "@/components/ui/Technologies";

export type ProjectLink = {
  href: string;
  label: string;
  ariaLabel: string;
  icon: IconType;
};

type Props = {
  title: string;
  image: StaticImageData;
  links: ProjectLink[];
  technologies: Technology[];
  children: ReactNode;
};

const ProjectCard = ({ title, image, links, technologies, children }: Props) => {
  return (
    <Card delay={0.45}>
      <ZoomableImage src={image} alt={`${title} preview`} />

      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <h3 className="text-2xl sm:text-xl font-extrabold tracking-wide antialiased name font-poppins">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {links.map(({ href, label, ariaLabel, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              aria-label={ariaLabel}
              className="group/link inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-white/5 px-3 py-1 text-sm transition-colors duration-200 hover:border-green-600/60 hover:text-green-700 dark:hover:border-green-500/50 dark:hover:text-green-400"
            >
              <Icon size={13} />
              {label}
              <FiArrowUpRight className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-3 text-base sm:text-sm whitespace-normal [text-wrap:pretty] text-neutral-700 dark:text-neutral-300">
        {children}
      </p>

      {/* HR */}
      <div role="separator" className="my-5 w-full h-[1px] bg-neutral-300 dark:bg-neutral-700" />

      <Technologies items={technologies} />
    </Card>
  );
};

export default ProjectCard;

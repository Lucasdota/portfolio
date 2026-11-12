import type { ReactNode } from "react";

// palette used to color technologies across the site
export const textColors = {
  green: "text-green-700 dark:text-green-300",
  blue: "text-blue-700 dark:text-blue-300",
  yellow: "text-yellow-700 dark:text-yellow-300",
  orange: "text-orange-700 dark:text-orange-300",
  sky: "text-sky-700 dark:text-sky-300",
  pink: "text-pink-700 dark:text-pink-300",
  red: "text-red-700 dark:text-red-300",
  purple: "text-purple-700 dark:text-purple-300",
};

export type Color = keyof typeof textColors;

type Props = {
  color: Color;
  children: ReactNode;
};

const Keyword = ({ color, children }: Props) => (
  <strong className={`font-bold whitespace-nowrap ${textColors[color]}`}>{children}</strong>
);

export default Keyword;

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Pill = ({ children, className = "" }: Props) => {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-dashed border-neutral-400 dark:border-neutral-600 px-2 py-0.5 text-sm ${className}`}
    >
      {children}
    </span>
  );
};

export default Pill;

import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import IconChip from "@/components/ui/IconChip";

type Props = {
  icon: IconType;
  children: ReactNode;
};

const SectionTitle = ({ icon, children }: Props) => {
  return (
    <h2 className="mb-5 flex items-center gap-3 text-xl 3xl:text-2xl font-extrabold tracking-wide antialiased font-poppins">
      <IconChip icon={icon} size="md" />
      <span className="name">{children}</span>
      <span
        aria-hidden="true"
        className="ml-1 h-px flex-1 bg-gradient-to-r from-neutral-300 to-transparent dark:from-neutral-700"
      />
    </h2>
  );
};

export default SectionTitle;

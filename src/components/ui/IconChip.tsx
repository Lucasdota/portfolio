import type { IconType } from "react-icons";

type Props = {
  icon: IconType;
  size?: "sm" | "md";
  className?: string;
};

const sizes = {
  sm: { box: "h-7 w-7 rounded-md", icon: 14 },
  md: { box: "h-9 w-9 rounded-lg", icon: 16 },
};

const IconChip = ({ icon: Icon, size = "sm", className = "" }: Props) => {
  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-green-600/10 text-green-700 dark:bg-green-400/10 dark:text-green-400 transition duration-200 ${sizes[size].box} ${className}`}
    >
      <Icon size={sizes[size].icon} />
    </span>
  );
};

export default IconChip;

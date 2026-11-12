import { textColors, type Color } from "@/components/ui/Keyword";

export type Technology = {
  name: string;
  color: Color;
};

const Technologies = ({ items }: { items: Technology[] }) => {
  return (
    <div className="text-base sm:text-sm flex gap-2 items-start justify-start flex-wrap">
      <p>Technologies:</p>
      {items.map(({ name, color }) => (
        <span key={name} className={textColors[color]}>
          {name}
        </span>
      ))}
    </div>
  );
};

export default Technologies;

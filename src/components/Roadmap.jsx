import { FaRoute } from "react-icons/fa";
import Objectives from "@/components/Objectives";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const milestones = [
  { year: 2023, description: "Started learning how to code." },
  { year: 2025, description: "Got my first job as a developer." },
  { year: 2026, description: "Graduate from university." },
  { year: 2029, description: "Become an experienced developer." },
];

const Roadmap = () => {
  return (
    <Card delay={0.55}>
      <SectionTitle icon={FaRoute}>Roadmap</SectionTitle>
      <ul className="flex flex-col gap-5">
        {milestones.map(({ year, description }, index) => (
          <Objectives
            key={year}
            year={year}
            description={description}
            index={index}
            isLast={index === milestones.length - 1}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Roadmap;

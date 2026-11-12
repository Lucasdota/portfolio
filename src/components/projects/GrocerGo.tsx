import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import GrocerGoImage from "../../../public/grocergo.webp";

const GrocerGo = () => {
  return (
    <ProjectCard
      title="GrocerGo"
      image={GrocerGoImage}
      links={[
        {
          href: "https://grocergo.vercel.app/",
          label: "Website",
          ariaLabel: "go to grocergo website",
          icon: CgWebsite,
        },
        {
          href: "https://github.com/Lucasdota/GrocerGo",
          label: "Repository",
          ariaLabel: "go to grocergo github repository",
          icon: FaGithub,
        },
      ]}
      technologies={[
        { name: "React", color: "blue" },
        { name: "TailwindCSS", color: "green" },
        { name: "Framer Motion", color: "red" },
      ]}
    >
      A frontend supermarket website where users can log in with their Google
      or GitHub account, storing information in local storage for future
      visits. Users can search for products using a search bar, add items to
      the cart, search for recipes based on products, and much more.
    </ProjectCard>
  );
};

export default GrocerGo;

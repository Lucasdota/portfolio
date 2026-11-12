import { FaLinkedin } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import Instagrid from "../../../public/instagrid.webp";

const InstagramGrid = () => {
  return (
    <ProjectCard
      title="Instagram Post Grid"
      image={Instagrid}
      links={[
        {
          href: "https://lnkd.in/p/dFhc4ber",
          label: "Linkedin Post",
          ariaLabel: "go to the instagram post grid linkedin post",
          icon: FaLinkedin,
        },
      ]}
      technologies={[
        { name: "Shopify App", color: "green" },
        { name: "React", color: "blue" },
        { name: "Instagram API", color: "yellow" },
        { name: "Cloudflare Worker", color: "orange" },
      ]}
    >
      I built a Shopify app called &quot;InstaGrid&quot; that lets a merchant connect their Instagram Business/Creator account and display a curated grid of their Instagram posts directly on their storefront
    </ProjectCard>
  );
};

export default InstagramGrid;

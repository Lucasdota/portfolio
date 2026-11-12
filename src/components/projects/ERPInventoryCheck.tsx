import { FaLinkedin } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import ERPInventoryCheckImage from "../../../public/ERPInventoryCheck.webp";

const ERPInventoryCheck = () => {
  return (
    <ProjectCard
      title="Shopify Inventory Check"
      image={ERPInventoryCheckImage}
      links={[
        {
          href: "https://lnkd.in/p/d5JrMn5X",
          label: "Linkedin Post",
          ariaLabel: "go to the shopify inventory check linkedin post",
          icon: FaLinkedin,
        },
      ]}
      technologies={[
        { name: "Shopify", color: "green" },
        { name: "Liquid", color: "blue" },
        { name: "JavaScript", color: "yellow" },
        { name: "Cloudflare Worker", color: "orange" },
      ]}
    >
      On a project that I was working on at my company, Shopify needed to
      check inventory in an ERP before allowing a product to be added to the
      cart. In this case, the inventory data existed only in the merchant&apos;s
      ERP and was not stored in Shopify. Instead of connecting Shopify
      directly to the ERP, I introduced a Cloudflare Worker as an intermediary
      layer. This allowed me to centralize communication with the ERP while
      keeping sensitive information away from the front end.
    </ProjectCard>
  );
};

export default ERPInventoryCheck;

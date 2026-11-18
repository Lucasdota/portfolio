import ProjectCard from "./ProjectCard";
import ShopifyStoresImage from "../../../public/shopify-stores.webp";

const ShopifyStores = () => {
  return (
    <ProjectCard
      title="Shopify Stores"
      image={ShopifyStoresImage}
      technologies={[
        { name: "Liquid", color: "blue" },
        { name: "Cloudflare", color: "orange" },
        { name: "Polaris", color: "purple" },
        { name: "JavaScript", color: "yellow" },
        { name: "CSS", color: "sky" },
      ]}
    >
      I&apos;ve worked across multiple Shopify stores, building and customizing
      themes from the header, hero banners and shelves to PLPs, PDPs and
      institutional pages, extending their functionality with third-party apps
      and building custom apps from scratch.
    </ProjectCard>
  );
};

export default ShopifyStores;

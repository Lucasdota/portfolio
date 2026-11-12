import Page from "@/components/ui/Page";
import Hero from "../components/Hero";
import About from "../components/About";
import Roadmap from "../components/Roadmap";

export default function Home() {
  return (
    <Page headTitle="Portfolio | Homepage" title="Portfolio" eyebrow="Shopify Developer">
      <Hero />
      <About />
      <Roadmap />
    </Page>
  );
}

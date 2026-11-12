import Page from "@/components/ui/Page";
import GrocerGo from "@/components/projects/GrocerGo";
import TodoApp from "@/components/projects/TodoApp";
import ERPInventoryCheck from "@/components/projects/ERPInventoryCheck";
import InstagramGrid from "@/components/projects/InstagramGrid";

const projects = () => {
  return (
    <Page headTitle="Portfolio | Projects" title="Projects" eyebrow="Things I've built">
      <InstagramGrid />
      <ERPInventoryCheck />
      <TodoApp />
      <GrocerGo />
    </Page>
  );
};

export default projects;

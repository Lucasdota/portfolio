import { FaGithub } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import TodoImage from "../../../public/todo.webp";

export default function TodoApp() {
  return (
    <ProjectCard
      title="To Do App"
      image={TodoImage}
      links={[
        {
          href: "https://github.com/Lucasdota/todo_app_backend",
          label: "Repository",
          ariaLabel: "go to to-do app github repository",
          icon: FaGithub,
        },
      ]}
      technologies={[
        { name: "Java", color: "orange" },
        { name: "Spring Boot", color: "green" },
        { name: "JWT", color: "red" },
        { name: "PostgreSQL", color: "purple" },
        { name: "React", color: "blue" },
      ]}
    >
      A full-stack &quot;to-do list&quot; application that allows users to
      register, log in using their email and password, and manage their
      tasks. Authentication is done using JSON Web Tokens (JWT), which are
      stored in cookies for secure session management. User information is
      saved in a database.
    </ProjectCard>
  );
}

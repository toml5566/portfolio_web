import { projects } from "@/constants";
import { styles } from "@/lib/styles";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="my-10">
      <span className="hash-span" id="projects">
        &nbsp;
      </span>
      <section className={`${styles.paddingX} ${styles.section}`}>
        <p className={`${styles.sectionHeadText}`}>Featured Projects</p>
        <p className="mt-4">
          Here are the projects I built or contributed to. Each project is
          briefly described in the text, and the tags are the tech stack used in
          the projects
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={`project-${i}`} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

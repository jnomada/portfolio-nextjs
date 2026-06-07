import { projects } from "../data/projects";
import ProjectCard from "../components/project-card/project-card";

export default function WebsiteProjects() {

const websites = projects
  .filter(({ type }) => type === "website")
  .sort((a, b) => a.order - b.order);

  return (
    <>
      <h1>Website Projects</h1>
      <section>
        {websites.map((project) =>
          <ProjectCard 
            key={project.slug}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
            alt={project.alt}
            url={project.url}
            technologies={project.technologies}
            company={project.company}
          />
        )}
      </section>
    </>
  );
}
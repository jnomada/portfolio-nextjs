import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { projects } from "./data/projects";
import ProjectCard from "./components/project-card/project-card";

export default function Home() {

  const featuredGameProjects = projects.filter((project) => project.featured && project.type === "game");
  const featuredWebsiteProjects = projects.filter((project) => project.featured && project.type === "website");

  return (
    <>
      <h1 className="sr-only">James Sealey - Game & Web Developer</h1>
      <section>
        <div className="20-80"></div>
        <Image
          className="myphoto"
          src="/img/myphoto.jpg"
          alt="A picture of me"
          width={150}
          height={150}
          priority
        />
        <p>
          I’m a software developer with experience in web development, game development, and systems administration.
          I enjoy building reliable, well-designed software that combines solid engineering with good user experience.
          Currently focused on creating games and web applications, from infrastructure through to frontend.
        </p>
        <Link className={styles.link} href="/about-me">Read more about me</Link>
      </section>
      <section>
        <h3>Featured Game Projects</h3>
        {featuredGameProjects.map((project) => 
          <ProjectCard 
            key={project.slug}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
            alt={project.alt}
            className={styles.project}
            url={project.url}
            technologies={project.technologies}
            company={project.company}
          />
        )}
      </section>
      <Link 
        href="/games"
        className={styles.seeMoreButton}
      >
        See more games
      </Link>
      <section>
        <h3>Featured Website Projects</h3>
        {featuredWebsiteProjects.map((project) => 
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
      <Link 
        href="/websites"
        className={styles.seeMoreButton}
      >
        See more websites
      </Link>
    </>
  );
}

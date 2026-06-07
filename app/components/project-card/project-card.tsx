import Image from "next/image";
import styles from "./project-card.module.css";
import Link from "next/link";

type ProjectCardProps = {
  title: string,
  description: string,
  thumbnail: string,
  alt: string,
  url: string,
  technologies: string[],
  company: string
}

export default function ProjectCard({
  title,
  description,
  thumbnail,
  alt,
  url,
  technologies,
  company
}: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
      <Image 
          className={styles.thumbnail}
          src={thumbnail}
          alt={alt}
          width={250}
          height={200}
          priority
      />
      <p>
        <strong>Technologies used:</strong> {technologies.join(", ")}
      </p>
      <p>Made while working at: {company}</p>
      <p>
        <strong>
          <Link target="_blank" href={url}>More info</Link>
        </strong>
      </p>
    </article>
  );
}
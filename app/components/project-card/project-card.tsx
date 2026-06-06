import Image from "next/image";
import styles from "./project-card.module.css";
import Link from "next/link";

type ProjectCardProps = {
  title: string,
  description: string,
  thumbnail: string,
  alt?: string,
  url?: string
}

export default function ProjectCard({
  title,
  description,
  thumbnail,
  alt,
  url
}: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      <h4>{title}</h4>
      <p>{description}</p>
      <Image 
          className={styles.thumbnail}
          src={thumbnail}
          alt={alt}
          width={250}
          height={200}
          priority
      />
      <p><Link href={url}>More info</Link></p>
    </article>
  );
}
import styles from './footer.module.css';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} James Sealey</p>

      <div className={styles.links}>
        <a href="mailto:jnomada@outlook.com">Email</a>
        <a href="https://github.com/jnomada" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/james-sealey" target="_blank">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
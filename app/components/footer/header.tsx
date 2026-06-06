import styles from './header.module.css';
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <p className={styles.title}>James Sealey</p>
        <p className={styles.subtitle}>Game & Web Developer</p>
      </div>
      <div className={styles.links}>
        <ul>
          <li className={styles.link}><Link href="/">Home</Link></li>
          <li className={styles.link}><Link href="/about-me">About me</Link></li>
          <li className={styles.link}><Link href="/games">Games</Link></li>
          <li className={styles.link}><Link href="/websites">Websites</Link></li>    
        </ul>
      </div>
    </div>
  );
}
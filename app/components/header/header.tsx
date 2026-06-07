import styles from './header.module.css';
import Link from "next/link";
import Image from 'next/image';

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
          <li className={styles.link}><Link href="/about-me">About</Link></li>
          <li className={styles.link}><Link href="/games">Games</Link></li>
          <li className={styles.link}><Link href="/websites">Websites</Link></li>
          <li className={styles.link}><Link href="/contact-me">Contact</Link></li>   
        </ul>
      </div>
      <div className={styles.socials}>
        <Link 
          className={styles.socialsIcon} 
          href="https://www.linkedin.com/in/james-sealey"
          target="_blank">
          <Image 
            src="/img/linkedin-icon.png" 
            alt="LinkedIn logo"
            width={30}
            height={30}
          />
        </Link>
        <Link 
          href="https://github.com/jnomada"
          className={styles.socialsIcon}
          target="_blank">
          <Image 
            src="/img/github-icon.png" 
            alt="Github logo"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
}
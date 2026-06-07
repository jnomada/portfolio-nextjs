import styles from './games.module.css';
import Image from 'next/image';

const screenshots = [
  {
    src: "/img/screen2.png",
    alt: "Gameplay screenshot"
  },
  {
    src: "/img/screen3.png",
    alt: "Gameplay screenshot"
  },
  {
    src: "/img/screen4.png",
    alt: "Gameplay screenshot"
  },
  {
    src: "/img/screen5.png",
    alt: "Gameplay screenshot"
  },
  {
    src: "/img/screen6.png",
    alt: "Gameplay screenshot"
  }
];

export default function GameProjects() {
  return (
    <>
      <h1>Game Projects</h1>

      <article>
        <h2 className={styles.title}>Devil's Night Out</h2>
        <p className={styles.meta}>
          Unity • VR • Survival Horror • Solo Project
        </p>
        <section>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/tJqhdarpU7Y"
            title="Devil's Night Out VR demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> 
        </section>
        <section>
          <h3>Project Details</h3>
          <ul>
            <li>Technologies: Unity, C#, Blender, Github</li>
            <li>Platform: Virtual Reality (PCVR)</li>
            <li>Genre: Survival Horror</li>
            <li>Role: Solo Developer</li>
            <li>Duration: Master's Degree Project (3 months)</li>
          </ul>
        </section>
        <section>
          <h3>Overview</h3>
          <p>I made this VR Survival Horror game as part of my masters degree in Videogames and Virtual Reality.</p>
          <p>I wanted to put together all the knowledge that I had picked up during the course and implement it into a single Virtual Reality experience.</p> 
          <p>I used Unity as the Game engine and picked up most of the assets from the Unity Store, Opengameart.org, and Pixelbay amoung others.</p>
          <p>All of the coding, enemy AI, user interface, level design, controls, and planning was done entirely by me.</p>
        </section>
        <section>
          <h3>Story</h3>
          <p>"Once a year, the gates of Hell open, unleashing demons and monsters upon the world. By dawn, they are meant to return.</p>
          <p>But five years ago, they didn’t.</p>
          <p>The skies have never cleared since. The world is rotting. Civilization has collapsed as the creatures grow bolder with each passing day.</p>
          <p>Humanity has retreated into underground bunkers, hoping that one day Hell will grow tired and leave them in peace.</p>
          <p>Supplies are running out. Fear is spreading.</p>
          <p>Someone has to go to the surface to see what remains of the world.</p>
          <p>Guess who drew the short straw."</p>
          <p>In this VR experience you play the lucky (or unlucky) civilian who has been chosen to go to the surface and investigate the world above that was once your home but is now an unrecognizable nightmare.</p>
          <p>Experience the first level in this demo as you leave the safety of the bunker and make your way to the surface.</p>
        </section>
        <section className={styles.screenshotGrid}>
          { screenshots.map((screenshot) => (
            <Image
              key={screenshot.src}
              src={screenshot.src}
              alt={screenshot.alt}
              width={200}
              height={100}
              className={styles.screenshot}
            />
          ))}
        </section>
        <section>
          <h3>Download the demo</h3>
          <iframe
            className={styles.video}
            src="https://itch.io/embed/4629449?bg_color=452a2a&fg_color=ffffff&link_color=c60e0e&border_color=452a2a"
            width="552"
            height="167"
          />
        </section>
      </article>
    </>
  );
}
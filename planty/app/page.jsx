import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";

export default function Home() {
  return (
    <div> 
      <Header />
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Planty Homepage
          </p>
        </div>

        <div className={styles.grid}>
          <a
            href="/common-plants"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Common Plants <span>-&gt;</span>
            </h2>
            <p>Explore starter templates for Next.js.</p>
          </a>

          <a
            href="/search-page"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Find Your Plant <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div> 
  );
}


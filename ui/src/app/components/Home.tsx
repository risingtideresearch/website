import styles from "./home.module.scss";
import { Homepage } from "@/sanity/lib/utils";
import LogoStacked from "./LogoStacked";
import ActivitiesList from "./ActivitiesList";
import Directory from "./Directory";
import Image from "next/image";

export default function Home({
  content,
  lastUpdated,
}: {
  content: Homepage;
  lastUpdated: Date;
}) {
  const time = new Date(lastUpdated);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={styles.page}>
      {/* <div className={`${styles.title}`}>
        <div className={`${styles.logo}`}>
          <LogoStacked />
        </div>
      </div>

      <div className={`${styles.updated}`}>
        <p>Updated {time.toLocaleDateString("en-CA", options)}</p>
      </div> */}

      <header>
        <span></span>
        <h2>{content.description}</h2>
      </header>
      <div className={`${styles.logo}`}>
        <div>
          <LogoStacked />
        </div>
      </div>
      <main>
        <div></div>
        <div>
          <ActivitiesList />
          <Directory />
        </div>
      </main>
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Image
            style={{
              maxWidth: "20rem",
              display: "block",
              mixBlendMode: "multiply",
            }}
            width={2220}
            height={1890}
            src="/solander-drawing-2.png"
            alt="Line drawing of Solander 38"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <h3>Connect with us</h3>
            <p>info@risingtideresearch.org</p>
          </div>
          <div>
            <h3>Keep up-to-date with our latest work</h3>
            <p>Subscribe to our newsletter</p>
          </div>
          <h3>Updated {time.toLocaleDateString("en-CA", options)}</h3>
        </div>
      </footer>
    </div>
  );
}

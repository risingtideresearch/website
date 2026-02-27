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
  lastUpdated: string;
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
    </div>
  );
}

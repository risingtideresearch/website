import styles from "./temp-landing.module.scss";
import { Homepage } from "@/sanity/lib/utils";
import LogoStacked from "./LogoStacked";

export default function TempLandingPage({ content }: { content: Homepage }) {
  const time = new Date(content._updatedAt);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={styles.page}>
      <div className={`${styles.title}`}>
        <div className={`${styles.logo}`}>
          <LogoStacked />
        </div>
        <p>{content.description}</p>
      </div>

      <div className={`${styles.updated}`}>
        <p>Updated {time.toLocaleDateString("en-CA", options)}</p>
      </div>
    </div>
  );
}

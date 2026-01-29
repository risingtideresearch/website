import Image from "next/image";
import styles from "./temp-landing.module.scss";

function NonBreakingText({ children }: { children: string }) {
  return <>{children.replace(/-/g, "\u2011")}</>;
}

export default function TempLandingPage({ content }) {
  const time = new Date(content._updatedAt);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={styles.page}>
      <div className={`${styles.title}`}>
        <Image
          src="/RTRF_Logo-01_Stacked_BLK.png"
          width="3525"
          height="1280"
          alt="Rising Tide Research Foundation logo"
          className={` ${styles.panel}`}
          loading={'eager'}
        />
        <p>
          {content.description}
        </p>
      </div>

      <div className={`${styles.updated}`}>
        <p>Updated {time.toLocaleDateString('en-CA', options)}</p>
      </div>
    </div>
  );
}

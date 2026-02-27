import { fetchLastUpdated } from "@/sanity/lib/utils";
import Image from "next/image";
import { formatDate } from "../util";
import styles from "./footer.module.scss";

export default async function Footer() {
  const updated = await fetchLastUpdated();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Image
          style={{ mixBlendMode: "multiply" }}
          width={2220}
          height={1890}
          src="/solander-drawing-2.png"
          alt="Line drawing of Solander 38"
        />
        <div className={styles.info}>
          <div>
            <h3>Connect with us</h3>
            <p>info@risingtideresearch.org</p>
          </div>
          {/* <div>
            <h3>Keep up-to-date with our latest work</h3>
            <p>Subscribe to our newsletter</p>
          </div> */}
          <h3>Updated {formatDate(updated)}</h3>
        </div>
      </div>
    </footer>
  );
}

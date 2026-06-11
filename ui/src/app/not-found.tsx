import Link from "next/link";
import Header from "./components/Header";
import styles from "./page.module.scss";
import { LeftArrowIcon } from "./components/LinkIcon";

export default function NotFound() {
  return (
    <div>
      <Header />
      <main>
        <h1>This page doesn&apos;t exist.</h1>
        <div className={styles.footer}>
          <h6>
            <Link href="/"><LeftArrowIcon size={'1.5rem'} />Home</Link>
          </h6>
        </div>
      </main>
    </div>
  );
}

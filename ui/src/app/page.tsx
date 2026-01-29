import TempLandingPage from "./components/TempLandingPage";
import styles from "./page.module.css";
import { fetchHomepage } from "@/sanity/lib/utils";

export default async function Home() {
  const { data } = await fetchHomepage();
  return (
    <div className={styles.page}>
      <TempLandingPage content={data} />
    </div>
  );
}

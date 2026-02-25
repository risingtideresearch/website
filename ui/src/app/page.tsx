
import Home from "./components/Home";
import styles from "./page.module.scss";
import { fetchHomepage, fetchLastUpdated } from "@/sanity/lib/utils";

export default async function App() {
  const { data } = await fetchHomepage();
  const updated = await fetchLastUpdated();
  return (
    <div className={styles.page}>
      <Home content={data} lastUpdated={updated.data} />
    </div>
  );
}

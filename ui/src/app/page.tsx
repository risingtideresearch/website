
import Home from "./components/Home";
import styles from "./page.module.scss";
import { fetchHomepage } from "@/sanity/lib/utils";

export default async function App() {
  const { data } = await fetchHomepage();
  return (
    <div className={styles.page}>
      <Home content={data} />
    </div>
  );
}

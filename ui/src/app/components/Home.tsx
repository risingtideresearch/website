import styles from "./home.module.scss";
import { Homepage } from "@/sanity/lib/utils";
import Header from "./Header";
import ActivitiesList from "./ActivitiesList";
import Directory from "./Directory";
export default function Home({ content }: { content: Homepage }) {
  return (
    <div className={styles.page}>
      <Header>
        <h2>{content.description}</h2>
      </Header>
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

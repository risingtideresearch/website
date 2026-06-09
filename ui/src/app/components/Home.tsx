import styles from "./home.module.scss";
import { Homepage } from "@/sanity/lib/utils";
import Header from "./Header";
import ActivitiesList from "./ActivitiesList";
import Directory from "./Directory";
import ResourcesList from "./ResourcesList";
export default function Home({ content }: { content: Homepage }) {
  return (
    <div className={styles.page}>
      <Header>
        <h1>{content.description}</h1>
      </Header>
      <main>
        <div>
          <ActivitiesList />
          <Directory />
          {/* <ResourcesList /> */}
        </div>
      </main>
    </div>
  );
}

import styles from "./home.module.scss";
import { Homepage } from "@/sanity/lib/utils";
import Header from "./Header";
import ActivitiesList from "./ActivitiesList";
import Directory from "./Directory";
export default function Home({ content }: { content: Homepage }) {
  return (
    <div className={styles.page}>
      <Header>
        <h1 className="font-acumin-regular--mobile">{content.description}</h1>
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

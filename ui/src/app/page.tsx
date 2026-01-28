import Image from "next/image";
import styles from "./page.module.css";
import { fetchHomepage } from "@/sanity/lib/utils";
import ActivitiesList from "./components/ActivitiesList";
import ProgramsList from "./components/ProgramsList";

function NonBreakingText({ children }: { children: string }) {
  return <>{children.replace(/-/g, "\u2011")}</>;
}

export default async function Home() {
  const { data } = await fetchHomepage();
  console.log(data);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <div>
            <Image
              className={styles.logo}
              src="/RTRF_Logo-01_Stacked_BLK.png"
              alt="Rising Tide Research Foundation logo"
              loading="eager"
              width={3525}
              height={1289}
            />
          </div>
          <h1>
            <NonBreakingText>{data.description}</NonBreakingText>
          </h1>
        </div>
        <ActivitiesList />

        {/* <ProgramsList /> */}
      </main>
    </div>
  );
}

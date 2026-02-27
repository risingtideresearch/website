import { fetchPrograms, fetchProgram, Program } from "@/sanity/lib/utils";
import { PortableText } from "next-sanity";
import styles from "./page.module.scss";
import { formatDate } from "../util";
import Header from "../components/Header";

export async function generateStaticParams() {
  const { data } = await fetchPrograms();

  return data.map((program: Program) => ({
    slug: program.slug.current,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await fetchProgram(slug);

  const program = data[0] || {};

  return (
    <div>
      <Header>
        <div className={styles.header}>
          <h3>{program.activities?.[0].name}</h3>
          <h1>{program.name}</h1>
        </div>
      </Header>
      <main className={styles.body}>
        <div></div>
        <div>
          <h3>Updated {formatDate(program._updatedAt)}</h3>{" "}
          {program.content && <PortableText value={program.content} />}
        </div>
      </main>
    </div>
  );
}

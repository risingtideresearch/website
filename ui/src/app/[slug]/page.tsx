import {
  fetchPrograms,
  fetchProgram,
  fetchUpdates,
  Program,
} from "@/sanity/lib/utils";
import { PortableText } from "next-sanity";
import styles from "./page.module.scss";
import { formatDate } from "../util";
import Link from "next/link";
import Header from "../components/Header";
import UpdatesList from "../components/UpdatesList";
import { notFound } from "next/navigation";
import Image from "next/image";
import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { portableTextComponents } from "../components/portableTextComponents";

const builder = createImageUrlBuilder(client);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await fetchProgram(slug);
  const program = data[0];

  return {
    title: program?.name + " • Rising Tide Research Foundation",
    description: program?.description,
    openGraph: {
      type: "article",
      modifiedTime: program?._updatedAt,
    },
  };
}

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

  const program = data[0];

  if (!program) {
    notFound();
  }

  const { data: updates } = await fetchUpdates(program._id);

  return (
    <div>
      <Header>
        <div className={styles.header}>
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h6>{program.activities?.[0].name}</h6>

            <h6>Updated {formatDate(program._updatedAt)}</h6>
          </div> */}
          <div>
            {program.iconUrl && (
              <Image
                src={program.iconUrl}
                alt={program.iconAlt ?? ""}
                aria-hidden={!program.iconAlt}
                width={144}
                height={144}
                unoptimized
              />
            )}
          </div>
          <div>
            <div>
              <h6>{program.activities?.[0].name}</h6>
              <h1>{program.name}</h1>
            </div>
          </div>
        </div>
      </Header>
      <main className={styles.body}>
        <div></div>
        <div>
          {program.image?.asset && (
            <Image
              src={builder.image(program.image).url()}
              alt={program.name}
              width={program.image.asset.metadata?.dimensions?.width || 800}
              height={program.image.asset.metadata?.dimensions?.height || 600}
              className={styles.image}
            />
          )}
          {updates.length > 0 && (
            <section>
              <UpdatesList updates={updates} />
            </section>
          )}
          {program.content && (
            <section>
              <h3>Overview</h3>
              <PortableText
                value={program.content}
                components={portableTextComponents}
              />
            </section>
          )}
          <section className={styles.footer}>
            <Link href="/" className={styles["programs-link"]}>← Programs</Link>
            <h6>Updated <time dateTime={program._updatedAt}>{formatDate(program._updatedAt)}</time></h6>
          </section>
        </div>
      </main>
    </div>
  );
}

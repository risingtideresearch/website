import {
  fetchPrograms,
  fetchProgram,
  fetchUpdates,
  Program,
} from "@/sanity/lib/utils";
import { PortableText } from "next-sanity";
import styles from "./page.module.scss";
import { formatDate } from "../util";
import Header from "../components/Header";
import UpdatesList from "../components/UpdatesList";
import { notFound } from "next/navigation";
import Image from "next/image";
import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { portableTextComponents } from "../components/portableTextComponents";
import Link from "next/link";
import { LeftArrowIcon } from "../components/LinkIcon";

const builder = createImageUrlBuilder(client);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await fetchProgram(slug);
  const program = data[0];

  const ogImage = program?.image?.asset
    ? builder.image(program.image).width(1200).height(630).fit("crop").url()
    : "https://rising-tide-research.netlify.app/preview.png";

  return {
    title: program?.name + " • Rising Tide Research Foundation",
    description: program?.description,
    openGraph: {
      type: "article",
      modifiedTime: program?._updatedAt,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
  };
}

export async function generateStaticParams() {
  const { data } = await fetchPrograms(true);

  return data
    .filter((program: Program) => !program.link?.url)
    .map((program: Program) => ({
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

  if (!program || program.link?.url) {
    notFound();
  }

  const { data: updates } = await fetchUpdates(program._id);

  return (
    <div>
      <Header responsiveLogo>
        <div className={styles.header}>
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
              <h6>{program.activities?.[0]?.name}</h6>
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
        </div>
        <section className={styles.footer} style={{ gridColumn: "span 2" }}>
          <h6><Link href="/" className={styles["programs-link"]}><LeftArrowIcon size="1.5rem" />Back</Link></h6>
          <h6>
            Updated{" "}
            <time dateTime={program._updatedAt}>
              {formatDate(program._updatedAt)}
            </time>
          </h6>
        </section>
      </main>
    </div>
  );
}

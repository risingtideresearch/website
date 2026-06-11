import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
import NewsletterForm from "./NewsletterForm";
import { fetchPrograms } from "@/sanity/lib/utils";
import { ExternalLinkIcon, InternalLinkIcon } from "./LinkIcon";
import { formatDate } from "../util";
import Logo from "./Logo";

const buildDate = new Date().toISOString();

export default async function Footer() {
  const { data: programs } = await fetchPrograms();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h6>Site</h6>
          <nav className={styles.sitemap}>
            <Link href="/">Rising Tide Research Foundation</Link>
          </nav>

          <p className="font-acumin-regular">
            Except where otherwise noted, content on this site is&nbsp;licensed under
            a{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
            >
              Creative Commons Attribution 4.0 International License
            </a>
            , [CC BY 4.0].
          </p>

          {/* <p className="font-acumin-regular">
            Site updated{" "}
            <time dateTime={buildDate}>{formatDate(buildDate)}</time>
          </p> */}
        </div>
        <div>
          <h6>Programs</h6>
          <nav className={styles.sitemap}>
            {programs
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((program) => {
                return program.hasPage ? (
                  program.link?.url ? (
                    <a
                      key={program._id}
                      href={program.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {program.name}
                      {/* <ExternalLinkIcon size="1em" /> */}
                    </a>
                  ) : (
                    // <Link key={program._id} href={`/${program.slug.current}`}>
                    //   {program.name}<InternalLinkIcon size="1em" />
                    // </Link>
                    <Link key={program._id} href={`/${program.slug.current}`}>
                      {program.name}
                    </Link>
                  )
                ) : (
                  <p key={program._id} className="font-acumin-regular">{program.name}</p>
                );
              })}
          </nav>
        </div>
        <div className={`${styles.info} footer-info`}>
          <h6>Connect with us</h6>
          <p className="font-acumin-regular">info@risingtideresearch.org</p>
          <div>
            <NewsletterForm />
          </div>
        </div>

        {/* <div>
          <Image
            style={{ mixBlendMode: "multiply" }}
            width={2220}
            height={1890}
            sizes="304px"
            src="/solander-drawing-2.png"
            alt="Line drawing of Solander 38"
          />
        </div> */}
      </div>
      {/* <div className={styles.inner}>
      </div> */}
    </footer>
  );
}

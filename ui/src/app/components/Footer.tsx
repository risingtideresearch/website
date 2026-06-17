import Link from "next/link";
import styles from "./footer.module.scss";
import NewsletterForm from "./NewsletterForm";
import { fetchPrograms } from "@/sanity/lib/utils";

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
                    </a>
                  ) : (
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
        <div className={`footer-info`}>
          <h6>Connect with us</h6>
          <p className="font-acumin-regular">info@risingtideresearch.org</p>
          <div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </footer>
  );
}

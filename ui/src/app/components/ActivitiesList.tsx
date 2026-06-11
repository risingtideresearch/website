import { fetchActivities, Program } from "@/sanity/lib/utils";
import styles from "./activities.module.scss";
import { formatDate } from "../util";
import Image from "next/image";
import { ExternalLinkIcon, InternalLinkIcon } from "./LinkIcon";
import { ReactNode } from "react";

export default async function ActivitiesList() {
  const { data } = await fetchActivities();

  const linkIcon = (program: Program) =>
    program.link?.url ? (
      <ExternalLinkIcon />
    ) : program.hasContent ? (
      <InternalLinkIcon />
    ) : null;

  const link = (program: Program, children: ReactNode) =>
    program.link?.url ? (
      <a href={program.link.url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : program.hasContent ? (
      <a href={`/${program.slug?.current}`}>{children}</a>
    ) : (
      <>{children}</>
    );

  return (
    <section>
      <ul className={styles.list}>
        {data
          .sort((a, b) => b.name.localeCompare(a.name))
          .map((activity) => (
            <li className={styles.activity} key={activity._id}>
              <div className={styles.activities__title}>
                <h2>{activity.name}</h2>
                <h6>{activity.description}</h6>
              </div>
              <ol>
                {activity.programs
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((program) => (
                    <li key={program._id} className={styles.program}>
                      <div className={styles.program__icon}>
                        {program.iconUrl &&
                          link(
                            program,
                            <Image
                              src={program.iconUrl}
                              alt={program.iconAlt ?? ""}
                              aria-hidden={!program.iconAlt}
                              width={144}
                              height={144}
                              unoptimized
                            />,
                          )}
                      </div>
                      <div className={styles.program__header}>
                        <h3>
                          {link(
                            program,
                            <>
                              <span>{program.name}</span>
                            </>,
                          )}
                        </h3>
                        <h6>
                          {program.hasContent ? (
                            <time dateTime={program._updatedAt}>
                              {formatDate(program._updatedAt)}
                            </time>
                          ) : (
                            <span>In progress</span>
                          )}
                        </h6>

                        <div className={styles["icon--mobile"]}>
                          {linkIcon(program)}
                        </div>
                      </div>
                      <div className={styles.program__description}>
                        <p>{program.description}</p>
                        {link(program, linkIcon(program))}
                      </div>
                    </li>
                  ))}
              </ol>
            </li>
          ))}
      </ul>
    </section>
  );
}

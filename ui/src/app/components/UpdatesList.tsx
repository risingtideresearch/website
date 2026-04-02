"use client";

import { useState } from "react";
import { PortableText } from "next-sanity";
import { Update } from "@/sanity/lib/utils";
import { formatDate } from "../util";
import styles from "./updates-list.module.scss";
import { portableTextComponents } from "./portableTextComponents";

export default function UpdatesList({ updates }: { updates: Update[] }) {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? updates : updates.slice(0, 3);

  return (
    <section className={styles.updates}>
      <h3>Latest</h3>
      {visible.map((update) => (
        <div key={update._id} className={styles.update}>
          <span className={styles.circle}></span>
          <div>
            <p>{update.title}</p>
            <span className={styles.date}>{formatDate(update.date)}</span>
            {update.link?.map((l) => (
              <a
                key={l.url}
                href={l.url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.title || l.url}
              </a>
            ))}
            {update.content && <PortableText value={update.content} components={portableTextComponents} />}
          </div>
        </div>
      ))}
      {updates.length > 3 && !expanded && (
        <button className={styles.viewAll} onClick={() => setExpanded(true)}>
          View all ({updates.length})
        </button>
      )}
    </section>
  );
}

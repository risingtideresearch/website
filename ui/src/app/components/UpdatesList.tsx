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
    <div className={styles.updates}>
      <h3>Latest</h3>
      {visible.map((update) => (
        <div key={update._id} className={styles.update}>
          <h6 className={styles.date}><time dateTime={update.date}>{formatDate(update.date)}</time></h6>
          <div>
            <h4>{update.title}</h4>
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
            {update.content && (
              <PortableText
                value={update.content}
                components={portableTextComponents}
              />
            )}
          </div>
        </div>
      ))}
      {updates.length > 3 && !expanded && (
        <button
          className={styles["view-all"]}
          onClick={() => setExpanded(true)}
        >
          View all ({updates.length})
        </button>
      )}
    </div>
  );
}

import { fetchResources, Resource } from "@/sanity/lib/utils";
import styles from "./resources.module.scss";

export default async function ResourcesList() {
  const { data } = await fetchResources();

  if (!data.length) return null;

  const grouped = data.reduce<Record<string, Resource[]>>((acc, resource) => {
    const key = resource.type ?? "Other";
    (acc[key] ??= []).push(resource);
    return acc;
  }, {});

  return (
    <section>
      <h3>Resources</h3>
      {Object.entries(grouped).map(([type, resources]) => (
        <div key={type} className={styles.group}>
          <h4 style={{textTransform: 'capitalize'}}>{type + 's'}</h4>
          <ul className={styles.list}>
            {resources.map((resource) => (
              <li key={resource._id} className={styles.item}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.name}
                </a>
                {resource.description && <p>{resource.description}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

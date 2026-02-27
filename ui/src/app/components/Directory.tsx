import { fetchDirectory } from "@/sanity/lib/utils";
import styles from './directory.module.scss';

export default async function ActivitiesList() {
  const { data } = await fetchDirectory();

  return (
    <section>
      <h3>Our Directory</h3>
      <div>
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((group) => (
            <div
              key={group._id}
              className={styles.directory__group}
            >
              <h4>{group.name}</h4>
              <div
                className={styles.directory__group__list}
              >
                {group.people
                  .sort((a, b) => a.role.includes('Director') || a.role.includes('Manager') ? -1 : a.name.localeCompare(b.name))
                  .map((person) => (
                    <div key={person._id}>
                      <p>{person.name}</p>
                      <h3>{person.role}</h3>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

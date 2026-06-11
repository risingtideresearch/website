import { fetchDirectory } from "@/sanity/lib/utils";
import styles from './directory.module.scss';

export default async function Directory() {
  const { data } = await fetchDirectory();

  return (
    <section>
      <h6>Our Directory</h6>
      <div className={styles.directory}>
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((group) => (
            <div
              key={group._id}
              className={styles.directory__group}
            >
              <h3>{group.name}</h3>
              <div
                className={styles.directory__group__list}
                style={group.people.length < 4 ? {gridTemplateColumns: '1fr'} : {}}
              >
                {group.people
                  .sort((a, b) => a.role.includes('Director') || a.role.includes('Manager') ? -1 : a.name.localeCompare(b.name))
                  .map((person) => (
                    <div key={person._id}>
                      <p>{person.name}</p>
                      <h6>{person.role}</h6>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

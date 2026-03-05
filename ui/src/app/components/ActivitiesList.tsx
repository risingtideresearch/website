import { fetchActivities } from "@/sanity/lib/utils";
import styles from './activities.module.scss';
import { formatDate } from "../util";

export default async function ActivitiesList() {
  const { data } = await fetchActivities();
  return (
    <section>
      <h3>Our Activities</h3>
      <ul className={styles.list}>
        {data
          .sort((a, b) => b.name.localeCompare(a.name))
          .map((activity, i) => (
            <li className={styles.activity} key={activity._id}>
              <div className={styles.activities__title}>
                <h4>{activity.name}</h4>
                <div className={styles.activities__title__line}></div>
                <p>{activity.description}</p>
              </div>
              <ol key={activity._id}>
                {activity.programs
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((program, j) => (
                    <li key={program._id} className={styles.program}>
                      <p>
                        {i + 1}&ndash;{String.fromCharCode(j + 65)}
                      </p>
                      <div className={styles.program__header}>
                        <p>
                          {program.content && program.content.length > 0
                            ? <a href={`/${program.slug?.current}`}>{program.name}</a>
                            : program.name}
                        </p>
                        <h3>
                          {program.content
                            ? formatDate(program._updatedAt)
                            : <em className={styles.in_progress}>In progress</em>}
                        </h3>
                      </div>
                      <p></p>
                      <p>{program.description}</p>
                    </li>
                  ))}
              </ol>
            </li>
          ))}
      </ul>
    </section>
  );
}

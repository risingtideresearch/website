import { fetchActivities } from "@/sanity/lib/utils";
import styles from  './activities.module.scss';
import { formatDate } from "../util";

export default async function ActivitiesList() {
  const { data } = await fetchActivities();
  return (
    <section>
      <h3>Our Activities</h3>
      <ul style={{ listStyle: 'none'}}>
        {data
          .sort((a, b) => b.name.localeCompare(a.name))
          .map((activity, i) => (
            <li style={{ position: "relative", margin: '1rem 0 3rem 0' }} key={activity._id}>
              {/* {i == 0 ? (
                <img
                  style={{
                    position: "absolute",
                    top: "-2rem",
                    left: "-2rem",
                    maxWidth: "17rem",
                    transform: "translate(-100%, 0)",
                  }}
                  src="/solander-drawing-2.png"
                />
              ) : (
                ""
              )} */}
              <div className={styles.activities__title}>
                <h4>{activity.name}</h4>
                <div className={styles.activities__title__line}
                ></div>
                <p>{activity.description}</p>
              </div>
              <ol key={activity._id}>
                {activity.programs
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((program, j) => (
                    <li
                      key={program._id}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "2rem 1fr",
                        rowGap: "1rem",
                        columnGap: "2rem",
                        margin: '1rem 0',
                      }}
                    >
                      <p>
                        {i + 1}&ndash;{String.fromCharCode(j + 65)}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p><a href={`/${program.slug?.current}`}>{program.name}</a></p>
                        <h3>
                          {formatDate(program._updatedAt)}
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

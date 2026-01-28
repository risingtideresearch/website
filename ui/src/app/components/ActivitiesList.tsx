import { fetchActivities, fetchPrograms } from "@/sanity/lib/utils";

export default async function ProgramList() {
  //   const { programs } = await fetchPrograms();

  const { data } = await fetchActivities();
  console.log(data);
  return (
    <section>
      <h2>Activities</h2>
      <ul>
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((activity) => (
            <li key={activity._id}>
              <h3>{activity.name}</h3>
            </li>
          ))}
      </ul>
    </section>
  );
}

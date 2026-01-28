import { fetchPrograms } from "@/sanity/lib/utils";

export default async function ProgramsList() {
  const { data } = await fetchPrograms();
  console.log(data);
  return (
    <section>
      <h2>Programs</h2>
      <ul>
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((program) => (
            <li key={program._id}>
              <h3>{program.name}</h3>
              <p>{program.description}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}

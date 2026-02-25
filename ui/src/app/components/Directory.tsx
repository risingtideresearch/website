import { fetchDirectory } from "@/sanity/lib/utils";

export default async function ActivitiesList() {
  const { data } = await fetchDirectory();

  return (
    <section>
      <h3>Our Directory</h3>
      <div>
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((group) => (
            <div key={group._id} style={{margin: '1rem 0 2rem 0', display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
              <h4>{group.name}</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: '1rem'}}>
                {group.people
                  .sort((a, b) => a.name.localeCompare(b.name))
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

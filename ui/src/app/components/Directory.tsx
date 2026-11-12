import { fetchDirectory, DirectoryPerson } from "@/sanity/lib/utils";
import styles from './directory.module.scss';

// The page shows two sections: the board (matched by Sanity group name)
// and a catch-all "Team" for everyone else, whatever their Sanity group.
const BOARD_GROUP = 'Board of Directors';
const TEAM_HEADING = 'Team';

type Entry = { _id: string; name: string; role: string | null };

const isBoard = (group: string | null) =>
  group?.trim().toLowerCase() === BOARD_GROUP.toLowerCase();

// Directors and managers are listed first in each section
const isLead = (role: string | null) => !!role && (role.includes('Director') || role.includes('Manager'));

function splitDirectory(people: DirectoryPerson[]) {
  const board: Entry[] = [];
  const team: Entry[] = [];

  for (const person of people) {
    const boardRole = person.roles.find((r) => isBoard(r.group));
    const otherRoles = person.roles.filter((r) => !isBoard(r.group));

    if (boardRole) {
      board.push({ _id: person._id, name: person.name, role: boardRole.role });
    }

    // Board members only also appear in Team if they hold a non-board role
    if (!boardRole || otherRoles.some((r) => r.role)) {
      const teamRole = otherRoles.find((r) => r.role)?.role ?? null;
      team.push({ _id: person._id, name: person.name, role: teamRole });
    }
  }

  return [
    { heading: BOARD_GROUP, people: board },
    { heading: TEAM_HEADING, people: team },
  ].filter((section) => section.people.length > 0);
}

export default async function Directory() {
  const { data } = await fetchDirectory();
  const sections = splitDirectory(data);

  return (
    <section>
      <h6>Our Directory</h6>
      <div className={styles.directory}>
        {sections.map((section) => (
          <div
            key={section.heading}
            className={styles.directory__group}
          >
            <h3>{section.heading}</h3>
            <div
              className={styles.directory__group__list}
              style={section.people.length < 4 ? {gridTemplateColumns: '1fr'} : {}}
            >
              {section.people
                .sort((a, b) => Number(isLead(b.role)) - Number(isLead(a.role)) || a.name.localeCompare(b.name))
                .map((person) => (
                  <div key={person._id}>
                    <p>{person.name}</p>
                    {person.role && <h6>{person.role}</h6>}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

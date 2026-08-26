import { Pin } from '~/components/ui/Pin'
import { Section } from '~/components/ui/Section'
import { founders, judge, staff, type Person } from '~/data/team'
import styles from './PeopleSection.module.css'

function PersonCard({
  person,
  featured = false,
}: {
  person: Person
  featured?: boolean
}) {
  const portrait = (
    <img
      className={styles.avatar}
      src={person.photo}
      alt={person.name}
      width={300}
      height={300}
      loading="lazy"
      decoding="async"
    />
  )

  return (
    <article
      className={
        featured ? `${styles.person} ${styles.featured}` : styles.person
      }
    >
      <Pin />
      <div className={styles.identity}>
        {person.href ? (
          <a
            className={styles.portraitLink}
            href={person.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} profile (opens in a new tab)`}
          >
            {portrait}
          </a>
        ) : (
          portrait
        )}
        <h3>{person.name}</h3>
        <p className={styles.role}>{person.role}</p>
      </div>
      {person.bio && <p className={styles.bio}>{person.bio}</p>}
    </article>
  )
}

function PeopleGrid({ people }: { people: readonly Person[] }) {
  return (
    <div className={styles.people}>
      {people.map((person) => (
        <PersonCard key={person.name} person={person} />
      ))}
    </div>
  )
}

export function PeopleSection() {
  return (
    <>
      <Section id="team" title="The current team">
        <p className={styles.lede}>
          The students leading MACSO’s contests, problems, and partnerships
          today.
        </p>
        <PeopleGrid people={staff} />
      </Section>
      <Section id="founders" title="The founders">
        <p className={styles.lede}>
          The original student team that turned MACSO from an idea into a
          statewide community.
        </p>
        <PeopleGrid people={founders} />
      </Section>
      <Section id="judge" title="Our judge">
        <div className={styles.featuredWrap}>
          <PersonCard person={judge} featured />
        </div>
      </Section>
    </>
  )
}

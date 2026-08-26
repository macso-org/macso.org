import styles from './ContextSection.module.css'

const eligibility = [
  'Everyone is welcome, from first-time competitors to experienced coders.',
  'No qualifier or Massachusetts residency is required.',
  'The 2026 contest is in person in Cambridge.',
] as const

export function ContextSection() {
  return (
    <section className={styles.context} aria-labelledby="about-title">
      <div className={styles.about}>
        <p className={styles.eyebrow}>What is MACSO?</p>
        <h2 id="about-title">Think, code, and meet your people.</h2>
        <p>
          The Massachusetts Computer Science Olympiad is an in-person
          programming competition created for high-school students by Brookline
          Computer Science Initiative. It brings aspiring programmers together
          for hands-on contest experience beyond the classroom.
        </p>
      </div>
      <aside className={styles.eligibility} aria-labelledby="eligibility-title">
        <p className={styles.noteLabel}>2026 eligibility</p>
        <h2 id="eligibility-title">Who can participate?</h2>
        <ul>
          {eligibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

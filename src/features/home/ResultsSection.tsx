import { Section } from '~/components/ui/Section'
import type { Scoreboard } from '~/data/results'
import styles from './ResultsSection.module.css'

export function ResultsSection({
  scoreboards,
}: {
  scoreboards: readonly Scoreboard[]
}) {
  return (
    <Section id="results" title="Final Standings">
      <div className={styles.results}>
        {scoreboards.map((board) => (
          <div className={styles.scorecard} key={board.title}>
            <h3>{board.title}</h3>
            <div className={styles.tableWrap}>
              <table>
                <caption className={styles.visuallyHidden}>
                  {board.title}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Award</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">School</th>
                  </tr>
                </thead>
                <tbody>
                  {board.rows.map((row) => (
                    <tr key={row.name}>
                      <td>
                        {row.award === null ? (
                          <span className={styles.mention}>hm.</span>
                        ) : (
                          <span
                            className={
                              row.award === '1st'
                                ? `${styles.award} ${styles.awardFirst}`
                                : styles.award
                            }
                          >
                            {row.award}
                          </span>
                        )}
                      </td>
                      <td
                        className={row.award === null ? undefined : styles.name}
                      >
                        {row.name}
                      </td>
                      <td>{row.school}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

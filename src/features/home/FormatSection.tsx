import { Section } from '~/components/ui/Section'
import { Pin } from '~/components/ui/Pin'
import { TextLink } from '~/components/ui/TextLink'
import { site } from '~/data/site'
import typography from '~/styles/typography.module.css'
import styles from './FormatSection.module.css'

export function FormatSection() {
  const { round } = site

  return (
    <Section
      id="format"
      title="Two rounds. One challenge."
      className={styles.format}
    >
      <p className={typography.lede}>
        This year MACSO runs in two rounds: an online qualification round that
        anyone can enter, followed by an in-person final for the competitors who
        advance.
      </p>

      <ol className={styles.rounds}>
        <li className={styles.round}>
          <Pin small />
          <p className={styles.eyebrow}>Round 1</p>
          <h3>Online Qualification</h3>
          <dl className={styles.facts}>
            <div>
              <dt>Opens</dt>
              <dd>{round.onlineOpens}</dd>
            </div>
            <div>
              <dt>Problems</dt>
              <dd>3–4 to start, with more possible as the round runs</dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>
                Online at{' '}
                <TextLink href={site.grader}>grader.macso.org</TextLink>
              </dd>
            </div>
          </dl>
          <p className={styles.note}>
            Solve at your own pace any time while the round is open. Everyone is
            welcome — there is no qualification requirement to enter Round 1.
          </p>
        </li>

        <li className={styles.round}>
          <Pin small />
          <p className={styles.eyebrow}>Round 2</p>
          <h3>In-Person Final</h3>
          <dl className={styles.facts}>
            <div>
              <dt>When</dt>
              <dd>{round.finalDates}</dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>
                {site.venue.name}, {site.venue.address}
              </dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>A timed individual contest, scored ICPC-style</dd>
            </div>
            <div>
              <dt>Who</dt>
              <dd>Competitors who advance out of Round 1</dd>
            </div>
          </dl>
          <p className={styles.note}>
            Qualifiers receive details by email. Top competitors receive prizes.
          </p>
        </li>
      </ol>
    </Section>
  )
}

import { Hero, HeroTitle, Highlight } from '~/components/ui/Hero'
import type { ContestArchive } from '~/data/contests'
import animations from '~/styles/animations.module.css'
import styles from './ContestHero.module.css'

export function ContestHero({ contest }: { contest: ContestArchive }) {
  return (
    <Hero>
      <p className={`${styles.eyebrow} ${animations.rise1}`}>Contest archive</p>
      <HeroTitle>
        MACSO <Highlight>{contest.year}</Highlight>
      </HeroTitle>
      <p className={`${styles.summary} ${animations.rise2}`}>
        {contest.summary}
      </p>
      <nav
        className={`${styles.sectionNav} ${animations.rise3}`}
        aria-label={`${contest.year} contest sections`}
      >
        <a href="#photos">Photos</a>
        {contest.scoreboards && <a href="#standings">Final standings</a>}
        <a href="#sponsors">Sponsors</a>
      </nav>
    </Hero>
  )
}

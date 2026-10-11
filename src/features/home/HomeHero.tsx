import { Button } from '~/components/ui/Button'
import { Hero, HeroActions, HeroTitle, Highlight } from '~/components/ui/Hero'
import { site } from '~/data/site'
import styles from '~/pages/CompetitionPage.module.css'

export function HomeHero() {
  return (
    <Hero>
      <p>Massachusetts Computer Science Olympiad</p>
      <HeroTitle>
        MACSO <Highlight>2026</Highlight>
      </HeroTitle>
      <p className={styles.description}>
        Put your problem-solving skills to the test. Start online, then compete
        for a place in the in-person final in Brookline.
      </p>
      <HeroActions>
        <Button href={site.registrationForm}>Register for Round 1</Button>
      </HeroActions>
    </Hero>
  )
}

import { Button } from '~/components/ui/Button'
import { Hero, HeroActions, HeroTitle, Highlight } from '~/components/ui/Hero'
import { ArrowRightIcon } from '~/components/ui/icons'
import { site } from '~/data/site'
import animations from '~/styles/animations.module.css'
import styles from './TeamHero.module.css'

export function TeamHero() {
  return (
    <Hero>
      <p className={`${styles.eyebrow} ${animations.rise1}`}>Meet MACSO</p>
      <HeroTitle>
        The people behind <Highlight>MACSO</Highlight>
      </HeroTitle>
      <p className={`${styles.summary} ${animations.rise2}`}>
        Students, alumni, and mentors working together to build a better
        competitive programming community in Massachusetts.
      </p>
      <HeroActions>
        <Button href="/careers/">
          Join the team
          <ArrowRightIcon />
        </Button>
        <Button href={site.instagram} variant="ghost">
          Follow our work
        </Button>
      </HeroActions>
    </Hero>
  )
}

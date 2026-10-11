import { PageLayout } from '~/components/layout/PageLayout'
import { FaqSection } from '~/features/home/FaqSection'
import { FormatSection } from '~/features/home/FormatSection'
import { HomeHero } from '~/features/home/HomeHero'
import { IntroSection } from '~/features/home/IntroSection'
import { LocationSection } from '~/features/home/LocationSection'
import { SponsorsSection } from '~/features/home/SponsorsSection'
import { currentCompetition } from '~/data/competitions'
import styles from './CompetitionPage.module.css'

export function HomePage() {
  return (
    <PageLayout page="home">
      <HomeHero />
      <IntroSection />
      <FormatSection />
      <LocationSection />
      <FaqSection />
      <SponsorsSection competition={currentCompetition} />
      <nav className={styles.related} aria-label="More from MACSO">
        <a id="highlights" href="/competitions/2025/#highlights">
          Past highlights
        </a>
        <a id="results" href="/competitions/2024/#results">
          2024 results
        </a>
        <a id="team" href="/about/#team">
          Our team
        </a>
        <a id="resources" href="/about/#resources">
          Practice resources
        </a>
        <a id="partners" href="/about/#partners">
          Partner competitions
        </a>
      </nav>
    </PageLayout>
  )
}

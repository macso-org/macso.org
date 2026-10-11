import { PageLayout } from '~/components/layout/PageLayout'
import { Hero, HeroTitle, Highlight } from '~/components/ui/Hero'
import { TextLink } from '~/components/ui/TextLink'
import { competitions } from '~/data/competitions'
import { site } from '~/data/site'
import { HighlightsSection } from '~/features/home/HighlightsSection'
import { ResultsSection } from '~/features/home/ResultsSection'
import { SponsorsSection } from '~/features/home/SponsorsSection'
import styles from './CompetitionPage.module.css'

export function ArchivePage({ year }: { year: 2024 | 2025 }) {
  const competition = competitions[year]
  return (
    <PageLayout page={year === 2024 ? 'archive2024' : 'archive2025'}>
      <Hero>
        <p>Past competition · Completed</p>
        <HeroTitle>
          <Highlight>{competition.title}</Highlight>
        </HeroTitle>
        <p className={styles.description}>
          A look back at{' '}
          {year === 2025 ? 'our Fall 2025 competition' : 'our 2024 competition'}
          .
        </p>
        <TextLink href="/">Explore the 2026 competition &rarr;</TextLink>
      </Hero>
      {competition.results && (
        <ResultsSection scoreboards={competition.results} />
      )}
      {competition.photos && <HighlightsSection photos={competition.photos} />}
      <SponsorsSection competition={competition} />
      {year === 2024 && (
        <p className={styles.credit}>
          Directed by{' '}
          <TextLink href={site.credits.mishaZhernevskii}>
            Mikhail Zhernevskii
          </TextLink>
          , June–October 2024.
        </p>
      )}
      <nav className={styles.related} aria-label="Other competitions">
        <a href="/">MACSO 2026</a>
        <a href={competitions[year === 2024 ? 2025 : 2024].href}>
          {competitions[year === 2024 ? 2025 : 2024].title}
        </a>
      </nav>
    </PageLayout>
  )
}

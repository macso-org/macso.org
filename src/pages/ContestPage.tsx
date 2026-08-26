import { PageLayout } from '~/components/layout/PageLayout'
import { PhotoStrip } from '~/components/ui/PhotoStrip'
import { Section } from '~/components/ui/Section'
import { TileGrid } from '~/components/ui/TileGrid'
import { contests, type ContestYear } from '~/data/contests'
import { ContestHero } from '~/features/contest/ContestHero'
import { StandingsSection } from '~/features/contest/StandingsSection'
import typography from '~/styles/typography.module.css'

export function ContestPage({ year }: { year: ContestYear }) {
  const contest = contests[year]

  return (
    <PageLayout page={contest.page}>
      <ContestHero contest={contest} />
      <Section id="photos" title={`${contest.title} in pictures`}>
        <p className={typography.lede}>
          Moments from the contest floor, captured by the MACSO team.
        </p>
        <PhotoStrip photos={contest.photos} />
      </Section>
      {contest.scoreboards && (
        <StandingsSection scoreboards={contest.scoreboards} />
      )}
      <Section id="sponsors" title={`${contest.year} sponsors`}>
        <p className={typography.lede}>
          Thank you to the organizations that helped make MACSO {contest.year}{' '}
          possible.
        </p>
        <TileGrid tiles={contest.sponsors} />
      </Section>
    </PageLayout>
  )
}

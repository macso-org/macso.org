import { PageLayout } from '~/components/layout/PageLayout'
import { PeopleSection } from '~/features/team/PeopleSection'
import { TeamHero } from '~/features/team/TeamHero'

export function TeamPage() {
  return (
    <PageLayout page="team">
      <TeamHero />
      <PeopleSection />
    </PageLayout>
  )
}

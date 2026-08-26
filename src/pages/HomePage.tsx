import { PageLayout } from '~/components/layout/PageLayout'
import { ContextSection } from '~/features/home/ContextSection'
import { HomeHero } from '~/features/home/HomeHero'

export function HomePage() {
  return (
    <PageLayout page="home" footerBelowFold>
      <HomeHero />
      <ContextSection />
    </PageLayout>
  )
}

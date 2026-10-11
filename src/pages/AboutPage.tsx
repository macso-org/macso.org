import { PageLayout } from '~/components/layout/PageLayout'
import { Hero, HeroTitle, Highlight } from '~/components/ui/Hero'
import { Section } from '~/components/ui/Section'
import { TextLink } from '~/components/ui/TextLink'
import { IntroSection } from '~/features/home/IntroSection'
import { TeamSection } from '~/features/home/TeamSection'
import { ResourcesSection } from '~/features/home/ResourcesSection'
import { PartnersSection } from '~/features/home/SponsorsSection'

export function AboutPage() {
  return (
    <PageLayout page="about">
      <Hero>
        <HeroTitle>
          About <Highlight>MACSO</Highlight>
        </HeroTitle>
      </Hero>
      <IntroSection />
      <TeamSection />
      <Section title="Help build the next competition">
        <p>
          Join our student leadership team in problem writing, operations,
          outreach, and more.{' '}
          <TextLink href="/careers/">Explore open roles &rarr;</TextLink>
        </p>
      </Section>
      <ResourcesSection />
      <PartnersSection />
    </PageLayout>
  )
}

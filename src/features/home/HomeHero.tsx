import { Button } from '~/components/ui/Button'
import {
  Hero,
  HeroActions,
  HeroStatus,
  HeroTitle,
  Highlight,
} from '~/components/ui/Hero'
import { ChatIcon, PencilIcon } from '~/components/ui/icons'
import { site } from '~/data/site'

export function HomeHero() {
  return (
    <Hero>
      <HeroTitle>
        Massachusetts Computer Science <Highlight>Olympiad</Highlight>
      </HeroTitle>
      <HeroStatus label="MACSO 2026" value="Late September 2026" />
      <HeroActions>
        <Button href={site.registrationForm}>
          <PencilIcon />
          Registration Form
        </Button>
        <Button href={site.discord} variant="ghost">
          <ChatIcon />
          Discord Server
        </Button>
      </HeroActions>
    </Hero>
  )
}

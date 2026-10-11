import type { Competition } from '~/data/competitions'
import { Section } from '~/components/ui/Section'
import { partners, sponsorDirectory } from '~/data/sponsors'
import typography from '~/styles/typography.module.css'
import { TileGrid } from './TileGrid'

export function SponsorsSection({ competition }: { competition: Competition }) {
  return (
    <Section id="sponsors" title={`${competition.title} Sponsors`}>
      <p className={typography.lede}>A huge thanks to our sponsors.</p>
      <TileGrid
        tiles={competition.sponsors.map((id) => sponsorDirectory[id])}
      />
    </Section>
  )
}

export function PartnersSection() {
  return (
    <Section id="partners" title="Partner Competitions">
      <p className={typography.lede}>
        We recommend trying their competitions as well!
      </p>
      <TileGrid tiles={partners} wide />
    </Section>
  )
}

import { Section } from '~/components/ui/Section'
import type { Photo } from '~/data/photos'
import { PhotoStrip } from './PhotoStrip'

export function HighlightsSection({ photos }: { photos: readonly Photo[] }) {
  return (
    <Section id="highlights" title="Competition Highlights">
      <PhotoStrip photos={photos} />
    </Section>
  )
}

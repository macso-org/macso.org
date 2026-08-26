import { fall25Photos, macso24Photos, type Photo } from './photos'
import { scoreboards, type Scoreboard } from './results'
import { sponsorsByYear, type Tile } from './sponsors'

export type ContestYear = 2025 | 2024

export type ContestArchive = {
  readonly year: ContestYear
  readonly page: 'contest-2025' | 'contest-2024'
  readonly title: string
  readonly summary: string
  readonly photos: readonly Photo[]
  readonly scoreboards?: readonly Scoreboard[]
  readonly sponsors: readonly Tile[]
}

export const contests: Record<ContestYear, ContestArchive> = {
  2025: {
    year: 2025,
    page: 'contest-2025',
    title: 'MACSO Fall 2025',
    summary:
      'A look back at MACSO Fall 2025, its community, and the organizations that made the contest possible.',
    photos: fall25Photos,
    sponsors: sponsorsByYear[2025],
  },
  2024: {
    year: 2024,
    page: 'contest-2024',
    title: 'MACSO 2024',
    summary:
      'Photos and final standings from MACSO 2024, with thanks to the organizations that supported the contest.',
    photos: macso24Photos,
    scoreboards,
    sponsors: sponsorsByYear[2024],
  },
}

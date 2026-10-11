import { fall25Photos, macso24Photos, type Photo } from './photos'
import { scoreboards, type Scoreboard } from './results'
import type { SponsorId } from './sponsors'

export type CompetitionYear = 2024 | 2025 | 2026
export type Competition = {
  readonly year: CompetitionYear
  readonly title: string
  readonly href: string
  readonly status: 'current' | 'completed'
  readonly sponsors: readonly SponsorId[]
  readonly photos?: readonly Photo[]
  readonly results?: readonly Scoreboard[]
}

export const competitions: Record<CompetitionYear, Competition> = {
  2024: {
    year: 2024,
    title: 'MACSO 2024',
    href: '/competitions/2024/',
    status: 'completed',
    sponsors: [
      'ktbyte',
      'rsm',
      'dataIntensity',
      'algoverse',
      'bhs',
      'hackClub',
      'btc',
      'aops',
    ],
    photos: macso24Photos,
    results: scoreboards,
  },
  2025: {
    year: 2025,
    title: 'MACSO Fall 2025',
    href: '/competitions/2025/',
    status: 'completed',
    sponsors: [
      'google',
      'wolfram',
      'jetbrains',
      'bhs',
      'hackClub',
      'btc',
      'aops',
    ],
    photos: fall25Photos,
  },
  2026: {
    year: 2026,
    title: 'MACSO 2026',
    href: '/',
    status: 'current',
    sponsors: ['janeStreet', 'xcamp', 'wolfram', 'bhs', 'hackClub', 'btc'],
  },
}
export const currentCompetition = competitions[2026]
export const pastCompetitions = [
  competitions[2025],
  competitions[2024],
] as const

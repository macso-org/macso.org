export type PageId =
  'home' | 'team' | 'contest-2025' | 'contest-2024' | 'careers'

export const pageMeta: Record<PageId, { topId: string }> = {
  home: { topId: 'notebook-top' },
  team: { topId: 'team-top' },
  'contest-2025': { topId: 'contest-2025-top' },
  'contest-2024': { topId: 'contest-2024-top' },
  careers: { topId: 'careers-top' },
}

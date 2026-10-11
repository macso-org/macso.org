export type PageId =
  'home' | 'careers' | 'about' | 'archive2024' | 'archive2025'
export const pageMeta: Record<PageId, { topId: string }> = {
  home: { topId: 'notebook-top' },
  careers: { topId: 'careers-top' },
  about: { topId: 'about-top' },
  archive2024: { topId: 'archive-2024-top' },
  archive2025: { topId: 'archive-2025-top' },
}

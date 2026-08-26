export const site = {
  name: 'Massachusetts Computer Science Olympiad',
  shortName: 'MACSO',
  email: 'team@macso.org',
  registrationForm: 'https://forms.gle/aJY8tYkmpUaRMRQcA',
  applicationForm: 'https://forms.gle/vrjsWqovnnwBsivb6',
  discord: 'https://discord.gg/cX7tmKwJ8f',
  instagram:
    'https://www.instagram.com/bhs.computerscience?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw==',
  credits: {
    lucasChen: 'https://lucasrchen.com',
    mishaZhernevskii:
      'https://www.linkedin.com/in/mikhail-zhernevskii-117477282',
  },
} as const

export type NavLink = {
  readonly label: string
  readonly href: string
  readonly page: 'home' | 'team' | 'contest-2025' | 'contest-2024'
}

export const navLinks: readonly NavLink[] = [
  { label: 'Home', href: '/', page: 'home' },
  { label: 'Team', href: '/team/', page: 'team' },
  {
    label: '2025 Contest',
    href: '/contests/2025/',
    page: 'contest-2025',
  },
  {
    label: '2024 Contest',
    href: '/contests/2024/',
    page: 'contest-2024',
  },
]

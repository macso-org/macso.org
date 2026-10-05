export const site = {
  name: 'Massachusetts Computer Science Olympiad',
  shortName: 'MACSO',
  email: 'team@macso.org',
  registrationForm: 'https://forms.gle/2ugC4RPD1aQqdgkbA',
  applicationForm: 'https://forms.gle/vrjsWqovnnwBsivb6',
  grader: 'https://grader.macso.org',
  discord: 'https://discord.gg/cX7tmKwJ8f',
  instagram:
    'https://www.instagram.com/bhs.computerscience?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw==',
  instagramHandle: '@bhs.computerscience',
  round: {
    onlineOpens: 'Monday, September 7, 2026',
    onlineCloses: 'Saturday, October 10, 2026',
    onlineClosesShort: 'Oct 10',
    onlineClosesTime: '11:59 PM ET',
    finalDates: 'October 11, 2026',
  },
  venue: {
    name: 'Brookline Teen Center',
    address: '40 Aspinwall Ave, Brookline, MA 02446',
    lat: 42.3369556,
    lng: -71.1202631,
  },
  credits: {
    lucasChen: 'https://lucasrchen.com',
    mishaZhernevskii:
      'https://www.linkedin.com/in/mikhail-zhernevskii-117477282',
  },
} as const

export type NavLink = {
  readonly label: string
  readonly hash: string
}

export const navLinks: readonly NavLink[] = [
  { label: 'Format', hash: '#format' },
  { label: 'Highlights', hash: '#highlights' },
  { label: 'Results', hash: '#results' },
  { label: 'FAQ', hash: '#faq' },
  { label: 'Team', hash: '#team' },
  { label: 'Sponsors', hash: '#sponsors' },
  { label: 'Location', hash: '#location' },
]

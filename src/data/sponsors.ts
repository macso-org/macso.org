export type Tile = {
  readonly name: string
  readonly href: string
  readonly logo: string
}

export const sponsorDirectory = {
  xcamp: {
    name: 'X-Camp',
    href: 'https://x-camp.academy/',
    logo: '/images/logos/x-camp.svg',
  },
  janeStreet: {
    name: 'Jane Street',
    href: 'https://www.janestreet.com/',
    logo: '/images/logos/jane-street.png',
  },
  google: {
    name: 'Google',
    href: 'https://edu.google.com/',
    logo: '/images/logos/google.webp',
  },
  wolfram: {
    name: 'Wolfram',
    href: 'https://www.wolfram.com/',
    logo: '/images/logos/wolfram.webp',
  },
  jetbrains: {
    name: 'JetBrains',
    href: 'https://www.jetbrains.com/',
    logo: '/images/logos/jetbrains_logo.webp',
  },
  btc: {
    name: 'Brookline Teen Center',
    href: 'https://brooklineteencenter.org/',
    logo: '/images/logos/btc.webp',
  },
  rsm: {
    name: 'Russian School of Mathematics',
    href: 'https://www.mathschool.com/',
    logo: '/images/logos/rsm.webp',
  },
  ktbyte: {
    name: 'KTBYTE',
    href: 'https://www.ktbyte.com/',
    logo: '/images/logos/ktbyte.webp',
  },
  dataIntensity: {
    name: 'Data Intensity',
    href: 'https://www.dataintensity.com/',
    logo: '/images/logos/dataintensity.webp',
  },
  hackClub: {
    name: 'Hack Club',
    href: 'https://hackclub.com/',
    logo: 'https://assets.hackclub.com/icon-rounded.svg',
  },
  aops: {
    name: 'Art of Problem Solving',
    href: 'https://artofproblemsolving.com/',
    logo: '/images/logos/AoPS.webp',
  },
  algoverse: {
    name: 'Algoverse',
    href: 'https://algoverseairesearch.org/',
    logo: '/images/logos/algoverse_logo.webp',
  },
  bhs: {
    name: 'Brookline High School',
    href: 'https://bhs.brookline.k12.ma.us/',
    logo: '/images/logos/bhs1.webp',
  },
} as const satisfies Record<string, Tile>

export type SponsorId = keyof typeof sponsorDirectory

export const partners: readonly Tile[] = [
  {
    name: 'Lexington Informatics Tournament',
    href: 'https://lit.lhsmathcs.org/',
    logo: '/images/logos/lit.webp',
  },
  {
    name: 'American Computer Science League',
    href: 'https://www.acsl.org/',
    logo: '/images/logos/acsl.logo.webp',
  },
  {
    name: 'Lunar',
    href: 'https://lunarnpo.wixstudio.io/lunar/blank-2',
    logo: '/images/logos/Lunar_Logo.webp',
  },
]

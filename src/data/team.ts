export type Person = {
  readonly name: string
  readonly role: string
  readonly photo: string
  readonly href?: string
  readonly bio?: string
}

export const staff: readonly Person[] = [
  {
    name: 'Sergey Zatsepin',
    role: 'Director · Problem author',
    photo: '/images/team/sergey.webp',
  },
  {
    name: 'Ethan Chen',
    role: 'Head of fundraising',
    photo: '/images/team/ethan.webp',
    href: 'https://www.linkedin.com/in/ethan-chen-8a33a8200/',
  },
  {
    name: 'Dana',
    role: 'Assistant problem writer',
    photo: '/images/team/dana.jpg',
  },
]

export const founders: readonly Person[] = [
  {
    name: 'Mikhail Zhernevskii',
    role: 'Cofounder · Former director and problem author',
    photo: '/images/team/misha.webp',
    href: 'https://www.linkedin.com/in/mikhail-zhernevskii-117477282/',
  },
  {
    name: 'Lucas Chen',
    role: 'Cofounder · Website designer and former fund manager',
    photo: '/images/team/lucas_chen.webp',
    href: 'https://lucasrchen.com/',
  },
  {
    name: 'Tyler Sacharow',
    role: 'Cofounder · Former advertiser and problem author',
    photo: '/images/team/tyler.webp',
    href: 'https://www.linkedin.com/in/tyler-sacharow-028972318/',
  },
]

export const judge: Person = {
  name: 'Shruti Dhumak',
  role: 'Judge · Senior Customer Engineer at Google',
  photo: '/images/team/judge.webp',
  bio: 'Shruti is a Senior Customer Engineer in Google Cloud’s Cambridge office. She previously worked as a Senior Systems Engineer at Juniper Networks, earned a master’s degree in computer engineering from the University of Massachusetts Amherst, and has supported students in STEM for more than six years.',
}

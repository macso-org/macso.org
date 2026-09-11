export type Person = {
  readonly name: string
  readonly role: string
  readonly photo: string
  readonly href?: string
  readonly bio?: string
}

export const staff: readonly Person[] = [
  {
    name: 'Ethan Chen',
    role: 'director',
    photo: '/images/team/ethan.webp',
    href: 'https://www.linkedin.com/in/ethan-chen-8a33a8200/',
  },
  {
    name: 'Harshitha Rajesh Chockalingam',
    role: 'head of outreach',
    photo: '/images/team/harshitha.webp',
  },
  {
    name: 'Pranav',
    role: 'head of operations',
    photo: '/images/team/pranav.webp',
    href: 'https://www.linkedin.com/in/pgundu/',
  },
  {
    name: 'Sergey Zatsepin',
    role: 'ex-director, problem author',
    photo: '/images/team/sergey.webp',
  },
  {
    name: 'Dana',
    role: 'problem writer assistant',
    photo: '/images/team/dana.jpg',
  },
]

export const founders: readonly Person[] = [
  {
    name: 'Mikhail Zhernevskii',
    role: 'cofounder, ex-director, ex-problem author',
    photo: '/images/team/misha.webp',
    href: 'https://www.linkedin.com/in/mikhail-zhernevskii-117477282/',
  },
  {
    name: 'Lucas Chen',
    role: 'cofounder, website designer, ex-fund manager',
    photo: '/images/team/lucas_chen.webp',
    href: 'https://lucasrchen.com/',
  },
  {
    name: 'Tyler Sacharow',
    role: 'cofounder, ex-advertiser, ex-problem author',
    photo: '/images/team/tyler.webp',
    href: 'https://www.linkedin.com/in/tyler-sacharow-028972318/',
  },
]

export const judge: Person = {
  name: 'Shruti Dhumak',
  role: 'judge, senior engineer at google',
  photo: '/images/team/judge.webp',
  bio: 'Shruti is a Sr. Customer Engineer at Google working with their Cloud practice at the Cambridge office. She has extensive experience in technology and was a Sr. Systems Engineer at Juniper Networks before joining Google. Shruti graduated from University of Massachusetts, Amherst with a Masters in Computer Engineering in 2016. She has been actively contributing to students in STEM over more than 6 years.',
}

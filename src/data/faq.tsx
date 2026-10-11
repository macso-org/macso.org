import type { ReactNode } from 'react'
import { TextLink } from '~/components/ui/TextLink'
import { site } from './site'
export type FaqItem = { readonly question: string; readonly answer: ReactNode }
export const faqItems: readonly FaqItem[] = [
  {
    question: 'Who can participate?',
    answer: (
      <>
        Anyone, anywhere can enter the online qualification round, including
        beginners. Both rounds are individual. If you advance, you must attend
        the final in person in Brookline.
      </>
    ),
  },
  {
    question: 'How do I register? What if I registered earlier?',
    answer: (
      <>
        Complete the{' '}
        <TextLink href={site.registrationForm}>
          qualification round registration form
        </TextLink>
        . Everyone must submit this form, even if you registered through the
        earlier event form, so we can issue your grader account.
      </>
    ),
  },
  {
    question: 'How do I access the grader?',
    answer: (
      <>
        After registration, we email your username and password. Sign in at{' '}
        <TextLink href={site.grader}>grader.macso.org</TextLink> to start
        submitting. Missing credentials? Check your spam folder, then email{' '}
        <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>.
      </>
    ),
  },
  {
    question: 'How many problems are there, and when do I solve them?',
    answer: (
      <>
        The online round starts with 3–4 problems; more may be added. Solve at
        your own pace while the round is open, starting {site.round.onlineOpens}
        . There is no fixed sitting for Round 1.
      </>
    ),
  },
  {
    question: 'How are scoring and advancement decided?',
    answer: (
      <>
        The contest uses ICPC-style scoring: each problem is solved or not, with
        time penalty as the tiebreaker. Round 1 performance determines
        advancement to the timed in-person final in {site.round.finalDates}.
        Qualifiers receive check-in details by email; prizes go to top
        competitors.
      </>
    ),
  },
]

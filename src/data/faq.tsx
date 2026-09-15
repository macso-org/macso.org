import type { ReactNode } from 'react'
import { TextLink } from '~/components/ui/TextLink'
import { site } from './site'

export type FaqItem = {
  readonly question: string
  readonly answer: ReactNode
}

export const faqItems: readonly FaqItem[] = [
  {
    question: 'Who can participate in the competition?',
    answer: (
      <>
        Anyone is welcome to enter the online qualification round. There is no
        qualification requirement to compete in Round 1. Whether you're brand
        new to competitive programming or have competed before, we'd love to
        have you join us!
      </>
    ),
  },
  {
    question: 'How does the competition work?',
    answer: (
      <>
        MACSO 2026 runs in two rounds. Round 1 is an online qualification round
        of 3–4 problems, open from {site.round.onlineOpens} until{' '}
        {site.round.onlineClosesTime} on {site.round.onlineCloses}, hosted at{' '}
        <TextLink href={site.grader}>grader.macso.org</TextLink>. Competitors
        who advance are invited to Round 2, an in-person final on{' '}
        {site.round.finalDates}. Both rounds are competed individually.
      </>
    ),
  },
  {
    question: 'I already registered earlier. Do I need to register again?',
    answer: (
      <>
        Yes. Everyone must complete the new{' '}
        <TextLink href={site.registrationForm}>
          qualification round registration form
        </TextLink>
        , even if you registered through the earlier event form. We know this is
        a change, but it's what lets us issue everyone grader accounts for the
        online round.
      </>
    ),
  },
  {
    question: 'How do I get into the online round once I register?',
    answer: (
      <>
        After you register, we email you a username and password for the contest
        grader. Sign in with those credentials at{' '}
        <TextLink href={site.grader}>grader.macso.org</TextLink> and you can
        start submitting. If your credentials haven't arrived, check your spam
        folder, then email{' '}
        <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink> and
        we'll get you set up.
      </>
    ),
  },
  {
    question: 'How many problems are in the online round?',
    answer: (
      <>
        The round starts with 3–4 programming problems, and we may add a few
        more over the two weeks it's open, depending on how the round goes.
        There's no fixed sitting — solve them at your own pace any time before
        the deadline.
      </>
    ),
  },
  {
    question: 'What is the scoring system like?',
    answer: (
      <>
        The contest uses the ICPC system: each problem is either solved or not,
        and the time penalty serves as tie breaker. Your Round 1 results
        determine advancement to the in-person final.
      </>
    ),
  },
  {
    question: 'When and where is the in-person final?',
    answer: (
      <>
        The final is scheduled for {site.round.finalDates} at {site.venue.name},{' '}
        {site.venue.address}. Qualifiers will be notified by email with check-in
        time and the remaining event details once they're confirmed. Prizes will
        be awarded to our top competitors, just like last year!
      </>
    ),
  },
  {
    question: 'How can I register for the competition?',
    answer: (
      <>
        You can register by clicking the Register for Round 1 button at the top
        of the page, or directly through the{' '}
        <TextLink href={site.registrationForm}>
          qualification round registration form
        </TextLink>{' '}
        where you can fill in your details.
      </>
    ),
  },
  {
    question: 'Can I participate if I’m not in Massachusetts?',
    answer: (
      <>
        Yes! The online qualification round is open to anyone, anywhere, with no
        qualification requirement. The final is in person, so if you advance
        you’ll need to make it to Cambridge on {site.round.finalDates}.
      </>
    ),
  },
]

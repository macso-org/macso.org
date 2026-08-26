import { site } from '~/data/site'
import { TextLink } from '~/components/ui/TextLink'
import { type PageId, pageMeta } from './pages'
import styles from './Footer.module.css'

type FooterProps = {
  page: PageId
}

export function Footer({ page }: FooterProps) {
  const { topId } = pageMeta[page]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.about}>
          <a className={styles.footerBrand} href="/">
            macso<span>.</span>
          </a>
          <p>
            Massachusetts Computer Science Olympiad is organized through
            Brookline Computer Science Initiative, a 501(c)(3) nonprofit.
          </p>
        </div>
        <nav className={styles.footerNav} aria-label="Connect with MACSO">
          <a href={`mailto:${site.email}`}>Email us</a>
          <a href={site.discord}>Discord</a>
          <a href={site.instagram}>Instagram</a>
        </nav>
      </div>
      <div className={styles.meta}>
        <p>
          Website by{' '}
          <TextLink className={styles.creditLink} href={site.credits.lucasChen}>
            Lucas Chen
          </TextLink>{' '}
          and{' '}
          <TextLink
            className={styles.creditLink}
            href={site.credits.mishaZhernevskii}
          >
            Misha Zhernevskii
          </TextLink>
        </p>
        <a className={styles.topLink} href={`#${topId}`}>
          &uarr; back to top
        </a>
      </div>
    </footer>
  )
}

import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { SkipLink } from './SkipLink'
import type { PageId } from './pages'
import styles from './PageLayout.module.css'

type PageLayoutProps = {
  page: PageId
  children: ReactNode
  footerBelowFold?: boolean
}

export function PageLayout({
  page,
  children,
  footerBelowFold = false,
}: PageLayoutProps) {
  return (
    <>
      <SkipLink />
      <Header page={page} />
      <main
        className={
          footerBelowFold
            ? `${styles.main} ${styles.footerBelowFold}`
            : styles.main
        }
        id="main"
      >
        {children}
      </main>
      <Footer page={page} />
    </>
  )
}

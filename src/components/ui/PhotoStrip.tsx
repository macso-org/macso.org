import type { Photo } from '~/data/photos'
import styles from './PhotoStrip.module.css'

export function PhotoStrip({ photos }: { photos: readonly Photo[] }) {
  return (
    <div
      className={styles.strip}
      role="region"
      aria-label="Contest photo gallery"
      tabIndex={0}
    >
      {photos.map((photo, index) => (
        <figure className={styles.photo} key={photo.src}>
          <span className={styles.tape} aria-hidden="true" />
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : undefined}
            decoding="async"
          />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

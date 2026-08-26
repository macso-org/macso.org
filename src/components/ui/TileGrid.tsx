import { Pin } from './Pin'
import type { Tile } from '~/data/sponsors'
import styles from './TileGrid.module.css'

export function TileGrid({ tiles }: { tiles: readonly Tile[] }) {
  return (
    <div className={styles.tiles}>
      {tiles.map((tile) => (
        <a
          className={styles.tile}
          href={tile.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${tile.name} (opens in a new tab)`}
          key={tile.name}
        >
          <Pin small />
          <img src={tile.logo} alt={tile.name} decoding="async" />
          <span>{tile.name}</span>
        </a>
      ))}
    </div>
  )
}

'use client';

import Image from 'next/image';
import type { QueueItem } from '@/types';
import styles from './QueuePanel.module.scss';

interface Props {
  open: boolean;
  onClose: () => void;
  queue: QueueItem[];
  onClear: () => void;
  onRemove: (id: string) => void;
}

export default function QueuePanel({ open, onClose, queue, onClear, onRemove }: Props) {
  return (
    <aside className={`${styles.panel}${open ? ` ${styles.open}` : ''}`}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Playing Next</h2>
          <div className={styles.headerActions}>
            {queue.length > 0 && (
              <button className={styles.clearBtn} onClick={onClear}>
                Clear
              </button>
            )}
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Queue list or empty */}
        {queue.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyText}>No upcoming episodes.</p>
          </div>
        ) : (
          <div className={styles.list}>
            {queue.map((item) => (
              <div key={item.id} className={styles.item}>
                <Image
                  src={item.artwork}
                  alt={item.title}
                  width={44}
                  height={44}
                  className={styles.itemArtwork}
                />
                <div className={styles.itemInfo}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemMeta}>{item.podcastTitle} · {item.duration}</div>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => onRemove(item.id)}
                  aria-label="Remove from queue"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

'use client';

import styles from './QueuePanel.module.scss';

interface Props {
  open: boolean;
  onClose: () => void;
  description?: string;
}

export default function EpisodeNotesPanel({ open, onClose, description }: Props) {
  return (
    <aside className={`${styles.panel}${open ? ` ${styles.open}` : ''}`}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Episode Notes</h2>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {description ? (
          <div className={styles.list}>
            <p className={styles.notesDescription}>{description}</p>
          </div>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyText}>No episode notes available.</p>
          </div>
        )}
      </div>
    </aside>
  );
}

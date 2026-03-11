'use client';

import { useRef, useState, useEffect, type MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { PodcastEpisode } from '@/data/podcastDetails';
import type { QueueItem } from '@/types';
import styles from './EpisodeList.module.scss';

interface Props {
  episodes: PodcastEpisode[];
  publisherCount?: number;
  podcastSlug?: string;
  podcastTitle?: string;
}

// ── Dropdown menu items ────────────────────────────────────────────────────────

const EPISODE_MENU_ITEMS = [
  {
    label: 'Play Next',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 5h13v2H2zm0 4h13v2H2zm0 4h9v2H2zm13-2l5 3-5 3V11z"/>
      </svg>
    ),
  },
  {
    label: 'Share',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/>
      </svg>
    ),
  },
  {
    label: 'Copy Link',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    label: 'Copy Embed Code',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    label: 'Report a Concern',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
];

// ── Episode Row ────────────────────────────────────────────────────────────────

function EpisodeRow({
  episode,
  podcastSlug,
  onPlay,
}: {
  episode: PodcastEpisode;
  podcastSlug?: string;
  onPlay?: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const moreRef = useRef<HTMLButtonElement>(null);

  const handleMoreClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (menuOpen) {
      setMenuOpen(false);
      return;
    }

    const btn = moreRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const menuHeight = 5 * 48; // 5 items × ~48px
    const menuWidth = 220;

    // Smart vertical position
    const spaceBelow = window.innerHeight - rect.bottom;
    let top: number;
    if (spaceBelow < menuHeight) {
      top = rect.bottom - menuHeight;
    } else {
      top = rect.top + rect.height / 2;
    }

    // Right-align to button, clamp to viewport edge
    let left = rect.right - menuWidth;
    if (left < 8) left = 8;

    setMenuPos({ top, left });
    setMenuOpen(true);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const handleOutside = (e: Event) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [menuOpen]);

  const inner = (
    <>
      {/* Thumbnail */}
      <div className={styles.thumbWrap}>
        <Image
          src={episode.artwork}
          alt={episode.title}
          width={94}
          height={94}
          className={styles.thumb}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <span className={`${styles.dateTag} ${episode.isSubscribersOnly ? styles.subscribersTag : ''}`}>
          {episode.isSubscribersOnly ? 'SUBSCRIBERS ONLY' : episode.daysAgo}
        </span>
        <div className={styles.title}>{episode.title}</div>
        <div className={styles.description}>{episode.description}</div>
      </div>
    </>
  );

  return (
    <div className={`${styles.row}${menuOpen ? ` ${styles.rowMenuOpen}` : ''}`}>
      {podcastSlug ? (
        <Link href={`/podcast/${podcastSlug}/episode/${episode.id}`} className={styles.rowLink}>
          {inner}
        </Link>
      ) : inner}

      {/* Footer — full width, below content + thumb */}
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <button
            className={styles.playBtn}
            aria-label="Play episode"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onPlay?.(); }}
          >
            <svg width="10" height="11" viewBox="0 0 10 11" fill="currentColor">
              <path d="M0 0v11l10-5.5z"/>
            </svg>
          </button>
          <span className={styles.duration}>{episode.duration}</span>
        </div>
        <button
          ref={moreRef}
          className={styles.moreBtn}
          aria-label="More options"
          onClick={handleMoreClick}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="19" cy="12" r="2"/>
          </svg>
        </button>
      </div>

      {/* Dropdown — position: fixed to escape row overflow */}
      {menuOpen && (
        <div
          className={styles.dropdown}
          style={{ position: 'fixed', top: menuPos.top, left: menuPos.left }}
        >
          {EPISODE_MENU_ITEMS.map((item) => (
            <button
              key={item.label}
              className={styles.dropdownItem}
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.label}</span>
              {item.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────

export default function EpisodeList({ episodes, publisherCount, podcastSlug, podcastTitle = '' }: Props) {
  const handlePlay = (episode: PodcastEpisode, index: number) => {
    const toItem = (ep: PodcastEpisode): QueueItem => ({
      id: ep.id,
      title: ep.title,
      podcastTitle,
      artwork: ep.artwork,
      duration: ep.duration,
      description: ep.description,
    });
    document.dispatchEvent(
      new CustomEvent('playEpisode', {
        detail: {
          track: toItem(episode),
          queue: episodes.slice(index + 1).map(toItem),
        },
      })
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <button className={styles.headerBtn}>
          <span>Episodes</span>
          <svg className={styles.headerChevron} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={styles.seeAll}>See All</button>
      </div>
      <div className={styles.list}>
        {episodes.map((ep, i) => (
          <EpisodeRow key={ep.id} episode={ep} podcastSlug={podcastSlug} onPlay={() => handlePlay(ep, i)} />
        ))}
      </div>
      {publisherCount !== undefined && (
        <div className={styles.publisherLink}>
          <a href="#" className={styles.publisherLinkText}>
            See All ({publisherCount})
          </a>
        </div>
      )}
    </section>
  );
}

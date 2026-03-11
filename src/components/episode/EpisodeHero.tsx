'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { PodcastEpisode, PodcastDetail } from '@/data/podcastDetails';
import type { QueueItem } from '@/types';
import styles from './EpisodeHero.module.scss';

interface Props {
  episode: PodcastEpisode;
  podcast: PodcastDetail;
  podcastSlug: string;
}

export default function EpisodeHero({ episode, podcast, podcastSlug }: Props) {
  const [isSaved, setIsSaved] = useState(false);

  const handlePlay = () => {
    const toItem = (ep: PodcastEpisode): QueueItem => ({
      id: ep.id,
      title: ep.title,
      podcastTitle: podcast.title,
      artwork: ep.artwork,
      duration: ep.duration,
      description: ep.description,
    });
    const idx = podcast.episodes.findIndex((e) => e.id === episode.id);
    document.dispatchEvent(
      new CustomEvent('playEpisode', {
        detail: {
          track: toItem(episode),
          queue: podcast.episodes.slice(idx + 1).map(toItem),
        },
      })
    );
  };

  return (
    <div className={styles.hero}>
      {/* Artwork */}
      <div className={`artwork-radius ${styles.artwork}`}>
        <Image
          src={episode.artwork}
          alt={episode.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 767px) 100vw, 260px"
          priority
        />
      </div>

      {/* Info */}
      <div className={styles.info}>
        <span className={styles.meta}>
          {podcast.category.toUpperCase()} · {episode.duration.toUpperCase()}
        </span>
        <h1 className={styles.title}>{episode.title}</h1>
        <Link href={`/podcast/${podcastSlug}`} className={styles.showLink}>
          {podcast.title}
        </Link>

        <div className={styles.divider} />

        <div className={styles.actions}>
          <button className={styles.playBtn} onClick={handlePlay}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
          <div className={styles.secondaryActions}>
            <button
              className={`${styles.iconBtn}${isSaved ? ` ${styles.savedBtn}` : ''}`}
              aria-label={isSaved ? 'Unsave episode' : 'Save episode'}
              onClick={() => setIsSaved((v) => !v)}
            >
              {isSaved ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              )}
            </button>
            <button className={styles.iconBtn} aria-label="More options">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

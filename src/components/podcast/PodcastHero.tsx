'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { PodcastDetail, PodcastEpisode } from '@/data/podcastDetails';
import type { QueueItem } from '@/types';
import styles from './PodcastHero.module.scss';

interface Props {
  podcast: PodcastDetail;
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function PodcastHero({ podcast }: Props) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleLatestEpisode = () => {
    if (!podcast.episodes.length) return;
    const toItem = (ep: PodcastEpisode): QueueItem => ({
      id: ep.id,
      title: ep.title,
      podcastTitle: podcast.title,
      artwork: ep.artwork,
      duration: ep.duration,
      description: ep.description,
    });
    document.dispatchEvent(
      new CustomEvent('playEpisode', {
        detail: {
          track: toItem(podcast.episodes[0]),
          queue: podcast.episodes.slice(1).map(toItem),
        },
      })
    );
  };
  return (
    <div className={styles.hero}>
      {/* Artwork + info (including actions) */}
      <div className={styles.heroTop}>
        {/* Artwork */}
        <div className={styles.artworkWrap}>
          <Image
            src={podcast.artwork}
            alt={podcast.title}
            width={270}
            height={270}
            className={styles.artwork}
            priority
          />
        </div>

        {/* Info — title / author / meta / desc / actions */}
        <div className={styles.info}>
          <h1 className={styles.title}>{podcast.title}</h1>
          <a href="#" className={styles.author}>{podcast.author}</a>
          <p className={styles.meta}>
            <span className={styles.metaStar}><StarIcon /></span>
            {podcast.rating} ({podcast.ratingCount}) · {podcast.category.toUpperCase()} · {podcast.frequency.toUpperCase()}
            {podcast.isExplicit && <span className={styles.explicitBadge}>E</span>}
          </p>
          <p className={styles.description}>{podcast.description}</p>

          {/* Actions: Latest Episode left, Follow/More right */}
          <div className={styles.actions}>
            <button className={styles.latestBtn} onClick={handleLatestEpisode}>
              <svg width="10" height="11" viewBox="0 0 10 11" fill="currentColor">
                <path d="M0 0v11l10-5.5z"/>
              </svg>
              Latest Episode
            </button>

            <div className={styles.secondaryActions}>
              <button
                className={`${styles.followBtn}${isFollowing ? ` ${styles.followingBtn}` : ''}`}
                onClick={() => setIsFollowing((v) => !v)}
              >
                {isFollowing ? (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                ) : (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                )}
                {isFollowing ? 'Following' : 'Follow'}
              </button>

              <button className={styles.moreBtn} aria-label="More options">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="19" cy="12" r="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

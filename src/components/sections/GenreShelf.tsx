import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Podcast } from '@/types';
import PodcastCard from '@/components/ui/PodcastCard';
import styles from './GenreShelf.module.scss';

interface Props {
  genre: string;
  tagline: string;
  color: string;
  image?: string;
  podcasts: Podcast[];
  href?: string;
}

export default function GenreShelf({
  genre,
  tagline,
  color,
  image,
  podcasts,
  href = '#',
}: Props) {
  return (
    <section className={styles.shelf}>
      {/* ── Colorful header band ─────────────────────────────── */}
      <div
        className={styles.header}
        style={
          {
            '--genre-color': color,
          } as React.CSSProperties
        }
      >
        <div className={styles.headerInner}>
          <div className={styles.textBlock}>
            <span className={styles.label}>Genre</span>
            <h2 className={styles.title}>{genre}</h2>
            <p className={styles.tagline}>{tagline}</p>
            <Link href={href} className={styles.seeAll}>
              See All
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 2.5L9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {image && (
            <div className={styles.imageDecor}>
              <Image
                src={image}
                alt={genre}
                fill
                style={{ objectFit: 'cover' }}
                sizes="180px"
              />
            </div>
          )}
        </div>

        {/* decorative circles */}
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
      </div>

      {/* ── Horizontal scroll of podcast cards ──────────────── */}
      <div className={styles.scroll}>
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </section>
  );
}

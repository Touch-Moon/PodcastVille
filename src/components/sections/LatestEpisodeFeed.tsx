'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Episode } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './LatestEpisodeFeed.module.scss';

interface Props {
  episodes: Episode[];
}

function FeedRow({ episode }: { episode: Episode }) {
  return (
    <Link href={`/podcast/${episode.podcastId}`} className={styles.row}>
      <div className={`artwork-radius ${styles.artwork}`}>
        <Image
          src={episode.artwork}
          alt={episode.podcastTitle}
          fill
          style={{ objectFit: 'cover' }}
          sizes="56px"
        />
        {episode.isNew && <span className={styles.newDot} aria-label="New" />}
      </div>
      <div className={styles.info}>
        <p className={`line-clamp-2 ${styles.title}`}>{episode.title}</p>
        <span className={styles.meta}>
          {episode.podcastTitle}
          <span className={styles.dot}>·</span>
          {episode.duration}
          <span className={styles.dot}>·</span>
          {episode.publishedAt}
        </span>
      </div>
      <button className={styles.moreBtn} aria-label="More options" onClick={(e) => e.preventDefault()}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="5" r="1.5" fill="currentColor" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <circle cx="12" cy="19" r="1.5" fill="currentColor" />
        </svg>
      </button>
    </Link>
  );
}

export default function LatestEpisodeFeed({ episodes }: Props) {
  return (
    <section className={styles.feed}>
      <SectionHeader title="Latest Updated Episodes" seeAllHref="/search" />
      <div className={styles.list}>
        {episodes.map((ep) => (
          <FeedRow key={ep.id} episode={ep} />
        ))}
      </div>
    </section>
  );
}

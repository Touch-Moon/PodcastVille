'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ChartPodcast } from '@/data/podcasts';
import styles from './ChartsRankList.module.scss';

const CATEGORIES = ['All', 'True Crime', 'Comedy', 'News', 'Society & Culture', 'Science', 'History', 'Technology'];

interface Props {
  podcasts: ChartPodcast[];
}

function ChartRow({ podcast, displayRank }: { podcast: ChartPodcast; displayRank: number }) {
  return (
    <Link href={`/podcast/${podcast.id}`} className={styles.row}>
      <span className={styles.rank}>{displayRank}</span>

      <div className={`artwork-radius ${styles.artwork}`}>
        <Image
          src={podcast.artwork}
          alt={podcast.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="60px"
        />
      </div>

      <div className={styles.info}>
        <p className={`line-clamp-1 ${styles.title}`}>{podcast.title}</p>
        <p className={`line-clamp-1 ${styles.author}`}>
          {podcast.isExplicit && <span className={styles.explicit}>E</span>}
          {podcast.author}
        </p>
        <span className={styles.category}>{podcast.category}</span>
      </div>

      <button
        className={styles.addBtn}
        aria-label={`Subscribe to ${podcast.title}`}
        onClick={(e) => e.preventDefault()}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </Link>
  );
}

export default function ChartsRankList({ podcasts }: Props) {
  const [activeTab, setActiveTab] = useState('All');

  const filtered =
    activeTab === 'All'
      ? podcasts
      : podcasts.filter((p) => p.category === activeTab);

  return (
    <div className={styles.wrapper}>
      {/* Category tabs */}
      <div className={styles.tabsWrap}>
        <div className={styles.tabs}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${activeTab === cat ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Ranked list */}
      <div className={styles.list}>
        {filtered.length === 0 ? (
          <p className={styles.empty}>No shows in this category yet.</p>
        ) : (
          filtered.map((podcast, i) => (
            <ChartRow key={`${podcast.id}-${i}`} podcast={podcast} displayRank={i + 1} />
          ))
        )}
      </div>
    </div>
  );
}

'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  topShows,
  newShows,
  topTrueCrime,
  topComedy,
  topSeries,
  newSeasonsShows,
  topSocietyCultureShows,
  globalHitsShows,
  essentialListens,
  topSubscriberShows,
} from '@/data/podcasts';
import { topEpisodes, latestEpisodes, categoryCards } from '@/data/episodes';
import MoreToDiscover from '@/components/sections/MoreToDiscover';
import ShowCategory from '@/components/sections/ShowCategory';
import PodcastCard from '@/components/ui/PodcastCard';
import SectionHeader from '@/components/ui/SectionHeader';
import type { Podcast, Episode } from '@/types';
import styles from './page.module.scss';

interface ChannelResult {
  author: string;
  podcasts: Podcast[];
}

// ── 전체 팟캐스트 풀 (중복 제거) ──────────────────────────────────────────

const ALL_PODCASTS_RAW: Podcast[] = [
  ...topShows,
  ...newShows,
  ...topTrueCrime,
  ...topComedy,
  ...topSeries,
  ...newSeasonsShows,
  ...topSocietyCultureShows,
  ...globalHitsShows,
  ...essentialListens,
  ...topSubscriberShows,
];

function deduplicatePodcasts(podcasts: Podcast[]): Podcast[] {
  const seen = new Set<string>();
  const result: Podcast[] = [];
  for (const p of podcasts) {
    const normalId = p.id.replace(/-(el|sub|sc|g|s2|s3)$/, '');
    if (!seen.has(normalId)) {
      seen.add(normalId);
      result.push({ ...p, id: normalId });
    }
  }
  return result;
}

const ALL_PODCASTS = deduplicatePodcasts(ALL_PODCASTS_RAW);

// ── 채널 맵 (author 기준 그룹핑, 모듈 레벨에서 1회 계산) ──────────────────

const ALL_CHANNELS_MAP = new Map<string, Podcast[]>();
for (const p of ALL_PODCASTS) {
  const arr = ALL_CHANNELS_MAP.get(p.author) ?? [];
  arr.push(p);
  ALL_CHANNELS_MAP.set(p.author, arr);
}

// ── 전체 에피소드 풀 (중복 제거) ──────────────────────────────────────────

const ALL_EPISODES: Episode[] = (() => {
  const seen = new Set<string>();
  const result: Episode[] = [];
  for (const ep of [...topEpisodes, ...latestEpisodes]) {
    if (!seen.has(ep.id)) {
      seen.add(ep.id);
      result.push(ep);
    }
  }
  return result;
})();

// ── Search Page ─────────────────────────────────────────────────────────────

function SearchContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('q') ?? '');

  // URL 파라미터가 바뀌면 동기화 (뒤로 가기 등)
  useEffect(() => {
    const q = searchParams.get('q') ?? '';
    setQuery(q);
  }, [searchParams]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const podcasts = ALL_PODCASTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );

    const episodes = ALL_EPISODES.filter(
      (ep) =>
        ep.title.toLowerCase().includes(q) ||
        ep.podcastTitle.toLowerCase().includes(q) ||
        (ep.description?.toLowerCase().includes(q) ?? false)
    );

    const categories = categoryCards.filter((c) =>
      c.title.toLowerCase().includes(q)
    );

    // author명이 쿼리와 매칭되는 채널
    const channels: ChannelResult[] = Array.from(ALL_CHANNELS_MAP.entries())
      .filter(([author]) => author.toLowerCase().includes(q))
      .map(([author, podcasts]) => ({ author, podcasts }));

    return { podcasts, episodes, categories, channels };
  }, [query]);

  const hasResults =
    results &&
    (results.podcasts.length > 0 ||
      results.channels.length > 0 ||
      results.episodes.length > 0 ||
      results.categories.length > 0);

  return (
    <div className={styles.pageWrapper}>
      {/* ── Search Header ── */}
      <div className={styles.searchHeader}>
        <h1 className={styles.pageTitle}>Search</h1>
        <div className={styles.searchInputWrapper}>
          <svg
            className={styles.searchIcon}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M21 21L16.657 16.657M16.657 16.657A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="search"
            placeholder="Shows, episodes, and more…"
            className={styles.searchInput}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.currentTarget.blur();
            }}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          {query && (
            <button
              className={styles.clearBtn}
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* ── Empty State ── */}
      {!results && (
        <>
          <MoreToDiscover categories={categoryCards} />
          <ShowCategory title="Popular Shows" podcasts={topShows} />
          <ShowCategory title="Essential Listens" podcasts={essentialListens} />
        </>
      )}

      {/* ── Search Results ── */}
      {results && hasResults && (
        <div className={styles.resultsWrapper}>
          {/* Shows */}
          {results.podcasts.length > 0 && (
            <section className={styles.resultSection}>
              <SectionHeader title="Shows" />
              <div className={styles.podcastGrid}>
                {results.podcasts.slice(0, 12).map((p) => (
                  <PodcastCard key={p.id} podcast={p} />
                ))}
              </div>
            </section>
          )}

          {/* Channels */}
          {results.channels.length > 0 && (
            <section className={styles.resultSection}>
              <SectionHeader title="Channels" />
              <div className={styles.channelList}>
                {results.channels.map((ch) => (
                  <Link
                    key={ch.author}
                    href={`/search?q=${encodeURIComponent(ch.author)}`}
                    className={styles.channelCard}
                  >
                    <div className={styles.channelArtworks}>
                      {ch.podcasts.slice(0, 3).map((p, i) => (
                        <div
                          key={p.id}
                          className={styles.channelArtwork}
                          style={{ zIndex: 3 - i }}
                        >
                          <Image
                            src={p.artwork}
                            alt={p.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="52px"
                          />
                        </div>
                      ))}
                    </div>
                    <p className={`line-clamp-1 ${styles.channelName}`}>
                      {ch.author}
                    </p>
                    <p className={styles.channelMeta}>
                      {ch.podcasts.length} show{ch.podcasts.length !== 1 ? 's' : ''}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Episodes */}
          {results.episodes.length > 0 && (
            <section className={styles.resultSection}>
              <SectionHeader title="Episodes" />
              <div className={styles.episodeList}>
                {results.episodes.slice(0, 10).map((ep) => (
                  <Link
                    key={ep.id}
                    href={`/podcast/${ep.podcastId}`}
                    className={styles.episodeRow}
                  >
                    <div className={`artwork-radius ${styles.episodeArtwork}`}>
                      <Image
                        src={ep.artwork}
                        alt={ep.podcastTitle}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="56px"
                      />
                    </div>
                    <div className={styles.episodeInfo}>
                      <p className={`line-clamp-2 ${styles.episodeTitle}`}>
                        {ep.title}
                      </p>
                      <p className={styles.episodeMeta}>
                        {ep.podcastTitle}
                        {ep.duration && ` · ${ep.duration}`}
                        {ep.publishedAt && ` · ${ep.publishedAt}`}
                      </p>
                    </div>
                    <span className={styles.episodePlay} aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Categories */}
          {results.categories.length > 0 && (
            <section className={styles.resultSection}>
              <MoreToDiscover categories={results.categories} />
            </section>
          )}
        </div>
      )}

      {/* ── No Results ── */}
      {results && !hasResults && (
        <div className={styles.noResults}>
          <svg
            className={styles.noResultsIcon}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M21 21L16.657 16.657M16.657 16.657A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <p className={styles.noResultsTitle}>
            No results for &ldquo;{query}&rdquo;
          </p>
          <p className={styles.noResultsSubtitle}>
            Try searching for a different term
          </p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ padding: '80px 24px', color: 'rgba(255,255,255,0.4)' }}>Loading…</div>}>
      <SearchContent />
    </Suspense>
  );
}

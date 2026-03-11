'use client';

import { useRef, useState, useEffect, type MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { PodcastDetail, NYTPodcast } from '@/data/podcastDetails';
import type { QueueItem } from '@/types';
import styles from './PodcastDetails.module.scss';

interface Props {
  podcast: PodcastDetail;
}

// ── Publisher Podcasts Banner ──────────────────────────────────────────────────────

function StarSmall() {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function PublisherBanner({ podcast }: Props) {
  const handlePlayTrailer = (p: NYTPodcast) => {
    const item: QueueItem = {
      id: p.id,
      title: p.title,
      podcastTitle: podcast.author,
      artwork: p.artwork,
      duration: p.badgeMins ? `${p.badgeMins} min` : '',
      description: p.description,
    };
    document.dispatchEvent(
      new CustomEvent('playEpisode', {
        detail: { track: item, queue: [] },
      })
    );
  };

  return (
    <section className={styles.publisherBanner}>
      <div className={styles.bannerHeader}>
        <button className={styles.bannerTitle}>
          {podcast.author} Podcasts
          <svg width="8" height="13" viewBox="0 0 8 13" fill="currentColor" className={styles.bannerChevron}>
            <path d="M1.5 1l5 5.5-5 5.5"/>
          </svg>
        </button>
        <span className={styles.bannerSubtitle}>Shows with Subscription Benefits</span>
      </div>

      <div className={styles.bannerScroll}>
        {podcast.nytPodcasts.map((p) => (
          <div key={p.id} className={styles.bannerCard}>
            {/* Full-bleed background artwork */}
            <div className={styles.bannerCardBg}>
              <Image src={p.artwork} alt={p.title} fill style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="300px" />
            </div>

            {/* Bottom content overlay */}
            <div className={styles.bannerCardContent}>
              <p className={styles.bannerCardDesc}>{p.description}</p>
              {p.rating && (
                <div className={styles.bannerCardMeta}>
                  <StarSmall />
                  <span>{p.rating} ({p.ratingCount}) · {p.category}</span>
                </div>
              )}
              <div className={styles.bannerCardControls}>
                <button className={styles.bannerCardTrailer} onClick={() => handlePlayTrailer(p)}>
                  <span className={styles.bannerPlayIcon}>
                    <svg width="8" height="9" viewBox="0 0 8 9" fill="currentColor">
                      <path d="M0 0v9l8-4.5z"/>
                    </svg>
                  </span>
                  Play Trailer
                </button>
                <button className={styles.bannerCardAdd} aria-label="Add">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe CTA */}
      <div className={styles.bannerSubscribe}>
        <button className={styles.bannerSubscribeBtn}>
          <div className={styles.bannerSubscribeLeft}>
            <div className={styles.bannerLogo}>
              <Image
                src="/images/artwork/the-daily.jpg"
                alt="NYT"
                width={32}
                height={32}
                style={{ borderRadius: 6, objectFit: 'cover' }}
              />
            </div>
            <span className={styles.bannerSubscribeText}>
              Subscribe via The NYT app to access past episodes.
            </span>
          </div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.bannerSubscribeArrow}
          >
            <path d="M7 17L17 7M7 7h10v10"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

// ── Hosts & Guests ───────────────────────────────────────────────────────────

function HostsSection({ podcast }: Props) {
  return (
    <section className={`${styles.section} ${styles.hostsSection}`}>
      <h2 className={styles.sectionTitle}>Hosts &amp; Guests</h2>
      <div className={styles.hostsRow}>
        {podcast.hosts.map((host) => (
          <div key={host.id} className={styles.hostCard}>
            <div className={styles.hostAvatar}>
              {host.avatar ? (
                <Image
                  src={host.avatar}
                  alt={host.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="64px"
                />
              ) : (
                <span className={styles.hostInitials}>{host.initials}</span>
              )}
            </div>
            <span className={styles.hostName}>{host.name}</span>
            <span className={styles.hostRole}>{host.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Ratings & Reviews ────────────────────────────────────────────────────────

function StarFull() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function ReviewCard({ review }: { review: PodcastDetail['reviews'][0] }) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewStars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < review.rating ? styles.starFilled : styles.starEmpty}>
            <StarFull />
          </span>
        ))}
      </div>
      <div className={styles.reviewTitle}>{review.title}</div>
      <div className={styles.reviewBody}>{review.body}</div>
      <div className={styles.reviewMeta}>{review.author} · {review.date}</div>
    </div>
  );
}

function RatingsSection({ podcast }: Props) {
  const starRows = [5, 4, 3, 2, 1];

  return (
    <section className={styles.section}>
      <button className={styles.ratingsTitle}>
        Ratings &amp; Reviews
        <svg width="8" height="13" viewBox="0 0 8 13" fill="currentColor" className={styles.ratingsTitleChevron}>
          <path d="M1.5 1l5 5.5-5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      </button>

      <div className={styles.ratingsRow}>
        {/* Score */}
        <div className={styles.ratingScore}>
          <div className={styles.ratingNumber}>{podcast.rating}</div>
          <div className={styles.ratingCount}>out of 5</div>
        </div>

        {/* Bar chart */}
        <div className={styles.ratingBars}>
          {starRows.map((star, i) => (
            <div key={star} className={styles.barRow}>
              <div className={styles.barStars}>
                {Array.from({ length: star }).map((_, j) => (
                  <span key={j} className={styles.barStarFilled}>
                    <StarSmall />
                  </span>
                ))}
              </div>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ width: `${podcast.ratingDistribution[i]}%` }}
                />
              </div>
            </div>
          ))}
          <div className={styles.ratingsCount}>{podcast.ratingCount} Ratings</div>
        </div>
      </div>

      {/* Review cards */}
      {podcast.reviews.length > 0 && (
        <div className={styles.reviewsRow}>
          {podcast.reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────

function AboutSection({ podcast }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>About</h2>
      <p className={styles.aboutText}>{podcast.fullDescription}</p>
    </section>
  );
}

// ── Information ───────────────────────────────────────────────────────────────

function InfoSection({ podcast }: Props) {
  const info = podcast.information;
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Information</h2>
      <div className={styles.infoGrid}>
        {/* Row 1 */}
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>Channel</span>
          <div className={`${styles.infoCellValue} ${styles.infoCellAccent}`}>{info.publisher}</div>
        </div>
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>Creator</span>
          <div className={styles.infoCellValue}>{info.creator}</div>
        </div>
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>Years Active</span>
          <div className={styles.infoCellValue}>{info.yearsActive}</div>
        </div>
        {/* Row 2 */}
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>Episodes</span>
          <div className={styles.infoCellValue}>{info.episodeCount}</div>
        </div>
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>Rating</span>
          <div className={styles.infoCellValue}>{info.contentRating}</div>
        </div>
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>Copyright</span>
          <div className={styles.infoCellValue}>{info.copyright}</div>
        </div>
        {/* Row 3 */}
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>Show Website</span>
          {info.website ? (
            <a href={info.website} target="_blank" rel="noopener noreferrer" className={`${styles.infoCellValue} ${styles.infoCellLink}`}>
              {info.websiteLabel ?? podcast.title}
              <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" style={{ marginLeft: 3, flexShrink: 0 }}>
                <path d="M3.5 1H1v10h10V8.5M11 1H7m4 0v4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ) : (
            <div className={styles.infoCellValue}>—</div>
          )}
        </div>
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>Provider</span>
          <div className={styles.infoCellValue}>{info.provider}</div>
        </div>
      </div>
    </section>
  );
}

// ── Horizontal Scroll Shelf ───────────────────────────────────────────────────

const SHELF_MENU_ITEMS = [
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
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
];

function ShelfCardItem({ p }: { p: PodcastDetail['moreFromPublisher'][0] }) {
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
    const menuHeight = 4 * 48;
    const menuWidth = 210;

    const spaceBelow = window.innerHeight - rect.bottom;
    let top: number;
    if (spaceBelow < menuHeight) {
      top = rect.bottom - menuHeight;
    } else {
      top = rect.top + rect.height / 2;
    }

    let left = rect.right - menuWidth;
    if (left < 8) left = 8;

    setMenuPos({ top, left });
    setMenuOpen(true);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const handleOutside = (e: globalThis.MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [menuOpen]);

  return (
    <div className={`${styles.shelfCard}${menuOpen ? ` ${styles.shelfCardMenuOpen}` : ''}`}>
      {/* Artwork + info link */}
      <Link href={`/podcast/${p.id}`} className={styles.shelfCardLink}>
        <div className={styles.shelfArt}>
          <Image
            src={p.artwork}
            alt={p.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="200px"
          />
        </div>
        <div className={styles.shelfInfo}>
          <div className={styles.shelfSub}>{p.category}</div>
          {p.updatedAt && <div className={styles.shelfDate}>{p.updatedAt}</div>}
        </div>
      </Link>

      {/* Overlay: play (bottom-left) + more (bottom-right) */}
      <div className={styles.shelfOverlayBtns}>
        <button
          className={styles.shelfPlayBtn}
          aria-label="Play"
          onClick={(e) => e.preventDefault()}
        >
          <svg width="10" height="11" viewBox="0 0 10 11" fill="currentColor">
            <path d="M0 0v11l10-5.5z"/>
          </svg>
        </button>

        <div className={styles.shelfMoreWrap}>
          <button
            ref={moreRef}
            className={styles.shelfMoreBtn}
            aria-label="More options"
            onClick={handleMoreClick}
          >
            <svg width="14" height="4" viewBox="0 0 14 4" fill="currentColor">
              <circle cx="2" cy="2" r="1.5"/>
              <circle cx="7" cy="2" r="1.5"/>
              <circle cx="12" cy="2" r="1.5"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown — position: fixed to escape overflow clipping */}
      {menuOpen && (
        <div
          className={styles.shelfDropdown}
          style={{ position: 'fixed', top: menuPos.top, left: menuPos.left }}
        >
          {SHELF_MENU_ITEMS.map((item) => (
            <button
              key={item.label}
              className={styles.shelfDropdownItem}
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

function PodcastShelf({
  title,
  items,
}: {
  title: string;
  items: PodcastDetail['moreFromPublisher'];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, []);

  const getPageWidth = () => {
    const el = scrollRef.current;
    if (!el) return 0;
    // Read actual rendered gap from computed styles
    const gap = parseFloat(getComputedStyle(el).columnGap) || 20;
    const firstCard = el.firstElementChild as HTMLElement;
    const cardW = firstCard?.getBoundingClientRect().width ?? 200;
    const visibleCards = Math.round((el.clientWidth + gap) / (cardW + gap));
    return visibleCards * (cardW + gap);
  };

  const scrollPrev = () =>
    scrollRef.current?.scrollBy({ left: -getPageWidth(), behavior: 'smooth' });
  const scrollNext = () =>
    scrollRef.current?.scrollBy({ left: getPageWidth(), behavior: 'smooth' });

  return (
    <section className={`${styles.section} ${styles.shelfSection}`}>
      {/* Header: left-aligned title + hover nav buttons on right */}
      <div className={styles.shelfHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.shelfNav}>
          <button
            className={styles.shelfNavBtn}
            onClick={scrollPrev}
            disabled={!canScrollLeft}
            aria-label="Previous"
          >
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
              <path d="M6.5 1l-5 5.5 5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={styles.shelfNavBtn}
            onClick={scrollNext}
            disabled={!canScrollRight}
            aria-label="Next"
          >
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
              <path d="M1.5 1l5 5.5-5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll area */}
      <div
        ref={scrollRef}
        className={styles.shelfScroll}
        onScroll={updateScrollState}
      >
        {items.map((p) => (
          <ShelfCardItem key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────

export default function PodcastDetails({ podcast }: Props) {
  return (
    <div className={styles.wrapper}>
      {podcast.nytPodcasts.length > 0 && <PublisherBanner podcast={podcast} />}
      {podcast.hosts.length > 0 && <HostsSection podcast={podcast} />}
      <RatingsSection podcast={podcast} />
      <AboutSection podcast={podcast} />
      <InfoSection podcast={podcast} />
      {podcast.moreFromPublisher.length > 0 && (
        <PodcastShelf title={`More From ${podcast.author}`} items={podcast.moreFromPublisher} />
      )}
      {podcast.youMightAlsoLike.length > 0 && (
        <PodcastShelf title="You Might Also Like" items={podcast.youMightAlsoLike} />
      )}
    </div>
  );
}

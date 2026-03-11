'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { CategoryCard } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './MoreToDiscover.module.scss';

interface Props {
  categories: CategoryCard[];
}

function WavesLeft() {
  return (
    <svg
      className={styles.waves}
      viewBox="0 0 22 56"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 8 Q 7 28 18 48"
        stroke="rgba(0,0,0,0.42)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M12 3 Q -1 28 12 53"
        stroke="rgba(0,0,0,0.42)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WavesRight() {
  return (
    <svg
      className={styles.waves}
      viewBox="0 0 22 56"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8 Q 15 28 4 48"
        stroke="rgba(0,0,0,0.42)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10 3 Q 23 28 10 53"
        stroke="rgba(0,0,0,0.42)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const CHEVRON_D =
  'M14.7319 45.1846C14.8326 45.4725 15.0176 45.7235 15.2629 45.9049C15.5081 46.0863 15.8022 46.1897 16.107 46.2018C17.0684 46.2018 17.7805 45.5057 17.7805 44.5613C17.7805 44.0645 17.5189 43.4412 17.3565 43.0313L12.9365 31.7811L17.3527 20.5375C17.5152 20.12 17.7777 19.4835 17.7777 19.0027C17.7823 18.7833 17.7419 18.5652 17.6589 18.362C17.576 18.1587 17.4523 17.9746 17.2955 17.821C17.1387 17.6674 16.9521 17.5475 16.7472 17.4688C16.5423 17.3901 16.3235 17.3541 16.1042 17.3632C15.7976 17.3753 15.502 17.4802 15.2565 17.664C15.0109 17.8478 14.827 18.1019 14.729 18.3926L10.3874 29.4256C10.1032 30.1576 9.74805 31.0727 9.74805 31.782C9.74805 32.4941 10.1032 33.3923 10.3874 34.1412L14.729 45.1846H14.7319Z';

function NavArrow({
  dir,
  onClick,
}: {
  dir: 'left' | 'right';
  onClick: () => void;
}) {
  return (
    <button
      className={`${styles.arrowBtn} ${dir === 'left' ? styles.arrowLeft : styles.arrowRight}`}
      onClick={onClick}
      aria-label={dir === 'left' ? 'Scroll left' : 'Scroll right'}
    >
      <svg
        width="28"
        height="64"
        viewBox="0 0 28 64"
        fill="none"
        aria-hidden="true"
        style={dir === 'right' ? { transform: 'scaleX(-1)' } : undefined}
      >
        <path d={CHEVRON_D} fill="white" fillOpacity="0.64" />
      </svg>
    </button>
  );
}

export default function MoreToDiscover({ categories }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, [update]);

  const handleScroll = useCallback((dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === 'right' ? el.clientWidth : -el.clientWidth,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section className={styles.discover}>
      <SectionHeader title="More to Discover" />
      <div className={styles.scrollWrapper}>
        {canScrollLeft && (
          <NavArrow dir="left" onClick={() => handleScroll('left')} />
        )}
        <div className={styles.scroll} ref={scrollRef}>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={styles.card}
              style={{ backgroundColor: cat.color }}
            >
              <div className={styles.cardInner}>
                <WavesLeft />
                <span className={styles.cardTitle}>{cat.title}</span>
                <WavesRight />
              </div>
            </Link>
          ))}
        </div>
        {canScrollRight && (
          <NavArrow dir="right" onClick={() => handleScroll('right')} />
        )}
      </div>
    </section>
  );
}

'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import type { QueueItem } from '@/types';
import styles from './FullScreenPlayer.module.scss';

interface FullScreenPlayerProps {
  open: boolean;
  onClose: () => void;
  currentTrack?: QueueItem | null;
}

export default function FullScreenPlayer({ open, onClose, currentTrack }: FullScreenPlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  const artworkSrc = currentTrack?.artwork ?? '/images/artwork/the-daily.jpg';
  const trackTitle = currentTrack?.title ?? 'Oscars 2026: Who Will Win and Who Should?';
  const trackSubtitle = currentTrack?.podcastTitle ?? 'The Daily';

  useEffect(() => {
    if (!open) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const img = new window.Image();
    img.src = artworkSrc;

    const sprites = [
      { ox: 0,    oy: 0,    rot: 0,              speed:  0.004  },
      { ox: 0.35, oy:-0.25, rot: Math.PI * 0.5,  speed: -0.003  },
      { ox:-0.25, oy: 0.35, rot: Math.PI,         speed:  0.0035 },
      { ox: 0.2,  oy: 0.3,  rot: Math.PI * 1.5,  speed: -0.004  },
    ];

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      if (img.complete && img.naturalWidth > 0) {
        const size = Math.max(width, height) * 1.8;
        for (const sp of sprites) {
          const cx = width  * (0.5 + sp.ox);
          const cy = height * (0.5 + sp.oy);
          ctx.save();
          ctx.globalAlpha = 0.9;
          ctx.translate(cx, cy);
          ctx.rotate(sp.rot);
          ctx.drawImage(img, -size / 2, -size / 2, size, size);
          ctx.restore();
        }
      }

      if (!reducedMotion) {
        for (const sp of sprites) sp.rot += sp.speed;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const start = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(draw);
    };

    img.onload = start;
    if (img.complete) start();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [open, artworkSrc]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <canvas ref={canvasRef} className={styles.ambientCanvas} aria-hidden="true" />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Minimize player">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.artworkWrap}>
          <Image
            src={artworkSrc}
            alt="Now playing"
            width={300}
            height={300}
            className={styles.artwork}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className={styles.trackInfo}>
          <p className={styles.trackTitle}>{trackTitle}</p>
          <p className={styles.trackSubtitle}>{trackSubtitle}</p>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} />
            <div className={styles.progressKnob} />
          </div>
          <div className={styles.progressTimes}>
            <span>-38:12</span>
            <span>-24:50</span>
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.speedBtn} aria-label="Playback speed">1×</button>

          <button className={styles.skipBtnLg} aria-label="Skip back 15 seconds">
            <span className={styles.skipWrap}>
              <svg width="26" height="30" viewBox="0 0 16 19" fill="currentColor" style={{ transform: 'scaleX(-1)' }}>
                <path d="M4.882 17.759C3.912 17.3417 3.06467 16.7707 2.34 16.046C1.61534 15.3213 1.044 14.474 0.626002 13.504C0.208002 12.534 -0.000665074 11.4947 1.59236e-06 10.386C0.000668259 9.27733 0.209335 8.23733 0.626002 7.266C1.04267 6.29467 1.614 5.44767 2.34 4.725C3.066 4.00233 3.91267 3.431 4.88 3.011C5.84733 2.591 6.88734 2.38233 8 2.385H8.38L6.716 0.719L7.423 0L10.308 2.866L7.462 5.731L6.754 5.012L8.38 3.385H8C6.05 3.385 4.396 4.06433 3.038 5.423C1.68 6.78167 1.00067 8.43567 1 10.385C0.999335 12.3343 1.67867 13.9887 3.038 15.348C4.39734 16.7073 6.05134 17.3863 8 17.385C9.94867 17.3837 11.603 16.7047 12.963 15.348C14.323 13.9913 15.002 12.337 15 10.385H16C16 11.495 15.7913 12.5347 15.374 13.504C14.9567 14.4733 14.3853 15.3207 13.66 16.046C12.9347 16.7713 12.088 17.3423 11.12 17.759C10.152 18.1757 9.112 18.3843 8 18.385C6.888 18.3857 5.848 18.177 4.88 17.759"/>
              </svg>
              <span className={styles.skipNum}>15</span>
            </span>
          </button>

          <button className={styles.playBtnLg} aria-label="Play">
            <svg width="22" height="26" viewBox="0 0 11 13" fill="currentColor">
              <path d="M0 0v13l11-6.5z"/>
            </svg>
          </button>

          <button className={styles.skipBtnLg} aria-label="Skip forward 30 seconds">
            <span className={styles.skipWrap}>
              <svg width="26" height="30" viewBox="0 0 16 19" fill="currentColor">
                <path d="M4.882 17.759C3.912 17.3417 3.06467 16.7707 2.34 16.046C1.61534 15.3213 1.044 14.474 0.626002 13.504C0.208002 12.534 -0.000665074 11.4947 1.59236e-06 10.386C0.000668259 9.27733 0.209335 8.23733 0.626002 7.266C1.04267 6.29467 1.614 5.44767 2.34 4.725C3.066 4.00233 3.91267 3.431 4.88 3.011C5.84733 2.591 6.88734 2.38233 8 2.385H8.38L6.716 0.719L7.423 0L10.308 2.866L7.462 5.731L6.754 5.012L8.38 3.385H8C6.05 3.385 4.396 4.06433 3.038 5.423C1.68 6.78167 1.00067 8.43567 1 10.385C0.999335 12.3343 1.67867 13.9887 3.038 15.348C4.39734 16.7073 6.05134 17.3863 8 17.385C9.94867 17.3837 11.603 16.7047 12.963 15.348C14.323 13.9913 15.002 12.337 15 10.385H16C16 11.495 15.7913 12.5347 15.374 13.504C14.9567 14.4733 14.3853 15.3207 13.66 16.046C12.9347 16.7713 12.088 17.3423 11.12 17.759C10.152 18.1757 9.112 18.3843 8 18.385C6.888 18.3857 5.848 18.177 4.88 17.759"/>
              </svg>
              <span className={styles.skipNum}>30</span>
            </span>
          </button>

          <button className={styles.moreBtn} aria-label="More options">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="12" r="2.5"/>
              <circle cx="12" cy="12" r="2.5"/>
              <circle cx="19" cy="12" r="2.5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

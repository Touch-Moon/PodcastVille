'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './PlayerBar.module.scss';

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];
const TOTAL_DURATION = 1620; // 27 min

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

interface Props {
  queueOpen?: boolean;
  episodeNotesOpen?: boolean;
  currentTrack?: { title: string; podcastTitle: string; artwork: string } | null;
}

export default function PlayerBar({ queueOpen = false, episodeNotesOpen = false, currentTrack = null }: Props) {
  const [volume, setVolume] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [speedIndex, setSpeedIndex] = useState(2); // starts at 1×
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isProgressDragging = useRef(false);

  const speed = SPEEDS[speedIndex];
  const nearArc = volume > 0;
  const farArc = volume > 40;
  const progressPct = (currentTime / TOTAL_DURATION) * 100;
  const remaining = TOTAL_DURATION - currentTime;

  // Volume drag
  const computeVolume = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setVolume(Math.round((x / rect.width) * 100));
  };

  // Progress drag
  const computeProgress = (clientX: number) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setCurrentTime(Math.round((x / rect.width) * TOTAL_DURATION));
  };

  const handleSliderMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    computeVolume(e.clientX);
  };

  const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isProgressDragging.current = true;
    computeProgress(e.clientX);
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (isDragging.current) computeVolume(e.clientX);
      if (isProgressDragging.current) computeProgress(e.clientX);
    };
    const onUp = () => {
      isDragging.current = false;
      isProgressDragging.current = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Playback timer
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setCurrentTime((t) => {
        const next = t + speed;
        if (next >= TOTAL_DURATION) {
          setIsPlaying(false);
          return TOTAL_DURATION;
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isPlaying, speed]);

  const handlePlayPause = () => setIsPlaying((p) => !p);
  const handleSpeedClick = () => setSpeedIndex((i) => (i + 1) % SPEEDS.length);
  const handleSkipBack = () => setCurrentTime((t) => Math.max(0, t - 15));
  const handleSkipForward = () => setCurrentTime((t) => Math.min(TOTAL_DURATION, t + 30));

  const speedLabel = speed === 1 ? '1×' : `${speed}×`;

  return (
    <header id="player-bar" className={styles.bar}>
      {/* Left: speed + skip15 + play + skip30 */}
      <div className={styles.left}>
        <button className={styles.speedBtn} aria-label="Playback speed" onClick={handleSpeedClick}>
          {speedLabel}
        </button>

        <button
          className={`${styles.skipBtn} ${styles.skipBackBtn}`}
          aria-label="Skip back 15 seconds"
          onClick={handleSkipBack}
        >
          <span className={styles.skipWrap}>
            <svg width="22" height="26" viewBox="0 0 16 19" fill="currentColor" style={{ transform: 'scaleX(-1)' }}>
              <path d="M4.882 17.759C3.912 17.3417 3.06467 16.7707 2.34 16.046C1.61534 15.3213 1.044 14.474 0.626002 13.504C0.208002 12.534 -0.000665074 11.4947 1.59236e-06 10.386C0.000668259 9.27733 0.209335 8.23733 0.626002 7.266C1.04267 6.29467 1.614 5.44767 2.34 4.725C3.066 4.00233 3.91267 3.431 4.88 3.011C5.84733 2.591 6.88734 2.38233 8 2.385H8.38L6.716 0.719L7.423 0L10.308 2.866L7.462 5.731L6.754 5.012L8.38 3.385H8C6.05 3.385 4.396 4.06433 3.038 5.423C1.68 6.78167 1.00067 8.43567 1 10.385C0.999335 12.3343 1.67867 13.9887 3.038 15.348C4.39734 16.7073 6.05134 17.3863 8 17.385C9.94867 17.3837 11.603 16.7047 12.963 15.348C14.323 13.9913 15.002 12.337 15 10.385H16C16 11.495 15.7913 12.5347 15.374 13.504C14.9567 14.4733 14.3853 15.3207 13.66 16.046C12.9347 16.7713 12.088 17.3423 11.12 17.759C10.152 18.1757 9.112 18.3843 8 18.385C6.888 18.3857 5.848 18.177 4.88 17.759"/>
            </svg>
            <span className={styles.skipNum} aria-hidden="true">15</span>
          </span>
        </button>

        <button className={styles.playBtn} aria-label={isPlaying ? 'Pause' : 'Play'} onClick={handlePlayPause}>
          {isPlaying ? (
            <svg width="10" height="13" viewBox="0 0 10 13" fill="var(--color-bg)">
              <rect x="0" y="0" width="3.5" height="13" rx="1"/>
              <rect x="6.5" y="0" width="3.5" height="13" rx="1"/>
            </svg>
          ) : (
            <svg width="11" height="13" viewBox="0 0 11 13" fill="var(--color-bg)">
              <path d="M0 0v13l11-6.5z"/>
            </svg>
          )}
        </button>

        <button className={styles.skipBtn} aria-label="Skip forward 30 seconds" onClick={handleSkipForward}>
          <span className={styles.skipWrap}>
            <svg width="22" height="26" viewBox="0 0 16 19" fill="currentColor">
              <path d="M4.882 17.759C3.912 17.3417 3.06467 16.7707 2.34 16.046C1.61534 15.3213 1.044 14.474 0.626002 13.504C0.208002 12.534 -0.000665074 11.4947 1.59236e-06 10.386C0.000668259 9.27733 0.209335 8.23733 0.626002 7.266C1.04267 6.29467 1.614 5.44767 2.34 4.725C3.066 4.00233 3.91267 3.431 4.88 3.011C5.84733 2.591 6.88734 2.38233 8 2.385H8.38L6.716 0.719L7.423 0L10.308 2.866L7.462 5.731L6.754 5.012L8.38 3.385H8C6.05 3.385 4.396 4.06433 3.038 5.423C1.68 6.78167 1.00067 8.43567 1 10.385C0.999335 12.3343 1.67867 13.9887 3.038 15.348C4.39734 16.7073 6.05134 17.3863 8 17.385C9.94867 17.3837 11.603 16.7047 12.963 15.348C14.323 13.9913 15.002 12.337 15 10.385H16C16 11.495 15.7913 12.5347 15.374 13.504C14.9567 14.4733 14.3853 15.3207 13.66 16.046C12.9347 16.7713 12.088 17.3423 11.12 17.759C10.152 18.1757 9.112 18.3843 8 18.385C6.888 18.3857 5.848 18.177 4.88 17.759"/>
            </svg>
            <span className={styles.skipNum} aria-hidden="true">30</span>
          </span>
        </button>
      </div>

      {/* Center: LCD — artwork + track info + progress */}
      <div className={styles.center}>
        <div className={styles.lcd}>
          {currentTrack ? (
            <>
              <div className={styles.lcdTop}>
                <div
                  className={styles.artwork}
                  onClick={() => document.dispatchEvent(new CustomEvent('toggleFullScreenPlayer'))}
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src={currentTrack.artwork}
                    alt="Now playing"
                    width={32}
                    height={32}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.trackInfo}>
                  <div className={styles.trackTitle}>{currentTrack.title}</div>
                  <div className={styles.trackSubtitle}>{currentTrack.podcastTitle}</div>
                </div>
              </div>
              <div className={styles.progressRow}>
                <span className={styles.timeLabel}>{formatTime(currentTime)}</span>
                <div
                  ref={progressRef}
                  className={styles.progressBar}
                  onMouseDown={handleProgressMouseDown}
                >
                  <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
                  </div>
                  <div className={styles.progressKnob} style={{ left: `${progressPct}%` }} />
                </div>
                <span className={`${styles.timeLabel} ${styles.timeLabelRight}`}>-{formatTime(remaining)}</span>
              </div>
            </>
          ) : (
            <div className={styles.lcdEmpty}>
              <Image
                src="/images/logo.svg"
                alt="PodcastVille"
                width={120}
                height={24}
                style={{ width: 'auto', height: '18px', filter: 'brightness(0) invert(1)', opacity: 0.25 }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Right: volume + queue + sign in */}
      <div className={styles.right}>
        {/* Volume */}
        <div className={styles.volumeGroup}>
          <button className={styles.volumeBtn} aria-label="Volume">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M7.16563 14.3606C7.56301 14.3606 7.84935 14.0684 7.84935 13.6769V4.35601C7.84935 3.96448 7.56301 3.64307 7.15394 3.64307C6.86759 3.64307 6.67474 3.76579 6.36503 4.05797L3.77624 6.49483C3.73533 6.52988 3.68858 6.54742 3.63014 6.54742H1.88285C1.05887 6.54742 0.614746 6.99739 0.614746 7.87981V10.1414C0.614746 11.0179 1.05887 11.4679 1.88285 11.4679H3.63014C3.68858 11.4679 3.73533 11.4854 3.77624 11.5205L6.36503 13.9807C6.64553 14.2437 6.87929 14.3606 7.16563 14.3606Z"
                fill="white"
                fillOpacity={volume === 0 ? 0.2 : 0.55}
                style={{ transition: 'fill-opacity 0.15s ease' }}
              />
              <path
                d="M10.3678 11.5616C10.5665 11.7019 10.8528 11.661 11.0223 11.4272C11.4781 10.8136 11.7527 9.91368 11.7527 8.99622C11.7527 8.07875 11.4781 7.18466 11.0223 6.56521C10.8528 6.33146 10.5723 6.29055 10.3678 6.42495C10.1165 6.60027 10.0814 6.8983 10.2685 7.14959C10.6074 7.60542 10.8119 8.30081 10.8119 8.99622C10.8119 9.69164 10.5957 10.387 10.2626 10.8487C10.0873 11.1 10.1165 11.3863 10.3678 11.5616Z"
                fill="white"
                fillOpacity={nearArc ? 0.55 : 0}
                style={{ transition: 'fill-opacity 0.15s ease' }}
              />
              <path
                d="M12.6995 13.1394C12.9274 13.2914 13.208 13.2329 13.3716 12.9992C14.1429 11.9239 14.5929 10.4922 14.5929 8.99615C14.5929 7.49431 14.1546 6.05681 13.3716 4.98722C13.2021 4.75931 12.9274 4.70088 12.6995 4.85282C12.4774 5.00475 12.4423 5.29109 12.6177 5.54239C13.2546 6.4774 13.6521 7.70458 13.6521 8.99613C13.6521 10.2877 13.2605 11.5265 12.6177 12.4499C12.4482 12.7012 12.4774 12.9875 12.6995 13.1394Z"
                fill="white"
                fillOpacity={farArc ? 0.55 : 0}
                style={{ transition: 'fill-opacity 0.15s ease' }}
              />
            </svg>
          </button>
          <div
            ref={sliderRef}
            className={styles.volumeSlider}
            onMouseDown={handleSliderMouseDown}
          >
            <div className={styles.volumeFill} style={{ width: `${volume}%` }} />
            <div className={styles.volumeKnob} style={{ left: `${volume}%` }} />
          </div>
        </div>

        {/* Episode Notes */}
        <button
          className={`${styles.iconBtn}${episodeNotesOpen ? ` ${styles.iconBtnActive}` : ''}`}
          aria-label="Episode notes"
          onClick={() => document.dispatchEvent(new CustomEvent('toggleEpisodeNotesPanel'))}
        >
          <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_68_191237)">
              <path d="M15.9973 22.9959C20.9325 22.9959 25.0041 18.9243 25.0041 13.9973C25.0041 9.07296 20.9229 5 15.989 5C11.0634 5 7 9.07159 7 13.9973C7 18.9229 11.0716 22.9959 15.9973 22.9959ZM15.9973 21.2027C15.0512 21.2049 14.1142 21.0199 13.24 20.6584C12.3658 20.2968 11.5717 19.7658 10.9036 19.0961C10.2355 18.4263 9.70655 17.631 9.34716 16.7559C8.98777 15.8808 8.80507 14.9433 8.8096 13.9973C8.80525 13.0525 8.98787 12.1161 9.34693 11.2422C9.70599 10.3683 10.2344 9.57399 10.9017 8.90514C11.569 8.23629 12.3621 7.70607 13.2352 7.34501C14.1083 6.98395 15.0442 6.79919 15.989 6.80137C16.9358 6.79848 17.8738 6.98255 18.7492 7.34303C19.6246 7.7035 20.4203 8.23327 21.0905 8.90196C21.7607 9.57064 22.2923 10.3651 22.6548 11.2397C23.0173 12.1143 23.2035 13.0519 23.2027 13.9986C23.2058 14.9457 23.0215 15.884 22.6605 16.7595C22.2995 17.635 21.7688 18.4305 21.0991 19.1001C20.4294 19.7697 19.6338 20.3002 18.7582 20.661C17.8826 21.0219 16.9443 21.206 15.9973 21.2027ZM15.9452 11.0567C16.1015 11.0585 16.2566 11.0292 16.4015 10.9705C16.5464 10.9118 16.6782 10.8249 16.7892 10.7148C16.9002 10.6047 16.9881 10.4736 17.048 10.3292C17.1079 10.1848 17.1384 10.0299 17.1379 9.87357C17.1408 9.71575 17.112 9.55894 17.0532 9.41245C16.9944 9.26596 16.9068 9.13276 16.7956 9.02076C16.6844 8.90876 16.5518 8.82024 16.4057 8.76044C16.2596 8.70065 16.103 8.6708 15.9452 8.67266C15.7883 8.67264 15.633 8.70382 15.4883 8.76439C15.3435 8.82496 15.2123 8.9137 15.1022 9.02546C14.9921 9.13721 14.9054 9.26975 14.847 9.41535C14.7886 9.56095 14.7597 9.71671 14.7621 9.87357C14.7621 10.5261 15.2926 11.0567 15.9452 11.0567ZM17.9906 18.7324C18.3826 18.7324 18.6952 18.4527 18.6952 18.0524C18.6933 17.9621 18.6734 17.873 18.6369 17.7904C18.6003 17.7078 18.5478 17.6333 18.4823 17.5711C18.4168 17.5089 18.3396 17.4603 18.2552 17.428C18.1708 17.3958 18.0809 17.3807 17.9906 17.3834H17.0254V13.2762C17.0254 12.7538 16.765 12.4056 16.2769 12.4056H14.614C14.524 12.4029 14.4344 12.4182 14.3503 12.4506C14.2663 12.4829 14.1896 12.5318 14.1247 12.5943C14.0598 12.6567 14.0081 12.7315 13.9725 12.8142C13.937 12.897 13.9183 12.986 13.9176 13.076C13.9176 13.4763 14.2233 13.7628 14.614 13.7628H15.5024V17.382H14.4577C14.3678 17.38 14.2784 17.3959 14.1946 17.4286C14.1108 17.4613 14.0343 17.5104 13.9696 17.5728C13.9048 17.6353 13.8531 17.7099 13.8173 17.7925C13.7816 17.875 13.7626 17.9638 13.7613 18.0538C13.7603 18.1447 13.7778 18.2348 13.8127 18.3188C13.8475 18.4027 13.8991 18.4787 13.9642 18.5422C14.0293 18.6056 14.1066 18.6552 14.1915 18.6879C14.2763 18.7206 14.3669 18.7357 14.4577 18.7324H17.9906Z" fill="currentColor"/>
            </g>
            <defs>
              <clipPath id="clip0_68_191237">
                <rect width="18" height="22" fill="white" transform="translate(7 3)"/>
              </clipPath>
            </defs>
          </svg>
        </button>

        {/* Up Next / Queue */}
        <button
          className={`${styles.iconBtn}${queueOpen ? ` ${styles.iconBtnActive}` : ''}`}
          aria-label="Up next"
          onClick={() => document.dispatchEvent(new CustomEvent('toggleQueuePanel'))}
        >
          <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.63414 10.537C9.87456 10.537 10.1051 10.4415 10.2751 10.2715C10.4451 10.1015 10.5406 9.87092 10.5406 9.6305C10.5406 9.39008 10.4451 9.15951 10.2751 8.98951C10.1051 8.8195 9.87456 8.724 9.63414 8.724C9.39373 8.724 9.16315 8.8195 8.99315 8.98951C8.82315 9.15951 8.72764 9.39008 8.72764 9.6305C8.72764 9.87092 8.82315 10.1015 8.99315 10.2715C9.16315 10.4415 9.39373 10.537 9.63414 10.537ZM12.8261 10.212H22.6911C22.7677 10.2132 22.8437 10.1991 22.9148 10.1706C22.9859 10.142 23.0505 10.0996 23.105 10.0458C23.1595 9.99199 23.2026 9.92785 23.232 9.85714C23.2614 9.78643 23.2764 9.71057 23.2761 9.634C23.2771 9.55692 23.2626 9.48042 23.2335 9.40902C23.2045 9.33762 23.1614 9.27276 23.1069 9.21825C23.0524 9.16374 22.9875 9.12068 22.9161 9.09162C22.8447 9.06255 22.7682 9.04806 22.6911 9.049H12.8261C12.7489 9.0475 12.6722 9.06161 12.6005 9.09048C12.5289 9.11935 12.4638 9.16239 12.4092 9.21701C12.3545 9.27164 12.3115 9.33672 12.2826 9.40837C12.2538 9.48002 12.2396 9.55676 12.2411 9.634C12.2411 9.959 12.4941 10.212 12.8261 10.212ZM9.63414 14.906C10.1401 14.906 10.5441 14.502 10.5441 13.996C10.5447 13.8763 10.5215 13.7578 10.476 13.6471C10.4304 13.5365 10.3634 13.436 10.2788 13.3514C10.1942 13.2667 10.0937 13.1997 9.98301 13.1542C9.87237 13.1086 9.7538 13.0855 9.63414 13.086C9.51449 13.0855 9.39592 13.1086 9.28528 13.1542C9.17463 13.1997 9.0741 13.2667 8.9895 13.3514C8.90489 13.436 8.83788 13.5365 8.79234 13.6471C8.74679 13.7578 8.72362 13.8763 8.72414 13.996C8.72414 14.502 9.12914 14.906 9.63414 14.906ZM12.8261 14.581H22.6911C22.7703 14.5856 22.8496 14.5741 22.9241 14.547C22.9986 14.5199 23.0669 14.4778 23.1245 14.4234C23.1822 14.369 23.2282 14.3034 23.2596 14.2306C23.291 14.1578 23.3072 14.0793 23.3072 14C23.3072 13.9207 23.291 13.8422 23.2596 13.7694C23.2282 13.6966 23.1822 13.631 23.1245 13.5766C23.0669 13.5222 22.9986 13.4801 22.9241 13.453C22.8496 13.4259 22.7703 13.4144 22.6911 13.419H12.8261C12.7495 13.4173 12.6733 13.4309 12.6021 13.4592C12.5308 13.4875 12.466 13.5298 12.4115 13.5836C12.3569 13.6374 12.3137 13.7017 12.2844 13.7725C12.2552 13.8434 12.2405 13.9194 12.2411 13.996C12.2411 14.321 12.4941 14.581 12.8261 14.581ZM9.63414 19.275C9.75365 19.2749 9.87197 19.2513 9.98235 19.2055C10.0927 19.1597 10.193 19.0927 10.2775 19.0081C10.3619 18.9236 10.4289 18.8232 10.4746 18.7128C10.5202 18.6023 10.5437 18.484 10.5436 18.3645C10.5436 18.245 10.52 18.1267 10.4742 18.0163C10.4284 17.9059 10.3613 17.8056 10.2768 17.7212C10.1922 17.6367 10.0919 17.5697 9.98142 17.5241C9.87099 17.4784 9.75265 17.4549 9.63314 17.455C9.3918 17.455 9.16034 17.5509 8.98968 17.7215C8.81902 17.8922 8.72314 18.1237 8.72314 18.365C8.72314 18.6063 8.81902 18.8378 8.98968 19.0085C9.16034 19.1791 9.3918 19.275 9.63314 19.275H9.63414ZM12.8261 18.943H22.6911C22.7676 18.9442 22.8436 18.9301 22.9146 18.9017C22.9856 18.8732 23.0502 18.8309 23.1046 18.7772C23.1591 18.7234 23.2023 18.6594 23.2317 18.5888C23.2612 18.5182 23.2763 18.4425 23.2761 18.366C23.2771 18.2889 23.2626 18.2124 23.2335 18.141C23.2045 18.0696 23.1614 18.0048 23.1069 17.9502C23.0524 17.8957 22.9875 17.8527 22.9161 17.8236C22.8447 17.7945 22.7682 17.7801 22.6911 17.781H12.8261C12.7489 17.7795 12.6722 17.7936 12.6005 17.8225C12.5289 17.8514 12.4638 17.8944 12.4092 17.949C12.3545 18.0036 12.3115 18.0687 12.2826 18.1404C12.2538 18.212 12.2396 18.2888 12.2411 18.366C12.2411 18.69 12.4941 18.943 12.8261 18.943Z" fill="currentColor"/>
          </svg>
        </button>

        <button className={styles.signInBtn} onClick={() => document.dispatchEvent(new CustomEvent('toggleSignInModal'))}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
          Sign In
        </button>
      </div>
    </header>
  );
}

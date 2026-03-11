'use client';

import { useEffect, useState } from 'react';
import styles from './GreetingBanner.module.scss';

function getGreeting(): { greeting: string; sub: string } {
  const h = new Date().getHours();
  if (h >= 5 && h < 12)
    return { greeting: 'Good morning', sub: 'Start your day with something great.' };
  if (h >= 12 && h < 18)
    return { greeting: 'Good afternoon', sub: 'Catch up on what you missed.' };
  return { greeting: 'Good evening', sub: 'Wind down with your favorite shows.' };
}

export default function GreetingBanner() {
  const [text, setText] = useState<{ greeting: string; sub: string } | null>(null);

  useEffect(() => {
    setText(getGreeting());
  }, []);

  if (!text) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <h1 className={styles.greeting}>{text.greeting}</h1>
        <p className={styles.sub}>{text.sub}</p>
      </div>
      <div className={styles.waves} aria-hidden="true">
        <svg viewBox="0 0 400 120" preserveAspectRatio="none">
          <path d="M0 60 Q 100 10 200 60 Q 300 110 400 60 L 400 120 L 0 120 Z" fill="rgba(255,255,255,0.04)" />
          <path d="M0 80 Q 80 30 200 80 Q 320 130 400 80 L 400 120 L 0 120 Z" fill="rgba(255,255,255,0.03)" />
        </svg>
      </div>
    </div>
  );
}

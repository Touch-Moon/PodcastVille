'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './MobileNav.module.scss';

const mobileNavItems = [
  {
    label: 'Home',
    href: '/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    label: 'New',
    href: '/new',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="8" height="8" rx="1.5"/>
        <rect x="13" y="3" width="8" height="8" rx="1.5"/>
        <rect x="3" y="13" width="8" height="8" rx="1.5"/>
        <rect x="13" y="13" width="8" height="8" rx="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Charts',
    href: '/charts',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="14" width="4" height="7" rx="1"/>
        <rect x="10" y="9" width="4" height="12" rx="1"/>
        <rect x="17" y="4" width="4" height="17" rx="1"/>
      </svg>
    ),
  },
  {
    label: 'Search',
    href: '/search',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={styles.mobileNav} aria-label="Mobile navigation">
      {mobileNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${styles.mobileNavItem} ${isActive(item.href) ? styles.active : ''}`}
        >
          <span className={styles.mobileNavIcon}>{item.icon}</span>
          <span className={styles.mobileNavLabel}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

import Link from 'next/link';
import styles from './PodcastMobileHeader.module.scss';

export default function PodcastMobileHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Left: hamburger menu */}
        <Link href="/new" className={styles.menuBtn} aria-label="Open navigation">
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </Link>

        {/* Center: logo */}
        <span className={styles.logo}>PodcastVille</span>

        {/* Right: Sign In */}
        <button className={styles.signIn}>Sign In</button>
      </nav>
    </header>
  );
}

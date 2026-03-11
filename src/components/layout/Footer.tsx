import styles from './Footer.module.scss';

const leftLinks = [
  { label: 'Internet Service Terms', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Support', href: '#' },
  { label: 'Feedback', href: '#' },
];

const rightLinks = [
  { label: 'The New York Times', href: '#' },
  { label: 'The New York Times', href: '#' },
  { label: 'The New York Times', href: '#' },
  { label: '简体中文', href: '#' },
  { label: '한국어', href: '#' },
  { label: '繁體中文 (台灣)', href: '#' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Left: copyright + nav links */}
      <div className={styles.left}>
        <p className={styles.copyright}>
          <span>Copyright © 2026 </span>
          <a href="#" className={styles.copyrightLink}>Podcastville</a>
          <span> All rights reserved.</span>
        </p>
        <ul className={styles.navList}>
          {leftLinks.map((link) => (
            <li key={link.label} className={styles.navItem}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: region selector + secondary links */}
      <div className={styles.right}>
        <button className={styles.regionBtn}>United States</button>
        <ul className={styles.secondaryList}>
          {rightLinks.map((link, i) => (
            <li key={i} className={styles.secondaryItem}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

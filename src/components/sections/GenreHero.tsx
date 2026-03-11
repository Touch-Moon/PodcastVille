import styles from './GenreHero.module.scss';

interface Props {
  title: string;
  color: string;
}

export default function GenreHero({ title, color }: Props) {
  // color can be a hex, rgb, or CSS gradient string
  const isGradient = color.startsWith('linear') || color.startsWith('radial');
  const style = isGradient ? { background: color } : { backgroundColor: color };
  return (
    <div className={styles.hero} style={style}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <svg className={styles.waveLeft} viewBox="0 0 80 200" fill="none" aria-hidden="true">
        <path d="M60 20 Q 20 100 60 180" stroke="rgba(0,0,0,0.25)" strokeWidth="8" strokeLinecap="round" />
        <path d="M40 5 Q -10 100 40 195" stroke="rgba(0,0,0,0.25)" strokeWidth="8" strokeLinecap="round" />
      </svg>
      <svg className={styles.waveRight} viewBox="0 0 80 200" fill="none" aria-hidden="true">
        <path d="M20 20 Q 60 100 20 180" stroke="rgba(0,0,0,0.25)" strokeWidth="8" strokeLinecap="round" />
        <path d="M40 5 Q 90 100 40 195" stroke="rgba(0,0,0,0.25)" strokeWidth="8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

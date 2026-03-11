import Link from 'next/link';
import styles from './SectionHeader.module.scss';

interface Props {
  title: string;
  seeAllHref?: string;
}

export default function SectionHeader({ title, seeAllHref }: Props) {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.title}>{title}</h2>
      {seeAllHref && (
        <Link href={seeAllHref} className={styles.seeAll}>
          See All
        </Link>
      )}
    </div>
  );
}

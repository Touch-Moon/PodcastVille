import Image from 'next/image';
import Link from 'next/link';
import type { Podcast } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './NewShowsGrid.module.scss';

interface Props {
  podcasts: Podcast[];
  title?: string;
  showAll?: boolean;
}

function GridCard({ podcast }: { podcast: Podcast }) {
  return (
    <Link href={`/podcast/${podcast.id}`} className={styles.gridCard}>
      <div className={`artwork-radius ${styles.artwork}`}>
        <Image
          src={podcast.artwork}
          alt={podcast.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="20vw"
        />
      </div>
      <div className={styles.info}>
        <div className={`line-clamp-2 ${styles.cardTitle}`}>
          {podcast.title}
        </div>
        <div className={`line-clamp-1 ${styles.author}`}>
          {podcast.isExplicit && (
            <span className={styles.explicitBadge}>E</span>
          )}
          {podcast.author}
        </div>
      </div>
    </Link>
  );
}

export default function NewShowsGrid({ podcasts, title = 'New Shows', showAll = false }: Props) {
  const items = showAll ? podcasts : podcasts.slice(0, 15);
  return (
    <section className={styles.newShows}>
      <SectionHeader title={title} seeAllHref="/new" />
      <div className={`${styles.grid} ${showAll ? styles.gridFull : ''}`}>
        {items.map((podcast) => (
          <GridCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </section>
  );
}

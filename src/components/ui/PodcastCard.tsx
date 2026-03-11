import Image from 'next/image';
import Link from 'next/link';
import type { Podcast } from '@/types';
import styles from './PodcastCard.module.scss';

interface Props {
  podcast: Podcast;
  showAuthor?: boolean;
  rank?: number;
}

export default function PodcastCard({ podcast, showAuthor = true, rank }: Props) {
  return (
    <Link href={`/podcast/${podcast.id}`} className={styles.card}>
      <div className={`artwork-radius ${styles.artwork}`}>
        <Image
          src={podcast.artwork}
          alt={podcast.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(min-width: 1440px) 167px, (min-width: 1100px) 186px, (min-width: 840px) 156px, (min-width: 483px) 33vw, 45vw"
        />
      </div>

      <div className={styles.info}>
        {rank !== undefined && (
          <div className={styles.rank}>{rank}</div>
        )}
        <div className={`line-clamp-2 ${styles.title}`}>
          {podcast.title}
        </div>
        {showAuthor && (
          <div className={`line-clamp-1 ${styles.author}`}>
            {podcast.isExplicit && (
              <span className={styles.explicitBadge}>E</span>
            )}
            {podcast.author}
          </div>
        )}
      </div>
    </Link>
  );
}

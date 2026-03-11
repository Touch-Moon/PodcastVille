import Link from 'next/link';
import Image from 'next/image';
import type { Episode } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './TopEpisodesShelf.module.scss';

interface Props {
  episodes: Episode[];
  title?: string;
  seeAllHref?: string;
}

function EpisodeCard({ episode, rank }: { episode: Episode; rank: number }) {
  return (
    <Link href={`/podcast/${episode.podcastId}`} className={styles.card}>
      <div className={`artwork-radius ${styles.artwork}`}>
        <Image
          src={episode.artwork}
          alt={episode.podcastTitle}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(min-width: 508px) 94px, 44vw"
        />
      </div>
      <span className={styles.rank}>{rank}</span>
      <div className={styles.info}>
        <span className={styles.date}>{episode.publishedAt}</span>
        <p className={`line-clamp-2 ${styles.title}`}>{episode.title}</p>
        <p className={`line-clamp-1 ${styles.description}`}>{episode.description}</p>
      </div>
    </Link>
  );
}

export default function TopEpisodesShelf({ episodes, title = 'Top Episodes', seeAllHref }: Props) {
  const allEps = episodes.slice(0, 9);
  const cols = [
    allEps.slice(0, 3),  // ranks 1–3
    allEps.slice(3, 6),  // ranks 4–6
    allEps.slice(6, 9),  // ranks 7–9
  ];

  return (
    <section className={styles.shelf}>
      <SectionHeader title={title} seeAllHref={seeAllHref} />
      <div className={styles.grid}>
        {cols.map((col, ci) => (
          <div key={ci} className={styles.column}>
            {col.map((ep, i) => (
              <EpisodeCard key={ep.id} episode={ep} rank={ci * 3 + i + 1} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

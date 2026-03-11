import Link from 'next/link';
import Image from 'next/image';
import type { Episode } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './TheMomentShelf.module.scss';

interface Props {
  episodes: Episode[];
  seeAllHref?: string;
}

function MomentCard({ episode }: { episode: Episode }) {
  return (
    <Link href={`/podcast/${episode.podcastId}`} className={styles.card}>
      <div className={styles.imageWrap}>
        {episode.featureImage && (
          <Image
            src={episode.featureImage}
            alt={episode.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 483px) 72vw, 260px"
          />
        )}
        <div className={styles.artworkBadge}>
          <Image
            src={episode.artwork}
            alt={episode.podcastTitle}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{episode.title}</p>
        <span className={styles.meta}>
          {episode.podcastTitle} · {episode.duration}
        </span>
      </div>
    </Link>
  );
}

export default function TheMomentShelf({ episodes, seeAllHref }: Props) {
  return (
    <section className={styles.shelf}>
      <SectionHeader title="The Moment" seeAllHref={seeAllHref} />
      <div className={styles.scroll}>
        {episodes.map((ep) => (
          <MomentCard key={ep.id} episode={ep} />
        ))}
      </div>
    </section>
  );
}

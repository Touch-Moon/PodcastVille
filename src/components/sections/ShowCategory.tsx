import type { Podcast } from '@/types';
import PodcastCard from '@/components/ui/PodcastCard';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './ShowCategory.module.scss';

interface Props {
  title: string;
  podcasts: Podcast[];
  showRank?: boolean;
  seeAllHref?: string;
}

export default function ShowCategory({ title, podcasts, showRank, seeAllHref }: Props) {
  return (
    <section className={styles.showsShelf}>
      <SectionHeader title={title} seeAllHref={seeAllHref} />
      <div className={styles.scroll}>
        {podcasts.map((podcast, index) => (
          <PodcastCard
            key={podcast.id}
            podcast={podcast}
            rank={showRank ? index + 1 : undefined}
          />
        ))}
      </div>
    </section>
  );
}

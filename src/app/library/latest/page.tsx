import { topEpisodes, momentItems, latestEpisodes } from '@/data/episodes';
import TheMomentShelf from '@/components/sections/TheMomentShelf';
import TopEpisodesShelf from '@/components/sections/TopEpisodesShelf';
import LatestEpisodeFeed from '@/components/sections/LatestEpisodeFeed';
import styles from './page.module.scss';

export default function LatestEpisodesPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Latest Episodes</h1>
      <TheMomentShelf episodes={momentItems} />
      <TopEpisodesShelf episodes={topEpisodes} title="Latest Episodes" />
      <LatestEpisodeFeed episodes={latestEpisodes} />
    </div>
  );
}

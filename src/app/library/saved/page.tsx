import { topEpisodes, momentItems } from '@/data/episodes';
import TheMomentShelf from '@/components/sections/TheMomentShelf';
import TopEpisodesShelf from '@/components/sections/TopEpisodesShelf';
import styles from './page.module.scss';

export default function SavedPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Saved</h1>
      <TheMomentShelf episodes={momentItems} />
      <TopEpisodesShelf episodes={topEpisodes} />
    </div>
  );
}

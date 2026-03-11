import { topShows, newShows, globalHitsShows } from '@/data/podcasts';
import { momentItems } from '@/data/episodes';
import ShowCategory from '@/components/sections/ShowCategory';
import TheMomentShelf from '@/components/sections/TheMomentShelf';
import styles from './page.module.scss';

export default function RecentlyUpdatedPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Recently Updated</h1>
      <ShowCategory title="Updated Today" podcasts={topShows} />
      <TheMomentShelf episodes={momentItems} />
      <ShowCategory title="Updated This Week" podcasts={newShows} />
      <ShowCategory title="Global Hits" podcasts={globalHitsShows} />
    </div>
  );
}

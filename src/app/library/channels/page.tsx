import { topShows, globalHitsShows, topSocietyCultureShows } from '@/data/podcasts';
import ShowCategory from '@/components/sections/ShowCategory';
import styles from './page.module.scss';

export default function ChannelsPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Channels</h1>
      <ShowCategory title="Your Channels" podcasts={topShows} />
      <ShowCategory title="Society & Culture" podcasts={topSocietyCultureShows} />
      <ShowCategory title="Global Hits" podcasts={globalHitsShows} />
    </div>
  );
}

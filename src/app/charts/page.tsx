import { topChartsAll, topShows } from '@/data/podcasts';
import { topEpisodes } from '@/data/episodes';
import GenreHero from '@/components/sections/GenreHero';
import ShowCategory from '@/components/sections/ShowCategory';
import TopEpisodesShelf from '@/components/sections/TopEpisodesShelf';
import ChartsRankList from '@/components/sections/ChartsRankList';
import styles from './page.module.scss';

export default function ChartsPage() {
  return (
    <div className={styles.pageWrapper}>
      <GenreHero title="Top Charts" color="linear-gradient(135deg, #0d0d2b 0%, #1a1a4e 50%, #2a1060 100%)" />

      {/* Quick-glance top 10 horizontal shelf */}
      <ShowCategory title="Top 10 Shows" podcasts={topShows} showRank seeAllHref="/charts" />

      {/* Top episodes shelf */}
      <TopEpisodesShelf episodes={topEpisodes} seeAllHref="/charts" />

      {/* Full ranked list with category filter */}
      <div className={styles.rankSection}>
        <h2 className={styles.rankTitle}>Top Shows</h2>
        <ChartsRankList podcasts={topChartsAll} />
      </div>
    </div>
  );
}

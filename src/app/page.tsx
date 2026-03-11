import { topShows, newShows, essentialListens, topSubscriberShows } from '@/data/podcasts';
import { topEpisodes, momentItems, categoryCards, latestEpisodes } from '@/data/episodes';
import GreetingBanner from '@/components/sections/GreetingBanner';
import ShowCategory from '@/components/sections/ShowCategory';
import TopEpisodesShelf from '@/components/sections/TopEpisodesShelf';
import TheMomentShelf from '@/components/sections/TheMomentShelf';
import LatestEpisodeFeed from '@/components/sections/LatestEpisodeFeed';
import MoreToDiscover from '@/components/sections/MoreToDiscover';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <GreetingBanner />
      <LatestEpisodeFeed episodes={latestEpisodes} />
      <ShowCategory title="Popular Shows" podcasts={topShows} showRank seeAllHref="/charts" />
      <TopEpisodesShelf episodes={topEpisodes} seeAllHref="/charts" />
      <TheMomentShelf episodes={momentItems} seeAllHref="/new" />
      <ShowCategory title="New Shows for You" podcasts={newShows} seeAllHref="/new" />
      <ShowCategory title="Essential Listens" podcasts={essentialListens} seeAllHref="/search" />
      <ShowCategory title="Top Subscriber Shows" podcasts={topSubscriberShows} showRank seeAllHref="/charts" />
      <MoreToDiscover categories={categoryCards} />
    </div>
  );
}

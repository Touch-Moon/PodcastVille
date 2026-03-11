import { featuredContent, topEpisodes, momentItems, categoryCards } from '@/data/episodes';
import { topShows, newShows, topTrueCrime, topComedy, topNews, topSeries, newSeasonsShows, topSocietyCultureShows, globalHitsShows } from '@/data/podcasts';
import ShowcaseHero from '@/components/sections/ShowcaseHero';
import ShowCategory from '@/components/sections/ShowCategory';
import NewShowsGrid from '@/components/sections/NewShowsGrid';
import TopEpisodesShelf from '@/components/sections/TopEpisodesShelf';
import TheMomentShelf from '@/components/sections/TheMomentShelf';
import GenreShelf from '@/components/sections/GenreShelf';
import MoreToDiscover from '@/components/sections/MoreToDiscover';
import styles from './page.module.scss';

export default function NewPage() {
  return (
    <div className={styles.pageWrapper}>
      <ShowcaseHero items={featuredContent} />
      <ShowCategory title="Top Shows" podcasts={topShows} showRank seeAllHref="/charts" />
      <NewShowsGrid podcasts={newShows} />
      <TopEpisodesShelf episodes={topEpisodes} seeAllHref="/charts" />
      <TheMomentShelf episodes={momentItems} seeAllHref="/new" />
      <ShowCategory title="New Seasons" podcasts={newSeasonsShows} seeAllHref="/new" />
      <ShowCategory title="Society & Culture" podcasts={topSocietyCultureShows} seeAllHref="/genre/1324" />
      <ShowCategory title="Global Hits" podcasts={globalHitsShows} seeAllHref="/search?q=global" />
      <hr className={styles.divider} />

      {/* ── Genre Shelves ──────────────────────────────────── */}
      <GenreShelf
        genre="True Crime"
        tagline="Real investigations. Chilling mysteries. Unsolved cases."
        color="#5858EE"
        image="/images/episodes/true-crime.png"
        podcasts={topTrueCrime}
        href="/genre/1488"
      />
      <GenreShelf
        genre="Comedy"
        tagline="Laugh out loud with the best comics and storytellers."
        color="#E6920A"
        podcasts={topComedy}
        href="/genre/1303"
      />
      <GenreShelf
        genre="News"
        tagline="Stay informed with today's most trusted voices."
        color="#0A84FF"
        image="/images/episodes/news.png"
        podcasts={topNews}
        href="/genre/1489"
      />

      <ShowCategory title="Top Series" podcasts={topSeries} seeAllHref="/search?q=series" />
      <ShowCategory title="Top Comedy" podcasts={topComedy} seeAllHref="/genre/1303" />
      <ShowCategory title="Top True Crime" podcasts={topTrueCrime} seeAllHref="/genre/1488" />
      <MoreToDiscover categories={categoryCards} />
    </div>
  );
}

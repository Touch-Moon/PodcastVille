import { topShows, newShows, topSeries, topComedy, topTrueCrime, essentialListens } from '@/data/podcasts';
import type { Podcast } from '@/types';
import NewShowsGrid from '@/components/sections/NewShowsGrid';
import styles from './page.module.scss';

function deduplicatePodcasts(podcasts: Podcast[]): Podcast[] {
  const seen = new Set<string>();
  return podcasts.filter((p) => {
    const normalId = p.id.replace(/-(el|sub|sc|g|s2|s3)$/, '');
    if (seen.has(normalId)) return false;
    seen.add(normalId);
    return true;
  });
}

const ALL_SHOWS = deduplicatePodcasts([
  ...topShows,
  ...newShows,
  ...topSeries,
  ...topComedy,
  ...topTrueCrime,
  ...essentialListens,
]);

export default function ShowsPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Shows</h1>
      <NewShowsGrid podcasts={ALL_SHOWS} title="All Shows" showAll />
    </div>
  );
}

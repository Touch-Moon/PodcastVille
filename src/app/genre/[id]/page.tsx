import { notFound } from 'next/navigation';
import { getGenreById } from '@/data/genres';
import { topEpisodes } from '@/data/episodes';
import GenreHero from '@/components/sections/GenreHero';
import ShowCategory from '@/components/sections/ShowCategory';
import TopEpisodesShelf from '@/components/sections/TopEpisodesShelf';
import styles from './page.module.scss';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function GenrePage({ params }: Props) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  const genre = getGenreById(numericId);

  if (!genre) {
    notFound();
  }

  return (
    <div className={styles.pageWrapper}>
      <GenreHero title={genre.title} color={genre.color} />
      <ShowCategory title="Top Shows" podcasts={genre.topShows} showRank />
      <ShowCategory title="Essentials" podcasts={genre.essentials} />
      <TopEpisodesShelf episodes={topEpisodes} />
    </div>
  );
}

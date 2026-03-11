import { notFound } from 'next/navigation';
import { podcastDetails, generateFallbackDetail } from '@/data/podcastDetails';
import { getPodcastById } from '@/data/podcasts';
import PodcastMobileHeader from '@/components/podcast/PodcastMobileHeader';
import EpisodeHero from '@/components/episode/EpisodeHero';
import EpisodeBody from '@/components/episode/EpisodeBody';
import styles from './page.module.scss';

interface Props {
  params: Promise<{ slug: string; episodeId: string }>;
}

export default async function EpisodeDetailPage({ params }: Props) {
  const { slug, episodeId } = await params;

  let podcast = podcastDetails[slug];
  if (!podcast) {
    const basic = getPodcastById(slug);
    if (basic) podcast = generateFallbackDetail(basic);
  }
  if (!podcast) notFound();

  const episode = podcast.episodes.find((e) => e.id === episodeId);
  if (!episode) notFound();

  return (
    <div className={styles.page}>
      <PodcastMobileHeader />
      <EpisodeHero episode={episode} podcast={podcast} podcastSlug={slug} />
      <EpisodeBody episode={episode} podcast={podcast} podcastSlug={slug} />
    </div>
  );
}

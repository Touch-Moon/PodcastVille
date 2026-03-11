import { notFound } from 'next/navigation';
import { podcastDetails, generateFallbackDetail } from '@/data/podcastDetails';
import { getPodcastById, getAllPodcastIds } from '@/data/podcasts';
import PodcastMobileHeader from '@/components/podcast/PodcastMobileHeader';
import PodcastHero from '@/components/podcast/PodcastHero';
import EpisodeList from '@/components/podcast/EpisodeList';
import PodcastDetails from '@/components/podcast/PodcastDetails';
import styles from './page.module.scss';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const detailSlugs = Object.keys(podcastDetails);
  const allIds = getAllPodcastIds();
  return [...new Set([...detailSlugs, ...allIds])].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const podcast = podcastDetails[slug] ?? (getPodcastById(slug) ? generateFallbackDetail(getPodcastById(slug)!) : null);
  if (!podcast) return {};
  return {
    title: `${podcast.title} — PodcastVille`,
    description: podcast.description,
  };
}

export default async function PodcastDetailPage({ params }: Props) {
  const { slug } = await params;

  let podcast = podcastDetails[slug];
  if (!podcast) {
    const basic = getPodcastById(slug);
    if (basic) podcast = generateFallbackDetail(basic);
  }

  if (!podcast) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <PodcastMobileHeader />
      <PodcastHero podcast={podcast} />
      <EpisodeList episodes={podcast.episodes} publisherCount={podcast.nytPodcasts.length} podcastSlug={slug} podcastTitle={podcast.title} />
      <PodcastDetails podcast={podcast} />
    </div>
  );
}

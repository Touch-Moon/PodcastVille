import Image from 'next/image';
import Link from 'next/link';
import type { PodcastEpisode, PodcastDetail } from '@/data/podcastDetails';
import styles from './EpisodeBody.module.scss';

interface Props {
  episode: PodcastEpisode;
  podcast: PodcastDetail;
  podcastSlug: string;
}

export default function EpisodeBody({ episode, podcast, podcastSlug }: Props) {
  return (
    <div className={styles.body}>
      {/* Description */}
      <section className={styles.section}>
        <p className={styles.description}>{episode.description}</p>
        <a href="#" className={styles.webpageLink}>
          Episode Webpage
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </section>

      {/* Hosts & Guests */}
      {podcast.hosts.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hosts &amp; Guests</h2>
          <div className={styles.hosts}>
            {podcast.hosts.map((host) => (
              <div key={host.id} className={styles.hostCard}>
                <div className={styles.hostAvatar}>
                  {host.avatar ? (
                    <Image src={host.avatar} alt={host.name} fill style={{ objectFit: 'cover' }} sizes="72px" />
                  ) : (
                    <span className={styles.hostInitials}>{host.initials ?? host.name[0]}</span>
                  )}
                </div>
                <span className={styles.hostName}>{host.name}</span>
                <span className={styles.hostRole}>{host.role}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Information */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Information</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Show</span>
            <Link href={`/podcast/${podcastSlug}`} className={styles.infoLink}>{podcast.title}</Link>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Frequency</span>
            <span className={styles.infoValue}>{podcast.frequency}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Rating</span>
            <span className={styles.infoValue}>{podcast.isExplicit ? 'Explicit' : 'Clean'}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Published</span>
            <span className={styles.infoValue}>{episode.daysAgo}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Length</span>
            <span className={styles.infoValue}>{episode.duration}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

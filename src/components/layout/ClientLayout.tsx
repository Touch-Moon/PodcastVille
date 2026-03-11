'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import type { QueueItem } from '@/types';
import PlayerBar from './PlayerBar';
import Footer from './Footer';
import MobileNav from './MobileNav';
import QueuePanel from './QueuePanel';
import EpisodeNotesPanel from './EpisodeNotesPanel';
import SignInModal from './SignInModal';
import FullScreenPlayer from './FullScreenPlayer';
import styles from './ClientLayout.module.scss';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [queueOpen, setQueueOpen] = useState(false);
  const [episodeNotesOpen, setEpisodeNotesOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [fullScreenPlayerOpen, setFullScreenPlayerOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<QueueItem | null>(null);
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const pathname = usePathname();
  const isPodcastDetail = pathname?.startsWith('/podcast/') ?? false;

  useEffect(() => {
    const handleQueue = () => {
      setQueueOpen((prev) => !prev);
      setEpisodeNotesOpen(false);
    };
    const handleNotes = () => {
      setEpisodeNotesOpen((prev) => !prev);
      setQueueOpen(false);
    };
    const handleSignIn = () => {
      setSignInOpen((prev) => !prev);
    };
    const handleFullScreenPlayer = () => {
      setFullScreenPlayerOpen((prev) => !prev);
    };
    const handlePlayEpisode = (e: Event) => {
      const { track, queue: newQueue } = (e as CustomEvent<{ track: QueueItem; queue: QueueItem[] }>).detail;
      setCurrentTrack(track);
      setQueue(newQueue);
    };
    document.addEventListener('toggleQueuePanel', handleQueue);
    document.addEventListener('toggleEpisodeNotesPanel', handleNotes);
    document.addEventListener('toggleSignInModal', handleSignIn);
    document.addEventListener('toggleFullScreenPlayer', handleFullScreenPlayer);
    document.addEventListener('playEpisode', handlePlayEpisode);
    return () => {
      document.removeEventListener('toggleQueuePanel', handleQueue);
      document.removeEventListener('toggleEpisodeNotesPanel', handleNotes);
      document.removeEventListener('toggleSignInModal', handleSignIn);
      document.removeEventListener('toggleFullScreenPlayer', handleFullScreenPlayer);
      document.removeEventListener('playEpisode', handlePlayEpisode);
    };
  }, []);

  return (
    <div id="scrollable-page">
      {/* Left: scrollable content column */}
      <div className={`${styles.mainCol}${isPodcastDetail ? ` ${styles.noPodcastBottomPad}` : ''}`}>
        <PlayerBar queueOpen={queueOpen} episodeNotesOpen={episodeNotesOpen} currentTrack={currentTrack} />
        <main
          style={{ paddingTop: 'var(--player-bar-height)', flex: '1 0 auto' }}
          className={`${styles.mainMobileNoPad}${isPodcastDetail ? ` ${styles.mainPodcastDetail}` : ''}`}
        >
          {children}
        </main>
        <Footer />
        {/* MobileNav hidden — mini PlayerBar at bottom serves as mobile bar */}
        {/* {!isPodcastDetail && <MobileNav />} */}
      </div>

      {/* Right: queue panel — flex sibling that pushes mainCol */}
      <QueuePanel
        open={queueOpen}
        onClose={() => setQueueOpen(false)}
        queue={queue}
        onClear={() => setQueue([])}
        onRemove={(id) => setQueue((q) => q.filter((item) => item.id !== id))}
      />
      <EpisodeNotesPanel open={episodeNotesOpen} onClose={() => setEpisodeNotesOpen(false)} description={currentTrack?.description} />
      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
      <FullScreenPlayer open={fullScreenPlayerOpen} onClose={() => setFullScreenPlayerOpen(false)} currentTrack={currentTrack} />
    </div>
  );
}

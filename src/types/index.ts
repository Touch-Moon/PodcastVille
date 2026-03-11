export interface Podcast {
  id: string;
  title: string;
  author: string;
  artwork: string; // /images/artwork/filename.jpg
  category: string;
  isExplicit?: boolean;
  description?: string;
  episodeCount?: number;
}

export interface Episode {
  id: string;
  title: string;
  podcastTitle: string;
  podcastId: string;
  artwork: string; // /images/artwork/filename.jpg
  featureImage?: string; // /images/episodes/filename.png (hero banner)
  duration: string; // "45 min"
  publishedAt: string; // "Mar 8, 2025"
  description?: string;
  isNew?: boolean;
}

export interface FeaturedContent {
  id: string;
  type: 'new-season' | 'new-show' | 'featured';
  label: string; // "New Season" | "New Show"
  title: string;
  subtitle: string;
  featureImage: string; // /images/episodes/filename.png
  podcastId?: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  image: string; // /images/episodes/category.png
  color: string; // accent bg color
  href: string;
}

export interface ShelfSection {
  id: string;
  title: string;
  items: Podcast[];
}

export interface QueueItem {
  id: string;
  title: string;
  podcastTitle: string;
  artwork: string;
  duration: string;
  description?: string;
}

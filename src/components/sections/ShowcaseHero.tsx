import Image from 'next/image';
import Link from 'next/link';
import type { FeaturedContent } from '@/types';
import styles from './ShowcaseHero.module.scss';

interface Props {
  items: FeaturedContent[];
}

export default function ShowcaseHero({ items }: Props) {
  const visibleItems = items.slice(0, 3);

  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        {visibleItems.map((item, index) => (
          <Link
            key={item.id}
            href={`/podcast/${item.podcastId ?? item.id}`}
            className={`${styles.item} ${index === 2 ? styles.itemThird : ''}`}
          >
            {/* Text ABOVE image */}
            <div className={styles.description}>
              <div className={styles.badge}>{item.label}</div>
              <div className={styles.subtitle}>{item.subtitle ?? item.title}</div>
            </div>

            {/* 16:9 artwork BELOW text */}
            <div className={styles.artwork}>
              <Image
                src={item.featureImage}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
                priority={index < 2}
                sizes="(max-width: 767px) 100vw, (max-width: 1440px) 50vw, 33vw"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

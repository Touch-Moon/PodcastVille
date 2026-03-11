import type { Metadata } from 'next';
import './globals.scss';
import Sidebar from '@/components/layout/Sidebar';
import ClientLayout from '@/components/layout/ClientLayout';

export const metadata: Metadata = {
  title: 'PodcastVille — Discover Your Next Favorite Podcast',
  description: 'Portfolio project: Apple Podcasts web player clone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="app-container">
          <div id="sidebar-col">
            <Sidebar />
          </div>
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
      </body>
    </html>
  );
}

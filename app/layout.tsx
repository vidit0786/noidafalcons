import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://noidafalcons-two.vercel.app'),
  title: 'Noida Falcons | Rise Above The Rest',
  description: "The official home of Noida's premier cricket franchise. Explore squad, fixtures, news, sponsors, and club vision.",
  keywords: ['Noida Falcons', 'Cricket', 'Noida Cricket Franchise', 'IPL style team', 'Rise Above The Rest'],
  authors: [{ name: 'Noida Falcons' }],
  creator: 'Noida Falcons',
  openGraph: {
    title: 'Noida Falcons | Rise Above The Rest',
    description: "The official home of Noida's premier cricket franchise.",
    type: 'website',
    locale: 'en_IN',
    siteName: 'Noida Falcons',
    images: ['/images/noida-falcons-cover-team.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noida Falcons | Rise Above The Rest',
    description: "The official home of Noida's premier cricket franchise.",
    images: ['/images/noida-falcons-cover-team.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

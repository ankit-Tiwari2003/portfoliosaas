// portfolio-nextjs/app/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';

export const metadata: Metadata = {
  title: 'Portfolio Showcase - Create beautiful portfolios',
  description: 'Create and share your professional portfolio with the world.',
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
// portfolio-nextjs/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MantineUIProvider } from '@/components/providers/MantineProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Showcase',
  description: 'Create and share your professional portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineUIProvider>
          {children}
        </MantineUIProvider>
      </body>
    </html>
  );
}
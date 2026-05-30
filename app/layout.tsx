import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RED Construction & Remodeling LLC.',
  description: 'Professional services by RED Construction & Remodeling LLC.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

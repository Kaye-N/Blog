import './globals.css';
import { Inter } from 'next/fonts'; // Import the correct package

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Bonnified Reviews",
  description: "Created for Web Dev Class",
  icons: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      sizes: '32x32',
      type: 'image/x-icon',
    },
  ],
};
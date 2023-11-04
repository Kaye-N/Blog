import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'Homepage',
  description: 'Blog site for personal use',
  charset: "utf-8",
  name:"viewport", content:"width=device-width, initial-scale=1.0",
  authors: [{ name: 'Jamie', url: 'https://Bonniefied.com' }],
}

export async function generateMetadata({ params }) {
  return {
    title: '...',
  }
}


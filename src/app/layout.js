import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const Metadata = {
  title: 'Jamies Blog',
  description: 'Blog site for personal use',
  charset: "utf-8",
  name:"viewport", content:"width=device-width, initial-scale=1.0",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

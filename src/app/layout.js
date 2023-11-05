import './globals.css';
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

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

export default function RootLayout({ children }) {
  return (
    // 👇 Attach font to global JSX node
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
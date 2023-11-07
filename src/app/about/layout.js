import {Montserrat} from 'next/font/google'
import { Footer } from 'tamagui';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Bonnified Reviews",
  description: "Created for Web Dev Class",
};

export default function AboutLayout({ children }) {
  return (
    // 👇 Attach font to global JSX node
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '700',
  variable: '--montserrat-font',
  display: 'swap'
})

export const metadata = {
  title: "Bonnified Reviews",
  description: "Created for Web Dev Class",
};

export default function PhasmophobiaLayout({ children }) {
  return (
    // 👇 Attach font to global JSX node
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
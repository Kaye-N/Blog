import {Montserrat} from 'next/font/google'
import Navbar from './components/NavBar/NavBar'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Bonnified Reviews",
  description: "Created for Web Dev Class",
};

export default function RootLayout({ children }) {
  return (
    // 👇 Attach font to global JSX node
    <html lang="en" className={montserrat.className}>
      <body className={montserrat.className}>{children}
        <Navbar/>
      </body>
    </html>
  )
}
import Head from './Head'
import Footer from '../components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head> </Head>
      <body className='relative min-h-screen'>{children}
      <Footer />
      </body>
    </html>
  )
}

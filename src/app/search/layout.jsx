import SearchHeader from '../../components/SearchHeader'
import Head from './../Head'
import './../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SearchLayout({ children }) {
  return (
    <div>
      <Head> </Head>
      <div className={inter.className}><SearchHeader /> {children}</div>
    </div>
  )
}

import { Inter } from 'next/font/google'
import styles from '@dl/styles/Home.module.css'
import { Device } from '@dl/components/device/Device'
import { Navbar } from '@dl/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className} container-lg`}>
      <div className='pt-3'>
        <Navbar />
      </div>
      <div className='pt-5'>
        <Device />
      </div>
    </main>
  )
}

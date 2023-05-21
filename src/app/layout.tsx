import NavBar from './components/navBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tridigit',
  description: 'Learn Investments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <NavBar />
        <div className='bg-white'>
          {children}
        </div>
        </body> 
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainNav from './ui/dashboard/main-nav'
import SideNav from './ui/sidenav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Student Management System',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='relative'>
          <MainNav />
          <div className='absolute z-50'>
            <SideNav />

          </div>
          {children}

        </div>
      </body>
    </html>
  )
}

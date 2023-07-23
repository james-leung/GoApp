import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/NavBar'
import MyProfilePic from './components/MyProfilePic'

export const metadata: Metadata = {
  title: "James's Blog",
  description: 'Created by James Leung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
        </body>
    </html>
  )
}

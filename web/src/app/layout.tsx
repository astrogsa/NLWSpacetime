import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree'})

export const metadata: Metadata = {
  title: 'NLW Spacetime',
  description: 'Uma capsula do tempo construida com Typescript, React, Next.JS, TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isAuthenticated = cookies().has('token')

  
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} bg-gray-900  font-sans text-gray-100`}>

        <main className="grid grid-cols-2 min-h-screen">
          {/*   LEFT   */}
          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
            {/*  BLUR  */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>

            {/* STRIPES */}
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

            {/* SIGN IN */}
            {isAuthenticated ? < Profile /> : <SignIn />}

            {/* HERO */}
            <Hero />

            {/* COPYRIGHT */}
            <Copyright />
          </div>
          {/*   RIGHT   */}
          <div className="flex max-h-screen overflow-y-scroll flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
            
          </div>
        </main>
      </body>
    </html>
  )
}

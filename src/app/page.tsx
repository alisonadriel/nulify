import {Home as HomeScreen, Search, Disc} from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (
      <div className="h-screen flex flex-col">
        <div className="flex items flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center mb-6' >
          <Image src="/nulify-logo.png" width={45} height={40} alt="nulify-icon-logo"/>
          </div>
          <nav className="space-y-5">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-100">
              <HomeScreen/>
              Home
            </a>
            <a href=""className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-100">
            <Search/>
              Search
            </a>
            <a href=""className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-100">
              <Disc/>
              Libary
            </a>
          </nav>

          <nav className='mt-10 pt-10 border-t border-zinc-600'></nav>
        </aside>
        <main className="flex-1 p-6"></main>
        </div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
          footer
        </footer>
      </div>
  )
}
    

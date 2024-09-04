import {Home as HomeScreen, Search, Disc, Library} from 'lucide-react'
import Image from 'next/image';


export default function Home() {
  return (
      <div className="h-screen flex flex-col">
        <div className="flex items flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center mb-6' >
          <Image src="/nulify-logo.png" width={40} height={30} alt="nulify-icon-logo"/>
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

          <nav className='mt-10 pt-10  flex flex-col gap-2'>
             <div className='flex items-center gap-2'>
             <h1 className=' font-semibold flex gap-1 items-center text-[16px] text-zinc-300 mt-3'>
               <Library/> Playlists </h1>
             </div>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Self-Tilted</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Vessel</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Blurryface</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Trench</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Clancy</a>
          </nav>
        </aside>

        <h1 className='font-semibold text-3xl mt-10'>Home</h1>
        <main className="flex-1 p-6"></main>
        </div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
          footer
        </footer>
      </div>
  )
}
    

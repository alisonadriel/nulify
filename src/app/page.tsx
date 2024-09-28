import {Home as HomeScreen, Search, Disc, Library, ChevronLeft, ChevronRight} from 'lucide-react'
import Image from 'next/image';


export default function Home() {
  return (
      <div className="h-screen flex flex-col">
        <div className="flex items flex-1">
        <aside className="w-72 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-black to-black p-6">
          <div className='flex items-center mb-6' >
          <Image src="/nulify-logo.png" width={40} height={30} alt="nulify-icon-logo"/>
          </div>
          <nav className="space-y-5">
            <a href="" className="flex items-center gap-3 text-sm font-light text-zinc-200 hover:text-zinc-100">
              <HomeScreen/>
              Home
            </a>
            <a href=""className="flex items-center gap-3 text-sm font-light text-zinc-200 hover:text-zinc-100">
            <Search/>
              Search
            </a>
            <a href=""className="flex items-center gap-3 text-sm font-light text-zinc-200 hover:text-zinc-100">
              <Disc/>
              Libary
            </a>
          </nav>

          <nav className='mt-10 pt-10  flex flex-col gap-2'>
             <div className='flex items-center gap-2'>
             <h1 className=' font-light flex gap-1 items-center text-[16px] text-zinc-300 mt-3'>
               <Library/> Playlists </h1>
             </div>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Self-Tilted</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Vessel</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Blurryface</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Trench</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Clancy</a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
        <div className='flex items-center gap-3'>
          <button className='w-6 h-6 rounded-full bg-black/26'>
            <ChevronLeft/>
          </button>
          <button className='w-6 h-6 rounded-full bg-black/26'>
            <ChevronRight/>
          </button>
        </div>
        
        <h1 className='font-extralight text-3xl mt-5 mb-4'>Home</h1>

        <div className='grid grid-cols-3 gap-4'>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
          </a>
        </div>
        </main>
        </div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
          footer
        </footer>
      </div>
  )
}
    

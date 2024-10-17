import {Home as HomeScreen, Play, AudioLines, Search, Disc, Library, ChevronLeft, ChevronRight, Shuffle, SkipBack, SkipForward, Repeat, Repeat2} from 'lucide-react'
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
            <a href="" className=" flex items-center gap-3 text-sm font-light text-zinc hover:text-zinc-100">
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
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
          <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
            <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
          <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
          <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
          <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/10 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <strong>THE FIRST TIME</strong>
          <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
        </div>

        <h2 className='font-extralight text-2xl mt-5 mb-4'>You might like</h2>

        <div className='grid grid-cols-8 gap-4 mt-4'>
          <a href="" className='bg-white/5 p-3 rounded-md hover:bg-white/10'>
          <Image src="/fck-love.jpg" className='w-full' width={120} height={120} alt='Capa do álbum Trench da banda Twenty One Pilots' ></Image>
          <strong className='font-semibold flex flex-col gap-2 pt-1'>F*CK LOVE</strong>
          <span className='text-sm text-zinc-500'>The Kid LAROI</span>
          </a>
          <a href="" className='bg-white/5 p-3 rounded-md hover:bg-white/10'>
          <Image src="/fck-love.jpg" className='w-full' width={120} height={120} alt='Capa do álbum Trench da banda Twenty One Pilots' ></Image>
          <strong className='font-semibold flex flex-col gap-2 pt-1'>F*CK LOVE</strong>
          <span className='text-sm text-zinc-500'>The Kid LAROI</span>
          </a>
          <a href="" className='bg-white/5 p-3 rounded-md hover:bg-white/10'>
          <Image src="/fck-love.jpg" className='w-full' width={120} height={120} alt='Capa do álbum Trench da banda Twenty One Pilots' ></Image>
          <strong className='font-semibold flex flex-col gap-2 pt-1'>F*CK LOVE</strong>
          <span className='text-sm text-zinc-500'>The Kid LAROI</span>
          </a>
          <a href="" className='bg-white/5 p-3 rounded-md hover:bg-white/10'>
          <Image src="/fck-love.jpg" className='w-full' width={120} height={120} alt='Capa do álbum Trench da banda Twenty One Pilots' ></Image>
          <strong className='font-semibold flex flex-col gap-2 pt-1'>F*CK LOVE</strong>
          <span className='text-sm text-zinc-500'>The Kid LAROI</span>
          </a>
        </div>
        </main>
        </div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
          <div className='flex items-center gap-4'>
          <Image src="/tkl.jpg" width={52} height={52} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <div className='flex flex-col gap-1'>
          <strong className='font-semibold'>BABY I'M BACK</strong>
          <span className='text-sm text-zinc-400'>The Kid LAROI</span>
          </div>
          </div>
           <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-4'>
              <Shuffle size={16}  className='text-zinc-200'/>
              <ChevronLeft size={16} className='text-zinc-200'/>
              <button className='w-10 h-10 flex items-center justify-center text-yellow-nulify'>
              <Play fill='#fde559' size={20}/>
            </button>
            <ChevronRight size={16} className='text-zinc-200'/>
            <Repeat2 size={16} className='text-zinc-200'/>
            </div>
             <div className='flex items-center gap-2'>
             <span className='text-xs text-zinc-400'>1:50</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-yellow-nulify w-48 h-1 rounded-full'></div>
              </div>
             <span className='text-xs text-zinc-400'>4:22</span>
             </div>
          </div>
          <div>
            
          </div>
        </footer>
      </div>
  )
}
    

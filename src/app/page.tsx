import {Home as HomeScreen, Play, AudioLines, Search, Disc, Library, ChevronLeft, ChevronRight, Shuffle, SkipBack, SkipForward, Repeat, Repeat2, MonitorSmartphone, Volume2} from 'lucide-react'
import Image from 'next/image';
import { SideBar } from '@/components/SideBar';
import { Footer } from '@/components/Footer';
import { Recomendation } from '@/components/Recomendation';


export default function Home() {
  return (
      <div className="h-screen flex flex-col">
        <div className="flex items flex-1">
        <SideBar/>
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
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/5 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <div className='flex flex-col'>
            <strong>THE FIRST TIME</strong>
            <span className='text-sm text-zinc-500'>The Kid LAROI</span>
          </div>
          <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/5 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <div className='flex flex-col'>
            <strong>THE FIRST TIME</strong>
            <span className='text-sm text-zinc-500'>The Kid LAROI</span>
          </div>
            <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/5 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <div className='flex flex-col'>
            <strong>THE FIRST TIME</strong>
            <span className='text-sm text-zinc-500'>The Kid LAROI</span>
          </div>
          <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/5 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <div className='flex flex-col'>
            <strong>THE FIRST TIME</strong>
            <span className='text-sm text-zinc-500'>The Kid LAROI</span>
          </div>
          <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/5 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <div className='flex flex-col'>
            <strong>THE FIRST TIME</strong>
            <span className='text-sm text-zinc-500'>The Kid LAROI</span>
          </div>
          <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
          <a href='https://open.spotify.com/album/30H0cGghxhBJ93v4h28XEt?si=IQqkahZ3S6CwGGiICpprsg' target='blank' className='bg-white/5 group rounded font-normal flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/tkl.jpg" width={104} height={104} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <div className='flex flex-col'>
            <strong>THE FIRST TIME</strong>
            <span className='text-sm text-zinc-500'>The Kid LAROI</span>
          </div>
          <button className='p-2 text-yellow-nulify ml-auto mr-8 invisible group-hover:visible'>
              <AudioLines/>
            </button>
          </a>
        </div>

        <h2 className='font-extralight text-2xl mt-5 mb-4'>You might like</h2>
        <Recomendation/>
        </main>
        </div>
        <Footer/>
      </div>
  )
}
    

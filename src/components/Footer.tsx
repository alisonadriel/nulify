import Image from "next/image";
import { Shuffle, ChevronLeft, ChevronRight, MonitorSmartphone, Volume2, Play, Repeat2} from "lucide-react"

export function Footer(){
  return(
    <footer className="bg-zinc-950 border-t border-zinc-900 p-6 flex items-center justify-between">
          <div className='flex items-center gap-4'>
          <Image src="/tkl.jpg" width={52} height={52} alt='Capa do álbum THE FRIST TIME do cantor The Kid Laroi' ></Image>
          <div className='flex flex-col gap-1'>
          <strong className='font-semibold'>BABY I'M BACK</strong>
          <span className='text-sm text-zinc-400'>The Kid LAROI</span>
          </div>
          </div>
           <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-4'>
              <Shuffle size={14}  className='text-zinc-200'/>
              <ChevronLeft size={16} className='text-zinc-200'/>
              <button className='w-10 h-10 flex items-center justify-center text-yellow-nulify'>
              <Play fill='#fde559' size={16}/>
            </button>
            <ChevronRight size={16} className='text-zinc-200'/>
            <Repeat2 size={16} className='text-zinc-200'/>
            </div>
             <div className='flex items-center gap-2'>
             <span className='text-xs text-zinc-400'>1:50</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-yellow-nulify w-44 h-1 rounded-full'></div>
              </div>
             <span className='text-xs text-zinc-400'>4:22</span>
             </div>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <MonitorSmartphone size={16}/>
              <div className='flex items-center gap-2'>
              <Volume2 size={16}/>
              <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-yellow-nulify w-16 h-1 rounded-full'></div>
              </div>
              </div>
            </div>
          </div>
        </footer>
  )
}
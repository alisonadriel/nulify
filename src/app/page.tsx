import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SideBar } from '@/components/SideBar';
import { Footer } from '@/components/Footer';
import { Recomendation } from '@/components/Recomendation';
import { HomeSongs } from '@/components/HomeSongs';


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
        <HomeSongs/>
        <h2 className='font-extralight text-2xl mt-5 mb-4'>You might like</h2>
        <Recomendation/>
        </main>
        </div>
        <Footer/>
      </div>
  )
}
    

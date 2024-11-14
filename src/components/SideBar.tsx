import Image from "next/image";
import { Home as HomeScreen, Search, Disc, Library, Menu } from "lucide-react"
import { MenuNav } from "./MenuNav";

export function SideBar(){

  return(
    <aside className="w-72 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-black to-black p-6">
    <div className='flex items-center mb-6' >
    <Image src="/nulify-logo.png" width={40} height={30} alt="nulify-icon-logo"/>
    </div>
    <MenuNav/>
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
  )
}
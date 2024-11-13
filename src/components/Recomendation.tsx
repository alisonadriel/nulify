import Image from "next/image";

export function Recomendation(){
  
return(
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
)
}
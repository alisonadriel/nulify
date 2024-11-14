import { Home as HomeScreen, Search, Disc} from "lucide-react";

export function MenuNav() {
  return(
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
  )
}
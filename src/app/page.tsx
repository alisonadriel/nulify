export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950">
          sidebar
        </aside>
        <main className="flex-1">main</main>
        </div>
        <footer className="bg-zinc-800 border-t border-zinc-700">
          footer
        </footer>
      </div>
    </main>
  )
}
    

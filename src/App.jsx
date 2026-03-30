export default function App() {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 italic uppercase tracking-tighter">
        Day 1: Level Up
      </h1>
      <p className="mt-4 text-slate-500 font-mono">
        Tailwind CSS v4 is officially running in my React project.
      </p>
      <div className="mt-8 px-6 py-2 bg-white text-black font-bold rounded-full hover:scale-110 transition-transform cursor-pointer">
        Let's Start the Challenge
      </div>
    </div>
  )
}

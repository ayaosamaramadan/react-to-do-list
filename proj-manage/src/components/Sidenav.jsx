
function Sidenav() {
  return (
    <aside className="text-stone-50 w-[33.33%] px-8 bg-zinc-800 py-16 md:w-72 rounded-r-xl font-serif">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">Your Projects</h2>
      <div>
        <button className="text-rose-600 hover:bg-stone-600 hover:text-stone-100 px-4 py-2 text-xs md:text-base rounded-2xl border-rose-600 border-2">
          <span>+</span> Add Project
        </button>
      </div>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </aside>
  )
}

export default Sidenav
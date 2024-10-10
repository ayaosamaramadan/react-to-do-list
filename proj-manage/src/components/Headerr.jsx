import projImage from '../assets/3193260.png'
function Headerr() {
  return (
    <div className="mt-24 text-center w-[23.333%]">
      <img src={projImage} width={120} className='mx-auto object-contain' alt="project-image" />
      <h2 className='text-xl font-bold text-ston-500 my-4'>No Project Selected</h2>
      <p className='text-stone-400 mb-4'>
        Select a project from the sidebar to get started
      </p>

<button className='mt-8 text-rose-600 hover:bg-stone-600 hover:text-stone-100 px-4 py-2 text-xs md:text-base rounded-2xl border-rose-600 border-2'>
  Add Task
</button>
    </div>
  )
}

export default Headerr
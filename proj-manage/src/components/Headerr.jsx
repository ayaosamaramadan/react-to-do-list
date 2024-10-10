import projImage from '../assets/3193260.png'
import Button from './Button'
function Headerr() {
  return (
    <div className="mt-24 text-center w-[23.333%]">
      <img src={projImage} width={120} className='mx-auto object-contain' alt="project-image" />
      <h2 className='text-xl font-bold text-ston-500 my-4'>No Project Selected</h2>
      <p className='text-stone-400 mb-4'>
        Select a project from the sidebar to get started
      </p>

<Button>
  Add Task
</Button>
    </div>
  )
}

export default Headerr
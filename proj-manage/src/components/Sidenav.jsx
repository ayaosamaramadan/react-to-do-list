import Button from "./Button"
import Theproj from "./Theproj"

function Sidenav({clickk, data,setisprojOpen}) {
  return (
    <aside className="text-stone-50 w-[33.33%] px-8 bg-zinc-800 py-16 md:w-72 rounded-r-xl font-serif">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">Your Projects</h2>
      <div>
        <Button onclick={clickk}>
          <span>+</span> Add Project
        </Button>
      </div>
      <ul>
        {
          data.map((item,index)=>(
            <Theproj key={index} setisprojOpen={setisprojOpen} item={item}/>
          ))
        }
      </ul>
    </aside>
  )
}

export default Sidenav
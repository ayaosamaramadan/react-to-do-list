import { FaPlusCircle } from "react-icons/fa"
import Button from "./Button"
import Theproj from "./Theproj"

function Sidenav({activeproj,setnewproj,isprojOpen,clickk, data ,setisprojOpen , setactiveproj 
  
}) {
  

  return (
    <aside className="text-stone-50 h-[90vh] w-[33.33%] px-8 bg-zinc-800 py-16 md:w-72 rounded-r-xl font-serif">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">Your Projects</h2>
      <div>
        <Button onclick={clickk}>
          <span className="inline-flex items-center"><FaPlusCircle className="mr-2"/> Add Project</span>
        </Button>
      </div>
      <ul className="overflow-y-scroll max-h-[70%] h-[70%] max-w-[100%] mt-7">
        {
          data && data.map((item, index) => {
            return (
              <Theproj activeproj={activeproj} setnewproj={setnewproj} setactiveproj={setactiveproj} key={index} item={item} setisprojOpen={setisprojOpen} isprojOpen={isprojOpen} />
            )
          })
        }
      </ul>
    </aside>
  )
}

export default Sidenav
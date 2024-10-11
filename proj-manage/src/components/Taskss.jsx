import { useEffect, useState } from "react"
// import Activetask from "./Activetask";



function Taskss ({active ,id , setTask ,dataa ,setdataa ,task}) {



  function handleadd(active) {
  
    const newtask = {
      id: active,
      task: task,
    };
    setdataa([...dataa, newtask]);
    console.log(dataa);
  }

  

  return (
    <div>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} className="text-black"/>
      
      <button onClick={()=>handleadd(id)}>Add Task</button>
      <ul>
    {
      dataa.map((item,index)=>{
        if(item.id===id){
          return (
            <li key={index}>
              {item.task}
            </li>
          )
            
    }
      }
      )
    }
    
      </ul>


    </div>
  )
}

export default Taskss
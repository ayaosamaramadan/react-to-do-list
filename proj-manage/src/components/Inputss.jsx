const para=[
  'Title',
  'Description',
  'Due Date'
]
function Inputss() {
  return (
    // <p>
    //       <label>Title</label>
    //       <input type="text" />
    //     </p>
    //     <p>
    //       <label>Description</label>
    //       <textarea/>
    //     </p>
    //     <p>
    //       <label>Due Date</label>
    //       <input type="text" />
    //     </p>
    <>
      {para.map((item,index)=>(
        <p key={index} className="flex flex-col gap-1 my-4 ">
          <label className="text-sm font-bold uppercase text-stone-500">{item}</label>
          {item==='Description' ? <textarea className=" text-slate-600 focus:outline-none focus:border-stone-300 bg-stone-200 w-full p-1 border-b-2 rounded-sm border-stone-300"/> : <input type="text" className=" text-slate-600 focus:outline-none focus:border-stone-300 bg-stone-200 w-full p-1 border-b-2 rounded-sm border-stone-300"/>}
        </p>
      ))}
    </>
  )
}

export default Inputss
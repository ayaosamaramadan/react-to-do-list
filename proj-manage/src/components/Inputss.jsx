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
        <p key={index}>
          <label>{item}</label>
          {item==='Description' ? <textarea/> : <input type="text" />}
        </p>
      ))}
    </>
  )
}

export default Inputss
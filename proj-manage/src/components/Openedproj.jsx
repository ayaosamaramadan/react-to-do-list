import React from 'react'

function Openedproj( {data ,activeproj} ) {
  return (
    <>
    {
      data&&data.map((item,index)=>{
        if(item.Projid===activeproj){
          return (
            <div key={index} className="flex-1 bg-zinc-50 p-8 rounded-l-xl">
              <h2 className="text-stone-800 text-2xl font-bold">{item.title}</h2>
              <p className="text-stone-800">{item.descriptio}</p>
              <p className="text-stone-800">Due: {item.due}</p>
            </div>
          )
        }
      })


    }
    </>
  )
}

export default Openedproj
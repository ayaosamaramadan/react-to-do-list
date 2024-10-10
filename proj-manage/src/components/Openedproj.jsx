import React from 'react'

function Openedproj( {data} ) {
  return (
    <>
    {
      data.map((item, index) => (
        <div key={index} className="bg-stone-50 p-4 rounded-md">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="text-stone-800">{item.descriptio}</p>
          <p className="text-stone-800">Due: {item.due}</p>
        </div>
      ))
    }
    </>
  )
}

export default Openedproj
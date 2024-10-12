import React, { useState } from "react";

function Openedproj({ data, activeproj, setData }) {
  const [task, settask] = useState("");
  // const [activeclear, setactiveclear] = useState(null);

  let newdata = data;

  function handleDele(activeproj) {
    const newdata = data.filter((item) => item.Projid !== activeproj);
    setData(newdata);
  }

  function handleclear(taskIndex) {
    const newdata = data.map((item) => {
      if (item.Projid === activeproj) {
        return {
          ...item,
          tasks: item.tasks.filter((_, index) => index !== taskIndex),
        };
      }
      return item;
    });
    setData(newdata);
console.log(newdata);
  }
  
    

  function handletask() {
    const newdata = data.map((item) => {
      if (item.Projid === activeproj) {
        return {
          ...item,
          tasks: [...(item.tasks || []), task],
        };
      }
      return item;
    });
    setData(newdata);
    settask("");
  }
  return (
    <>
      {newdata &&
        newdata.map((item, index) => {
          if (item.Projid === activeproj) {
            return (
              <div
                key={index}
                className="flex-1 bg-zinc-100 p-8 rounded-xl max-w-[60%]"
              >
                <header>
                  <div className="flex gap-[30%] font-serif font-semibold">
                    <h1
                      className="text-[24px] py-0  px-7"
                      onClick={() => handleisOpen(item.Projid)}
                    >
                      {item.title}
                    </h1>
                    <button
                      className=" text-rose-600 border border-rose-600 px-4 rounded-full py-1 hover:bg-rose-600 hover:text-stone-50"
                      onClick={() => handleDele(activeproj)}
                    >
                      Delete
                    </button>
                  </div>
                  <p className="ml-5  px-2 font-serif text-slate-500">
                    {item.due}
                  </p>

                  <p className="px-2 mx-5 font-serif py-4">{item.descriptio}</p>
                  <hr />
                </header>
                <section>
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => settask(e.target.value)}
                    className=" w-60 py-1 px-2 m-5 ml-[25%] font-serif text-black border border-gray-300 rounded-lg bg-gray-50 "
                  />

                  <button
                    className=" bg-rose-600  font-serif py-[5px] px-3 text-white rounded-xl hover:border hover:border-rose-600 hover:bg-white hover:text-rose-600"
                    onClick={() => handletask()}
                  >
                    Add Task
                  </button>
                  
                    <ul className="border w-[90%]  px-3 py-6">
                    {item.tasks &&
                      item.tasks.map((task, taskIndex) => (
                        <>
                          <li
                            key={taskIndex}
                            className="mt-5 px-5 font-serif font-bold "
                          >
                            {task}
                            <button className=" text-stone-600 border border-stone-500 hover:border-rose-600 px-4 rounded-full hover:bg-rose-600 hover:text-stone-50 float-end py-" onClick={()=>handleclear(taskIndex)}>
                              Clear
                            </button>
                          </li>
                        </>
                      ))} 
                       {
                    !item.tasks&& 
                    <p className="font-serif font-bold text-stone-700 text-center">No tasks yet</p>
                  }
                  {
                    item.tasks&&item.tasks.length===0&& 
                    <p className="font-serif font-bold text-stone-700 text-center">No tasks yet</p>
                  }
                    {/* {tasks.length > 0 && (
                      <li className="mt-5 px-5 font-serif font-bold">
                        <button
                          className="text-rose-600 border border-rose-600 px-4 rounded-full hover:bg-rose-600 hover:text-stone-50"
                          onClick={handleClearTasks}
                        >
                          Clear All
                        </button>
                      </li>
                    )} */}
                  </ul>
                
                </section>
              </div>
            );
          }
        })}
    </>
  );
}

export default Openedproj;

import React, { useState } from "react";

function Openedproj({ data, activeproj, setData }) {
  const [task, settask] = useState("");
  
  let newdata = data;

  function handleDele(activeproj) {
    const newdata = data.filter((item) => item.Projid !== activeproj);
    setData(newdata);
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
                      className="text-[24px] py-5 px-2"
                      onClick={() => handleisOpen(item.Projid)}
                    >
                      {item.title}
                    </h1>
                    <button
                      className="text-rose-600 tet-bold"
                      onClick={() => handleDele(activeproj)}
                    >
                      Delete
                    </button>
                  </div>
                  <p className="px-2 font-serif text-slate-500">{item.due}</p>

                  <p className="px-2 font-serif py-4">{item.descriptio}</p>
                  <hr />
                </header>
                <section>
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => settask(e.target.value)}
                    className="text-black"
                  />

                  <button onClick={() => handletask()}>Add Task</button>
                  <ul>
                    {item.tasks &&
                      item.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="py-1">
                          {task}
                        </li>
                      ))}
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

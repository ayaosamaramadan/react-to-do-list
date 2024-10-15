
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { useAppContext } from "./AppContext";

function Openedproj() {

  const {
    handlecomp,
    data,
    handletask,
    task,
    settask,
    handleDele,
    activeproj,
    handleclear
  } = useAppContext();

  let newdata = data;

  return (
    <>
      {newdata &&
        newdata.map((item, index) => {
          if (item.Projid === activeproj) {
            return (
              <div
                key={index}
                className="dark:bg-gray-800 flex-1 bg-slate-100 shadow-lg p-8 rounded-xl max-w-[60%] mx-auto mt-0 font-serif "
              >
                <header>
                  <div className="flex justify-between items-center font-serif mb-4">
                    <h1
                      className="text-2xl py-0 px-7 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white"
                      onClick={() => handleisOpen(item.Projid)}
                    >
                      {item.title}
                    </h1>

                    <button
                      className="dark:bg-blue-700 dark:hover:bg-blue-800 text-rose-600 border dark:text-white dark:border-gray-900 border-rose-600  px-4 rounded-full py-1 hover:bg-rose-600 hover:text-white transition-colors duration-300"
                      onClick={() => handleDele(item.Projid)}
                    >
                      Delete
                    </button>
                  </div>
                  <p className="ml-5 px-2 font-serif text-slate-500 dark:text-slate-300">
                    {item.due}
                  </p>
                  <p className="px-2 mx-5 font-serif py-4 text-gray-700 dark:text-gray-300">
                    {item.descriptio}
                  </p>
                  <hr className="border-gray-300 dark:border-gray-600" />
                </header>
                <section>
                  <div className="flex items-center mb-4 mr-[20%]">
                    <input
                      type="text"
                      value={task}
                      onChange={(e) => settask(e.target.value)}
                      className="flex-grow py-2 px-4 m-5 ml-[30%] font-serif text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    />
                    <button
                      className="dark:bg-blue-700 dark:hover:bg-blue-800 bg-rose-600 font-serif py-2 px-4 text-white rounded-xl hover:border hover:border-rose-600 hover:bg-white hover:text-rose-600 transition-colors duration-300 dark:text-white dark:border-gray-900"
                      onClick={handletask}
                    >
                      Add Task
                    </button>
                    <button
                      className="ml-2 dark:bg-red-700 dark:hover:bg-red-800 bg-red-600 font-serif py-2 px-4 text-white rounded-xl hover:border hover:border-red-600 hover:bg-white hover:text-red-600 transition-colors duration-300 dark:text-white dark:border-gray-900"
                      onClick={handleclear}
                    >
                      Clear
                    </button>
                  </div>
                  <ul className="border w-[90%] px-3 py-6 mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner">
                    {item.tasks &&
                      item.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="mt-5 px-5 font-serif font-bold flex justify-between items-center text-gray-700 dark:text-gray-300"
                        >
                          <span>{task.text}</span>
                          <button
                            className={`float-end ${
                              task.isComplete
                                ? "text-green-400 dark:text-green-500 hover:text-gray-400 dark:hover:text-gray-600"
                                : "text-gray-400 dark:text-gray-600 hover:text-green-400 dark:hover:text-green-500"
                            } transition-colors duration-300`}
                            onClick={() => handlecomp(taskIndex)}
                          >
                            {task.isComplete ? (
                              <FaRegCheckCircle className="mt-1" />
                            ) : (
                              <FaRegCircle className="mt-1" />
                            )}
                          </button>
                        </li>
                      ))}

                    {!item.tasks && (
                      <p className="font-serif font-bold text-stone-700 dark:text-gray-300 text-center">
                        No tasks yet
                      </p>
                    )}
                    {item.tasks && item.tasks.length === 0 && (
                      <p className="font-serif font-bold text-stone-700 dark:text-gray-300 text-center">
                        No tasks yet
                      </p>
                    )}
                  </ul>
                </section>
              </div>
            );
          }
          return null;
        })}
    </>
  );
}

export default Openedproj;

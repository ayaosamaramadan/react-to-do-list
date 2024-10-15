import { useAppContext } from "./AppContext";

const para = ["Title", "Description", "Due Date"];

function Inputss() {
  const{descriptioerror,
    titleerror,
    title,
    settitle,
    descriptio,
    setdescription,
    due,
    setdue
  }=useAppContext();

  return (
    <>
      {para.map((item, index) => (
        <p key={index} className="flex flex-col gap-1 my-4 ">
          <label className="text-sm font-bold uppercase text-stone-500 dark:text-stone-300">
            {item}
          </label>
          {item === "Description" ? (
            <textarea
              value={descriptio}
              className={` dark:bg-stone-800 dark:text-stone-200 text-slate-600 focus:outline-none focus:border-stone-300 bg-stone-200 w-full p-1 border-b-2  rounded-sm ${
                descriptioerror ? "border-red-300 dark:border-red-900":"border-stone-300 dark:dark:border-neutral-600"
              } `}
              onChange={(e) => setdescription(e.target.value)}
            />
          ) : item === "Title" ? (
            <input
              type="text"
              value={title}
              className={`dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200 text-slate-600 focus:outline-none focus:border-stone-300 bg-stone-200 w-full p-1 border-b-2 rounded-sm ${
                titleerror ? "border-red-300 dark:border-red-900":"border-stone-300 dark:dark:border-neutral-600"
              }`}
              onChange={(e) => settitle(e.target.value)}
            />
          ) : (
            <input
              type="date"
              value={due}
              className="p-2 border border-stone-300 dark:border-stone-600 rounded-md bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200"
              onChange={(e) => setdue(e.target.value)}
            />
          )}
        </p>
      ))}
    </>
  );
}

export default Inputss;

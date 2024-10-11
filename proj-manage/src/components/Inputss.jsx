const para = ["Title", "Description", "Due Date"];

function Inputss({
  descriptioerror,
  titleerror,
  title,
  settitle,
  descriptio,
  setdescription,
  due,
  setdue,
}) {
  return (
    <>
      {para.map((item, index) => (
        <p key={index} className="flex flex-col gap-1 my-4 ">
          <label className="text-sm font-bold uppercase text-stone-500">
            {item}
          </label>
          {item === "Description" ? (
            <textarea
              value={descriptio}
              className={`text-slate-600 focus:outline-none focus:border-stone-300 bg-stone-200 w-full p-1 border-b-2 rounded-sm ${
                descriptioerror ? "border-red-300":"border-stone-300"
              } `}
              onChange={(e) => setdescription(e.target.value)}
            />
          ) : item === "Title" ? (
            <input
              type="text"
              value={title}
              className={`text-slate-600 focus:outline-none focus:border-stone-300 bg-stone-200 w-full p-1 border-b-2 rounded-sm ${
                titleerror ? "border-red-300":"border-stone-300"
              }`}
              onChange={(e) => settitle(e.target.value)}
            />
          ) : (
            <input
              type="date"
              value={due}
              className=" text-slate-600 focus:outline-none focus:border-stone-300 bg-stone-200 w-full p-1 border-b-2 rounded-sm border-stone-300"
              onChange={(e) => setdue(e.target.value)}
            />
          )}
        </p>
      ))}
    </>
  );
}

export default Inputss;

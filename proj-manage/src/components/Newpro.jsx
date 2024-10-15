import Inputss from "./Inputss";
import Erro from "./erro";
import { useAppContext } from "./AppContext";

function Newpro() {
  const { titleerror, handleSave, handleCancel, descriptioerror } =
    useAppContext();

  return (
    <div className="dark:bg-gray-800 bg-white mt-10 w-[35rem] ml-40 shadow-2xl p-6 rounded">
      <menu className="flex items-center justify-end gap-4 my-2">
        <li>
          <button
            className="text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-stone-50"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-rose-600 dark:hover:bg-stone-700 text-stone-50 dark:text-stone-200 hover:bg-stone-950 dark:bg-sky-600 px-6 rounded-md py-1"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>

      <div>
        <Inputss />
      </div>

      {(titleerror || descriptioerror) && <Erro />}
    </div>
  );
}

export default Newpro;

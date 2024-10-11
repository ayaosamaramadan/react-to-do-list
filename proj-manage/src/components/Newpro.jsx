import { useState } from "react";
import Inputss from "./Inputss";
import Erro from "./erro";

function Newpro({ data, setData }) {
  const [title, settitle] = useState("");
  const [descriptio, setdescription] = useState("");
  const [due, setdue] = useState(new Date().toISOString().split("T")[0]);
  const [titleerror, settitError] = useState(false);

  const [descriptioerror, setdesError] = useState(false);

  function handleSave() {

    const trimmedTitle = title.trim();
    const trimmedDescriptio = descriptio.trim();

    const isTitleEmpty = trimmedTitle === "";
    const isDescriptioEmpty = trimmedDescriptio === "";

    settitError(isTitleEmpty);
    setdesError(isDescriptioEmpty);

    if (!isTitleEmpty && !isDescriptioEmpty) {
      setData([
        {
          title: trimmedTitle,
          descriptio: trimmedDescriptio,
          due,
          Projid: data.length,
        },
        ...data,
      ]);
      console.log(data);
    }
  }

  function handleCancel() {
    settitle("");
    setdescription("");
    setdue(new Date().toISOString().split("T")[0]);
  }

  return (
    <div className="mt-16 w-[35rem]">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 rounded-md py-1"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      
      <div>
        <Inputss titleerror={titleerror}
          descriptioerror={descriptioerror}
          title={title}
          settitle={settitle}
          descriptio={descriptio}
          setdescription={setdescription}
          due={due}
          setdue={setdue}/>
      </div>

      {(titleerror || descriptioerror) && <Erro t={title} d={descriptio} />}
    </div>
  );
}

export default Newpro;

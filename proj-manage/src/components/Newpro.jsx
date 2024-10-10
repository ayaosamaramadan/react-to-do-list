
import { useState } from "react";
import Inputss from "./Inputss";


function Newpro({data,setData}) {
  const [title,settitle]=useState('');
  const [descriptio,setdescription]=useState('');
  const [due,setdue]= useState( new Date().toISOString().split('T')[0]);


  function handleSave(e) {
    e.preventDefault();
    setData([...data, { title, descriptio, due }]);
    console.log(data);
  }

  function handleCancel() {
    setTitle('');
    setDescriptio('');
    setDue(new Date().toISOString().split('T')[0]);
  }

  return (
    <div className="mt-16 w-[35rem]">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={handleCancel}> Cancel</button>
        </li>
        <li>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 rounded-md py-1" onClick={handleSave}>Save</button>
        </li>
      </menu>

<div>
  <Inputss 
  title={title}
  settitle={settitle}
  descriptio={descriptio}
  setdescription={setdescription}
  due={due}
  setdue={setdue}
  />
</div>
    </div>
  );
}
      
export default Newpro;

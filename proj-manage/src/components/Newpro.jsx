import Inputss from "./Inputss";

function Newpro() {
  return (
    <div className="mt-16 w-[35rem]">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950"> Cancel</button>
        </li>
        <li>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 rounded-md py-1">Save</button>
        </li>
      </menu>

<div>
  <Inputss/>
</div>
    </div>
  );
}
      
export default Newpro;

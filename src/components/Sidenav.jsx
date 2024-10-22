import { FaPlusCircle } from "react-icons/fa";
import Button from "./Button";
import Theproj from "./Theproj";
import { useAppContext } from "./AppContext";

function Sidenav() {
  const { newprojHandler, data } = useAppContext();

  return (
    <aside className="text-stone-50 dark:text-stone-200 h-[90vh] w-[33.33%] px-8 bg-zinc-800 dark:bg-zinc-900 py-16 md:w-72 rounded-r-xl font-serif">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">
        Your Projects
      </h2>
      <div>
        <Button onclick={newprojHandler}>
          <span className="inline-flex items-center text-stone-50 dark:text-stone-200">
            <FaPlusCircle className="mr-2" /> Add Project
          </span>
        </Button>
      </div>
      <ul className="overflow-y-scroll max-h-[70%] h-[70%] max-w-[100%] mt-7">
        {data &&
          data.map((item, index) => {
            return <Theproj key={index} item={item} />;
          })}
      </ul>
    </aside>
  );
}

export default Sidenav;

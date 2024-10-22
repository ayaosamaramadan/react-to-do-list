import LightImage from "../assets/3193260.png";
import DarkImage from "../assets/228370.png";
import { useAppContext } from "./AppContext";
import Button from "./Button";
function Headerr() {

  const {newprojHandler ,darkMode} = useAppContext();
  return (
    <div className="dark:bg-gray-800 mt-44 text-center w-[67.333%]">
      {!darkMode&&<img
        src={LightImage}
        width={120}
        className="mx-auto object-contain"
        alt="project-image"
      />}
      {darkMode&&<img
        src={DarkImage}
        width={120}
        className="mx-auto object-contain"
        alt="project-image"
      />}
      <h2 className="dark:text-stone-300 text-xl font-bold text-ston-500 my-4">
        No Project Selected
      </h2>
      <p className="dark:text-stone-200 text-stone-400 mb-4">
        Select a project from the sidebar to get started
      </p>

      <Button onclick={newprojHandler}>Add Task</Button>
    </div>
  );
}

export default Headerr;

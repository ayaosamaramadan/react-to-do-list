// import { useEffect } from "react";
import Headerr from "./components/Headerr";
import Newpro from "./components/Newpro";
import Sidenav from "./components/Sidenav";
import Openedproj from "./components/Openedproj";
import { TbMoonFilled } from "react-icons/tb";
import { IoSunnySharp } from "react-icons/io5";
import { useAppContext } from "./components/AppContext";

function App() {
  const { newproj, isprojOpen, darkMode, toggleDarkMode, newprojHandler } =
    useAppContext();

  return (
    <>
      <main className="gap-8 flex my-8">
        <Sidenav />
        {newproj && <Newpro />}
        {!newproj && !isprojOpen && <Headerr clickk={newprojHandler} />}
        {!newproj && isprojOpen && <Openedproj />}
      </main>
      <footer>
        {!darkMode ? (
          <button
            onClick={toggleDarkMode}
            className="float-end mt-[-6%] mr-10 bg-gray-800 text-white px-4 py-4 rounded-full"
          >
            <TbMoonFilled />
          </button>
        ) : (
          <button
            onClick={toggleDarkMode}
            className="float-end mt-[-6%] mr-10 bg-blue-700 text-gray-800 px-4 py-4 rounded-full"
          >
            <IoSunnySharp className="text-white " />
          </button>
        )}
      </footer>
    </>
  );
}

export default App;

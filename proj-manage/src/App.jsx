import { useEffect, useState } from "react";
import Headerr from "./components/Headerr";
import Newpro from "./components/Newpro";
import Sidenav from "./components/Sidenav";
import Openedproj from "./components/Openedproj";
import { TbMoonFilled } from "react-icons/tb";
import { IoSunnySharp } from "react-icons/io5";

function App() {
  const [newproj, setnewproj] = useState(false);
  const [data, setData] = useState([]);
  const [isprojOpen, setisprojOpen] = useState(false);
  const [activeproj, setactiveproj] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  function newprojHandler() {
    setnewproj(true);
    setisprojOpen(false);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <main className="gap-8 flex my-8">
        <Sidenav
          activeproj={activeproj}
          setnewproj={setnewproj}
          setactiveproj={setactiveproj}
          isprojOpen={isprojOpen}
          setisprojOpen={setisprojOpen}
          data={data}
          clickk={newprojHandler}
        />
        {newproj && (
          <Newpro
            newproj={newproj}
            setnewproj={setnewproj}
            isprojOpen={isprojOpen}
            setisprojOpen={setisprojOpen}
            data={data}
            setData={setData}
          />
        )}
        {!newproj && !isprojOpen && <Headerr clickk={newprojHandler} />}
        {isprojOpen && (
          <Openedproj setData={setData} data={data} activeproj={activeproj} />
        )}
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
            className="float-end mt-[-6%] mr-10 bg-white text-gray-800 px-4 py-4 rounded-full"
          >
            <IoSunnySharp />
          </button>
        )}
      </footer>
    </>
  );
}

export default App;

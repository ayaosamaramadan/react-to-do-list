// import { useEffect, useState } from "react";
import Headerr from "./components/Headerr";
import Newpro from "./components/Newpro";
import Sidenav from "./components/Sidenav";
import Openedproj from "./components/Openedproj";
import { TbMoonFilled } from "react-icons/tb";
import { IoSunnySharp } from "react-icons/io5";
import { useAppContext } from "./components/AppContext";

function App() {
  const {
    data,
    setData,
    newproj,
    setnewproj,
    isprojOpen,
    setisprojOpen,
    activeproj,
    setactiveproj,
    darkMode,
    newprojHandler,
    toggleDarkMode,
  } = useAppContext();

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

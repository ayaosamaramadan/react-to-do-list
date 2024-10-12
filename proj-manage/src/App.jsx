import { useState } from "react";
import Headerr from "./components/Headerr";
import Newpro from "./components/Newpro";
import Sidenav from "./components/Sidenav";
import Openedproj from "./components/Openedproj";

function App() {
  const [newproj, setnewproj] = useState(false);
  const [data, setData] = useState([]);
  const [isprojOpen, setisprojOpen] = useState(false);
  const [activeproj, setactiveproj] = useState(null);

  function newprojHandler() 
  {
    setnewproj(true);
    setisprojOpen(false);
  }

  return (
    <main className="gap-8 flex h-screen my-8">
      <Sidenav
        setnewproj={setnewproj}
        setactiveproj={setactiveproj}
        isprojOpen={isprojOpen}
        setisprojOpen={setisprojOpen}
        data={data}
        clickk={newprojHandler}
      />
      {newproj && <Newpro data={data} setData={setData} />}
      {!newproj && !isprojOpen && <Headerr clickk={newprojHandler} />}
      {isprojOpen && <Openedproj setData={setData} data={data} activeproj={activeproj} />}{" "}
    </main>
  );
}

export default App;

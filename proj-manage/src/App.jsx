import { useState } from "react";
import Headerr from "./components/Headerr"
import Newpro from "./components/Newpro"
import Sidenav from "./components/Sidenav"
import Openedproj from "./components/Openedproj";


function App() {

  const[newproj, setnewproj] = useState(false);
  const [data, setData] = useState([
  ]);
  const [isprojOpen, setisprojOpen] = useState(false);
  const [projIndex, setprojIndex] = useState(0);
  function newprojHandler(){setnewproj(true);}
  return (
    <main className="gap-8 flex h-screen my-8">
      <Sidenav setisprojOpen={setisprojOpen} data={data} clickk={newprojHandler}/>
      {newproj&&<Newpro  data={data} setData={setData}/>}
      {!newproj&&<Headerr clickk={newprojHandler}/>}
      { isprojOpen && <Openedproj data={data} /> }
    </main>
  )
}

export default App

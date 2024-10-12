
function Theproj({item,setisprojOpen  , setnewproj,setactiveproj}) {
  function handleisOpen(Projid){
    console.log(Projid);
    console.log(item.Projid);
  {  item.Projid===Projid&&
    
      setisprojOpen(true);
      setactiveproj(Projid);
      setnewproj(false);
    
    }

  };
  return (
  <li className=' my-5 border-2 border-stone-600 max-w-[90%] py-2 px-2 rounded-xl hover:bg-stone-700' onClick={()=>handleisOpen(item.Projid)}>
    {item.title}
  </li>

  )
}

export default Theproj

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
  <li onClick={()=>handleisOpen(item.Projid)}>
    {item.title}
  </li>
  )
}

export default Theproj
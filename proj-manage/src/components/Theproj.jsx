
function Theproj({item,setisprojOpen}) {
  function handleisOpen(){
    setisprojOpen(true)
    
  };
  return (
  <li key={item} onClick={handleisOpen}>
    {item.title}
  </li>
  )
}

export default Theproj
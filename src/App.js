import { useState } from "react";
import First from "./First";
function App() {
  const [setValue,updateSetValue] = useState(true)
  const [setCount,updateSetCout] = useState(0)
  return (
    <>
      {setValue?<First currentNumber={setCount}/>:""}
      <h1>Props: {setCount}</h1>
      <button onClick={()=>updateSetCout(setCount+1)}>Click</button>
      <br></br>
      <div style={{marginTop: "20px"}}></div>
      <button onClick={()=>updateSetValue(true)}>True</button>
      <button onClick={()=>updateSetValue(false)}>false</button>
      
    </>
  );
}

export default App;

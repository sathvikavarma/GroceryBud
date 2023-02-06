import './App.css';
import React,{useState} from "react";


const handleSubmit=(Text, setText)=>{
  setText(Text)
  console.log(Text)
}
function App() {
  const {Text, setText}=useState("");
  return (
    <>
    <h1>Grocery Bud</h1>
    <div className='inputBox'>
    <input type="text" value={Text}></input>
    <button type="submit" onClick={() => handleSubmit(Text, setText)}>Submit</button>
    </div>
    
    <form>
      <h1>{Text}</h1>
    </form>
    </>
  );
}

export default App;

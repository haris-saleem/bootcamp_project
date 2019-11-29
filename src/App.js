import React, {useState} from 'react';
import './App.css';

const MyButton = (prop) => {

  const [state, setState] = useState("blue");

  const changeState = () => {
    if(state === "blue"){
      setState("red")
    }
      else{
        setState("blue");
      
    }
    
  }
return(

<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
  <button onClick = {changeState} className = {state}>{prop.children}</button>  
</div>

)
}

const App = () => {
  return (
    <div className= "App">
      <MyButton>Click me</MyButton>
    </div>
  );
}

export default App;

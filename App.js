import React from "react";
import  ReactDOM from 'react-dom';
import './App.css';
 const {useState} = React;
function App(){
  const[count,setCount] = useState(0);
  return(
    <div className="app">
      <h1 className={count>5 ? "beforeFive" :count<5 ? "afterFive":null}> {count}</h1>
      <div className="button">
        <button onClick={() =>setCount(count-1)}>-</button>
       
        <button onClick={() =>setCount(count+1)}>+</button>
    
      </div>
    </div>
  )
}
ReactDOM.render(<App/>,document.getElementById("root"));
export default App;
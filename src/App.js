import { useState } from 'react';
import './App.css';

function App() {
  const boxes = ["green", "red", "yellow", "blue"];
  const [ computerOrder, setComputerOrder ] = useState([]);
  const [ playerOrder, setPlayerOrder ] = useState([]);

  const handleBlink=(event)=>{
    event.target.style.opacity = 1;
    setTimeout(()=>{
      event.target.style.opacity = .5;
    }, 333)
  }

  const handleClickBox=(boxIndex, e)=>{
    handleBlink(e);
  }

  let boxesElArr = boxes.map((color, index)=>{
    return (
      <div 
        key={index}
        onClick={(e)=>handleClickBox(index, e)} 
        style={{ backgroundColor: color }} 
        className= {"box box-" + index}
      ></div>
    )
  })
  return (
    <div id="game-container">
      <div id="game-background">
        {/* game background */}
      </div>

      <div id="boxes-container">
        { boxesElArr }
      </div>

      <div id="logo-circle">
        <div id="logo-text">
          simon
        </div>
      </div>
        
    </div>
  );
}

export default App;

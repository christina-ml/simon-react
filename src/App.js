import { useState } from 'react';
import './App.css';

function App() {
  const boxes = ["green", "red", "yellow", "blue"];
  const [ computerOrder, setComputerOrder ] = useState([ 3 ]);
  // const [ playerOrder, setPlayerOrder ] = useState([]);

  const handleAddRandomBox=()=>{
    let randomIndex = Math.floor(Math.random()*4)
    let newComputerOrder = [ ...computerOrder, randomIndex ]
    setComputerOrder(newComputerOrder);
  }

  // // go through every box of computerOrder, and we want it to blink. We need to do a handleClick by just passing the index, but we can't do that right now.
  // const showComputerOrder=()=>{
  //   for (let box of computerOrder) {

  //   }
  // }

  // const handleBlink=(event)=>{
  //   event.target.style.opacity = 1;
  //   setTimeout(()=>{
  //     event.target.style.opacity = .5;
  //   }, 333)
  // }

  const handleClickBox=(boxIndex, e)=>{


    // handleBlink(e);
    // handleAddRandomBox();
  }

  let boxesElArr = boxes.map((color, index)=>{
    return (
      <div 
        key={index}
        onClick={(e)=>handleClickBox(index, e)} 
        style={{ backgroundColor: color }} 
        id={"box-"+index}
        className= {"box"}
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


// using spread operator
  // randomly generate an index that chooses a color. Number between 0 and 4
  // can also write like this: let newComputerOrder = [ ...computerOrder, Math.floor(Math.random()*4) ]
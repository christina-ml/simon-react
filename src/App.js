import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const boxes = ["green", "red", "yellow", "blue"];
  const [ computerOrder, setComputerOrder ] = useState([ 3, 0, 1, 2 ]);
  // const [ playerOrder, setPlayerOrder ] = useState([]);
  const [ selectedBox, setSelectedBox ] = useState(null);

  const handleAddRandomBox=()=>{
    let randomIndex = Math.floor(Math.random()*4)
    let newComputerOrder = [ ...computerOrder, randomIndex ]
    setComputerOrder(newComputerOrder);
  }

  const showComputerOrder=()=>{

    for (let i = 0; i < computerOrder.length; i++) {

      setTimeout(()=>{
        handleBlink(computerOrder[i]);
      }, 500*(i+1));

    }
  }


  useEffect(()=>{
    showComputerOrder();
  }, [])

  const handleBlink=(index)=>{
    setSelectedBox(index)
    setTimeout(()=>{
      setSelectedBox(null)
    }, 333)
  }

  const handleClickBox=(boxIndex, e)=>{
    // handleBlink(boxIndex);
  }

  // can control css dynamically using ternary, using `selectedBox` that we stored in state.
  let boxesElArr = boxes.map((color, index)=>{
    return (
      <div 
        key={index}
        onClick={(e)=>handleClickBox(index, e)} 
        style={{ backgroundColor: color, opacity: selectedBox === index ? 1 : 0.5}} 
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


  /* for showComputerOrder: */
   // // go through every box of computerOrder, and we want it to blink. We need to do a handleClick by just passing the index, but we can't do that right now.
  // there's no delay in the `for loop`, so it changes very quickly.
  // adding a for loop wiht a setTimeout. that's going to be for "when" they blink.
  // need spaces between each one, so multiply the timeout seconds by the (index + 1)
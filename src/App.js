import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const boxes = ["green", "red", "yellow", "blue"];
  const [ computerOrder, setComputerOrder ] = useState([ 3 ]);
  const [ playerOrder, setPlayerOrder ] = useState([]);
  const [ selectedBox, setSelectedBox ] = useState(null);
  const [ isGameOver, setIsGameOver ] = useState(false);

  const showPattern=(pattern)=>{
    for (let i = 0; i < pattern.length; i++) {
      setTimeout(()=>{
        handleBlink(pattern[i]);
      }, 500*(i+1));
    }
  }

  useEffect(()=>{
    showPattern(computerOrder);
  }, [])

  const handleBlink=(index)=>{
    setSelectedBox(index)
    setTimeout(()=>{
      setSelectedBox(null)
    }, 333)
  }
  
  const handleClickBox=(boxIndex)=>{
    handleBlink(boxIndex);

    let isCorrectOrder = true;
    let newPlayerOrder = [ ...playerOrder, boxIndex ];

    for (let i = 0; i < playerOrder.length; i++){
      if (newPlayerOrder[i] !== computerOrder[i]){
        isCorrectOrder = false;
      }
    }

    if (!isCorrectOrder){
      setIsGameOver(true);
      return;
    }
    
    if (newPlayerOrder.length === computerOrder.length){
      newPlayerOrder = [];
      let randomIndex = Math.floor(Math.random()*4)
      let newComputerOrder = [ ...computerOrder, randomIndex ]
      setComputerOrder(newComputerOrder);
      showPattern(newComputerOrder);
    }

    setPlayerOrder(newPlayerOrder)
    // handleBlink(boxIndex);
    // handleAddRandomBox();
  }

  // can control css dynamically using ternary, using `selectedBox` that we stored in state.
  let boxesElArr = boxes.map((color, index)=>{
    return (
      <div 
        key={index}
        onClick={()=>handleClickBox(index)} 
        style={{ backgroundColor: color, opacity: selectedBox === index ? 1 : 0.5}} 
        id={"box-"+index} // greg removed the id for his code
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
        { !isGameOver && boxesElArr }
        { isGameOver &&
          <h1>Game over!!</h1> 
        }
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


     /*
   handleClickBox:
    1. want to blink the box you click on. Are you following the computer? 
    [ 2, 3, 1, 0 ] // Computer
    [ 2, 3 ] // Player

    How do I verify that the player is correct?
    // iterate through our newPlayerOrder, for our newly selected box.
    */
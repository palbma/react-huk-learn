import './App.css'
import React, {useState} from 'react'

function coputeItitnialCounter(){
    console.log('coputeItitnialCounter')
    return Math.trunc(Math.random() * 20)
}

function App() {
    const [counter =0,setCounter] =  useState( () => { return coputeItitnialCounter()});



    function increment(){
        setCounter((prevCounter = 0) =>{
            return prevCounter + 1;
        })
    }
    function decrement(){
        setCounter(counter - 1)
    }
  return (
    <>

      <div>

      </div>
      <p className="read-the-docs">
          <h1>Counter {counter}</h1>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Delete</button>
      </p>
    </>
  )
}

export default App

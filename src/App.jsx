import './App.css'
import React, {useState} from 'react'

function coputeItitnialCounter(){
    console.log('coputeItitnialCounter')
    return Math.trunc(Math.random() * 20)
}

function App() {
    const [counter =0,setCounter] =  useState( () => { return coputeItitnialCounter()});

    const [state, setState] = useState({
        title: "Counter",
        date: new Date().toLocaleDateString("en-US"),
    })



    function increment(){
        setCounter((prevCounter = 0) =>{
            return prevCounter + 1;
        })
    }
    function decrement(){
        setCounter(counter - 1)
    }
    function updateTitle(){
        setState(prev =>
        {
            return {
                ...prev,
                title: 'dadadas',
            }
        })
    }
  return (
    <>

      <div>

      </div>
      <p className="read-the-docs">
          <h1>Counter {counter}</h1>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Delete</button>
           <pre>{JSON.stringify(state,null,2)}</pre>
          <button onClick={updateTitle}>Increment</button>
      </p>
    </>
  )
}

export default App

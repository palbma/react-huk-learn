import './App.css'
import React, {useState,useEffect,useRef} from 'react'



function App() {

    const [firstPlayerCount, setFirstPlayerCount] = useState(10);
    const [secondPlayerCount, setScondPlayerCount] = useState(10);

    const [count, setCount] = useState({
        c1:10,
        c2:20,
    });

  return (
    <>

      <div>
            <div className="App">
                <div>Player  {firstPlayerCount}</div>
                <button onClick={() => setFirstPlayerCount((actual) => actual +1)}>+1</button>
                <button onClick={() => setFirstPlayerCount((actual) => actual -1)}>-1</button>
                <div>Player  {secondPlayerCount}</div>
                <button onClick={() => setScondPlayerCount((actual) => actual +1)}>+2</button>
                <button onClick={() => setScondPlayerCount((actual) => actual -1)}>-2</button>
                <div>idiot {count.c1}</div>
                <button onClick={() => setCount((actual) => {
                       return{
                           ...actual, c1: actual.c1 +1,
                       }
                    }
                    )}>aqs</button>
                <div>
                    <div>
                        <button onClick={() => setScondPlayerCount(10)}>reset second</button>
                        <button onClick={() => setFirstPlayerCount(10)}>reset first</button>
                    </div>
                </div>
            </div>
      </div>

    </>
  )
}

export default App

import './App.css'
import { useState, useEffect, } from 'react'


function App() {
    const [type,setType] = useState('users');
    const[data,setData] = useState([]);

    // useEffect(() => {
    //   console.log('Type changed to:');
    // });
    // console.log('Render component');

    useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then(response => response.json())
      .then(json => setData(json))
    }, [type]);

    console.log('Render component');
  return (
    <>

      <div>
        
      </div>
      <p className="read-the-docs">
         <h1>Recource {type}</h1>
         <button onClick={() => setType('users')}>Users</button>
         <button onClick={() => setType('todos')}>ToDo</button>
         <button onClick={() => setType('posts')}>Posts</button>
         <pre>{JSON.stringify(data, null, 2)}</pre>
      </p>
    </>
  )
}

export default App

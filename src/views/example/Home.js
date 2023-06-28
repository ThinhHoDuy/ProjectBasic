import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  function handleReduce() {
      setCount(count => count - 1);
    }
  
    return (
        <div className='App' style={{padding: 30}}>
            <h1>{count}</h1>
            <button onClick={handleClick}>
                Increase
            </button>
            <button onClick={() => {
                handleReduce();
                handleReduce();
                handleReduce();
          
            }}>
                Reduce(-3)
            </button>
        </div>
    );
  } 
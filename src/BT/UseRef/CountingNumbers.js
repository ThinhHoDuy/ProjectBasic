import { useRef, useState, useEffect } from 'react'

function CountingNumbers() {
    const [count, SetCount] = useState(60)
    const timeId = useRef()
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    
    const handleStart = () => {
        if (timeId.current) { }
        else {
            timeId.current = setInterval(() => {
                SetCount(prevCount => prevCount - 1)
            }, 1000)
        }
    }

    const handleStop = () => {
        clearInterval(timeId.current)
        timeId.current = false

    }
    console.log(count, prevCount.current);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
    
}
export default CountingNumbers


import { useReducer } from 'react'

//1.initState
const initState = 0
//2.Actions
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'
//3.Reducer
const reducer = (state,action) => {
    switch (action.type) {
        case "UP_ACTION":
            return state + 1
        case "DOWN_ACTION":
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}
//4.Dispatch

function UpDown() {
    const[count, dispatch] = useReducer(reducer,initState)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: "UP_ACTION" })}>
                Up
            </button>
            <button onClick={() => dispatch({ type: "DOWN_ACTION"})}>
                Down
            </button>
        </div>
    )
}
export default UpDown
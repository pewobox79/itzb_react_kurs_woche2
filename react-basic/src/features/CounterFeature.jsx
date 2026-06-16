import { useState } from "react"

const CounterFeature =()=>{
    console.log("counter rendered")
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        setCount(prev => prev - 1)
    }
    
    return <>
    <h3>{count}</h3>
    <button onClick={increment}> + </button>
    <button onClick={decrement}> - </button>
    </>
}

export default CounterFeature
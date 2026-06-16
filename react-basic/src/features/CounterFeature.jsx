import { useState } from "react"

const CounterFeature =()=>{
    const [count, setCount] = useState(0)

    function increment(){
        setCount( prev => prev + 1 )
    }

    function decrement(){

        if(count === 0) return
        setCount(prev => prev - 1 )
    }

    
    return <>
    <h3>{count}</h3>
    <button onClick={increment}> + </button>
    <button onClick={decrement}> - </button>
    </>
}

export default CounterFeature
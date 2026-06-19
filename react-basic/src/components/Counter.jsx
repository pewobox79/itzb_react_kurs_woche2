import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(prev => prev + 1)
    }
    return <div>
        <h1>counter</h1>
        <p>Count: {count}</p>

        <button 
        onClick={increment}>Erhöhen</button>
    </div>
}

export default Counter
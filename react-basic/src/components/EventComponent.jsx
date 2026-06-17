import { useState } from "react"

const EventComponent =({changeColor, setChangeColor})=>{
    
    // Überschriftfarbe soll bei btnclick von rot auf blau wechseln

    const [hasChanged, setHasChanged] = useState(false) // => jetzt ist die komponente StateFull!
    function changeHPColor(){
        setChangeColor(!changeColor)
    }
    function handleBtnClick(){
        setHasChanged(!hasChanged)
        console.log("btn Clicked", hasChanged)
    }

    return <div>
        <h3 style={{ color: hasChanged ? "green" : "blue" }}>Überschrift Farbwechsel</h3>
        <button onClick={()=>handleBtnClick()}>Click</button>
        <button onClick={changeHPColor}>HP Color</button>
    </div>
}

export default EventComponent
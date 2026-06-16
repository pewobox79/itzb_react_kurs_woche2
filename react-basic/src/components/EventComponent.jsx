import { useState } from "react"

const EventComponent =()=>{
    // Überschriftfarbe soll bei btnclick von rot auf blau wechseln

    const [hasChanged, setHasChanged] = useState(false) // => jetzt ist die komponente StateFull!

    function handleBtnClick(){
        setHasChanged(!hasChanged)
        console.log("btn Clicked", hasChanged)
    }

    console.log("hasChangedValue", hasChanged)
    return <div>
        <h3 style={{ color: hasChanged ? "green" : "blue" }}>Überschrift Farbwechsel</h3>
        <button onClick={handleBtnClick}>Click</button>
    </div>
}

export default EventComponent
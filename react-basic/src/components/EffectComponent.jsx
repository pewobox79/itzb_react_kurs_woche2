import { useEffect, useState } from "react"
const EffectComponent = () => {

    //componentDidMount => componente ist aufgebaut
    //componentDidUpdate => componente ist aktualisert
    //componentUnmount => componente ist zurückgesetzt

    const [consent, setConsent] = useState(false)

    function handleConsent() {
        setConsent(!consent)
    }
    function createConsentElement(){
        const element = document.createElement("div")
        element.setAttribute("id", "consent")
        element.innerHTML = "<h3>Hallo effect element</h3>"
        document.body.append(element)
    }
    useEffect(() => {
        console.log("useEffect runs")
        // guard clause
        if(!consent) return

        // => erstellt/platziert nach componentDidMount ein element in DOM
        createConsentElement()

        //cleanup function
        return () => {
            console.log("cleanup runs")
            // => entfernt das element bei componentWillUpdate
            const elementToRemove = document.getElementById("consent")
            elementToRemove.remove()
        }
    }, [consent])

    console.log("consent ist: ", consent)
    return <>
        <h1>Effect Component</h1>
        <button onClick={handleConsent}>consent</button>
    </>
}

export default EffectComponent
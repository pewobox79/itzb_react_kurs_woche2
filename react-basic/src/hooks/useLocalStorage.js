import { useState } from "react"

export const useLocalStorage = (key, initValue) => {

    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : initValue
    })

    function setStoredValue(newValue) {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    function removeStoredValue() {
        setValue(initValue)
        localStorage.removeItem(key)
    }

    return [value, setStoredValue, removeStoredValue]
}
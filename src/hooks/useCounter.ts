import { useState } from "react"



export const useCounter = (initialValue: number = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const add = () => {

        setCounter(counter + 1)

    }
    const decrement = () => {

        setCounter(counter - 1)

    }

    const reset = () => {

        setCounter(initialValue)

    }



    return {
        counter,
        add,
        decrement,
        reset
    }
}
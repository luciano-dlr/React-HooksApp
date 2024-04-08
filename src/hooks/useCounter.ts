import { useState } from "react"



export const useCounter = (initialValue: number = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const add = (value = 1) => {

        setCounter(counter + value)

    }
    const decrement = (value = 1 ) => {
        if(counter <= 1 ) return
        setCounter(counter - value)

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
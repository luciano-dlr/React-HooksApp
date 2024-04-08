import React from 'react'
import { useCounter } from '../hooks/useCounter'


export const CounterCustomHook = () => {
    

    const {counter,add,decrement,reset} = useCounter(5)


  return (
    <>
    <h1>Counter with hook : {counter}</h1>
    <hr />
    <button className='btn btn-primary' onClick={() => add(5)}>+1</button>
    <button className='btn btn-primary' onClick={reset}>Reset</button>
    <button className='btn btn-primary' onClick={() => decrement(2)}>-1</button>
    </>
  )
}



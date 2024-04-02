import React from 'react'
import { useCounter } from '../hooks/useCounter'


export const CounterCustomHook = () => {
    

    const {counter,add,decrement,reset} = useCounter(7)


  return (
    <>
    <h1>Counter with hook : {counter}</h1>
    <hr />
    <button className='btn btn-primary' onClick={add}>+1</button>
    <button className='btn btn-primary' onClick={reset}>Reset</button>
    <button className='btn btn-primary' onClick={decrement}>-1</button>
    </>
  )
}



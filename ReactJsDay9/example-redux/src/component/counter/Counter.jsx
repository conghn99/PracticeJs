import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from '../../app/action/counterActions';

function Counter() {
    // Lay ra dc du lieu tu store va hien thi
    const counter = useSelector(state => state.counter.value)

    // Su dung de gui action len store de xu ly
    const dispatch = useDispatch();
    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleIncrement = () => {
        dispatch(increment())
    }
  return (
    <>
        <h1>Counter: {counter}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default Counter;

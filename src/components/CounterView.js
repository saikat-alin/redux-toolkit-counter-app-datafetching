import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, inc5, increment, reset } from '../reducer/CounterSlice';

const CounterView = () => {

    const count = useSelector((state) => state.counter.count)
     const dispatch = useDispatch();

    return (
        <div>
            <h1>Redux Toolkit Counter App</h1>
            <h2>Count : {count}</h2>

            <button onClick={() => {dispatch(increment())}}>Increment</button>
            <button onClick={() => {dispatch(decrement())}}>Decrement</button>
            <button onClick={() => {dispatch(reset())}}>Reset</button>
            <button onClick={() => {dispatch(inc5(5))}}>+5</button>
        </div>
    )
}
export default CounterView

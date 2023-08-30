
import React,{useState} from 'react'
import Child from './Child';

const Parent=()=>{
    const[count,setCount]=useState(0);

    const incrementCount=()=>{
        setCount(count+1)
    }
    return(
        <div>
            <h1>Parent Component</h1>
            <p>{count}</p>
            <Child count={count} onIncrement={incrementCount}/>
        </div>
    )
}
export default Parent


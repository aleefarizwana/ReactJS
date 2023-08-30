import React,{useState} from 'react'
import Father from './Father';

const Son =()=>{
    const[count,setCount]= useState(0);

    // const incrementCount=()=>{
    //     setCount(count+2);
    // }
    // const incCount=()=>{
    //     setCount(count+1);
    // }
    // const decCount=()=>{
    //     if(count>0)
    //     setCount(count-2);
    // }
    const incre=()=>{
        if (count<10)
        setCount(count+1);
        else if (count>=10 && count<20)
        setCount(count+2);
        else if (count>=20 && count<30)
        setCount(count+3);
        else if (count>=30 && count<40)
        setCount(count+4);
        else
           setCount(count+10)
    }

    return (
        <div><h1>Son Component </h1>
         <p> count of son is {count} </p>
         {/* <button onClick={incrementCount}>increment</button> */}

         {/* <button onClick={incCount}>increment</button>
         <button onClick={decCount}>decrement</button> */}
        

         <Father count={count}/>

         <button onClick={incre}>increment based on value</button>
         </div>
    )
}
export default Son


// Line 15:11:  'Child' is not defined     react/jsx-no-undef
//need to write Father

// Line 5:28:  'useState' is not defined  no-undef
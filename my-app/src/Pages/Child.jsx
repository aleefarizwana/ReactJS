import React from 'react'

const Child=({count,onIncrement})=>{
    return(
        <div>
            <h2>child Component</h2>
            <p>{count}</p>
            <button onClick={onIncrement}>Incement</button>
        </div>
    )
}
export default Child


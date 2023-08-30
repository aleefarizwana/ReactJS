import React from 'react'

const Pa2=({name2,Age2,onchangeProp})=>{
    return(
        <div>
            <h2>pa2 child Component</h2>
            <p>{name2}</p>
            <button onClick={onchangeProp}>name2</button>

            {/* <p>{Age2}</p>
            <button onClick={onchangeProp}>Age2</button>   displays a button Age2 in pa2 */}
        </div>
    )
}
export default Pa2

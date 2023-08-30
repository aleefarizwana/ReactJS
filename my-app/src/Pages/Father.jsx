import React from 'react'
import GrandFather from './GrandFather'

const Father = (props)=>{
    return (
        <div>
            <h2>Father Component</h2>
            {props.count}
            <GrandFather count ={props.count}/>
        </div>
    )
}

export default Father
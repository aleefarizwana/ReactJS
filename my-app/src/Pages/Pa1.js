// parent 1 
// changes value if child element changes the values...when we click on button

import React,{useState} from 'react'
import Pa2 from './pa2';
import Pa3 from './Pa3';

const Pa1=()=>{
    const[name2,setName]=useState("null");
   
    const[place3,setPlace]=useState("null");

    const changeN=()=>{
        setName("sita");
       
       
    }
   
    const changeP=()=>{
        setPlace("Kurnool");
        
    }
    return(
        <div>
            <h1>Pa1 Parent Component </h1>
            <p> name is {name2}</p>
            <Pa2 name={name2}  onchangeProp={changeN}/>
          
            <p>Place is {place3}</p>
            <Pa3 name={place3} onchangePro={changeP}/>
        </div>

    )
}

export default Pa1

// Line 7:26:  React Hook "useState" is called in function "pa1" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use"  react-hooks/rules-of-hooks

// function names and rr4turn statements must be in Upper case(Pa1,Pa2)..............................

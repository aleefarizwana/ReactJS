Map
==========
Map :
Instead of writing custom components again and again with different props. 
I will make an array that contains all props and use the map() function to map the array element with a custom component in a single component call.
  

A map is a data collection type where data is stored in the form of key-value pairs. 
The value stored in the map must be mapped to the key. The map is a JavaScript function that can be called on any array. 
With the map function, we map every element of the array to the custom components in a single line of code.
That means there is no need to call components and their props as array elements again and again.
example
  var array = [1,2,3,4,5]
var PlusOne= array.map((e)=>{
   return (e+1);
 });
 // All array element value will increase by one. 

example code and output
import React from 'react'

const Map=()=>{
//    const navItems=['Home','About','Services','Portfolio']
   const products=['soft drinks','furniture','toothpaste']
   const electronicItems=['computer','mobile','printer']
   return(
    <ul>
        {/* <li>Home</li>
        <li>About</li> */}

        {/* <ul>
            {navItems.map((item,index)=>(
                <li key={index}>{item}</li>
                // if no key ,dont know which is updated
            ))}
        </ul> */}
        
        <ol> Some products are
            {products.map((item,index)=>(
                <li key={index}>{item}</li>
                // if no key ,dont know which is updated
            ))}
        </ol>

    
        <ul>Electronic items are
            {electronicItems.map((item,index)=>(
                <li key={index}>{item}</li>
                // if no key ,dont know which is updated
            ))}
        </ul>
    </ul>
   )
}

export default Map

App.js
+++++++++++++++=+
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Map from './Pages/Map'


const App=()=>{
  return(
  <Router>
    <Routes>

      <Route path="/" element={<Map/>}/>
   
    </Routes>

  </Router>
  )
}

export default App;


//output
===============================
// Some products are
// 1.soft drinks
// 2.furniture
// 3.toothpaste
// Electronic items are
// .computer
// .mobile
// .printer

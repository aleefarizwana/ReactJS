//This file contains:
//1 default App.js code
//2 code to display the code i wrote in folders like about,pages etc., by importing them
//3 outputs for the examples i done......................


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// import Home from './Pages/Home'
// import About from './Pages/About'

// import Contact from './Pages/Contact'
// import Products from './Pages/Products'

// import Parent from './Pages/Parent'
// import Child from './Pages/Child'

// import Pa1 from './Pages/pa1'
// import pa2 from './Pages/pa2'
// import pa3 from './Pages/Pa3'

import Son from './Pages/Son'  //child most is enough
import GrandFather from './Pages/GrandFather'



const App=()=>{
  return(
  <Router>
    <Routes>
      {/* <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/> */}

      {/* <Route path="/" element={<Contact/>}/>
      <Route path="/" element={<Products/>}/> */}

      {/* <Route path="/" element={<Parent/>}/>
      <Route path="/Child" element={<Child/>}/> */}

     {/* <Route path="/" element={<Pa1/>}/>
       <Route path="/" element={<pa2/>}/>
      <Route path="/Pa3" element={<pa3/>}/> */}

      <Route path="/" element={<Son/>}/>
       <Route path="/" element={<GrandFather/>}/> {/* donot write these only child most is enough*/ } 
      {/* <Route path="/" element={<Father/>}/> */}
   
    </Routes>

  </Router>
  )
}

export default App;


// yarn add react-router-dom           When you get the error
//'can't resolve reac-router-dom' in path/src

//output 1
// Home1
// Home2
// Home3


//output 1
// Hello...Aleefa


//output 3
// Parent Component
// 6

// child Component
// 6

// Incement              is the button here

//output 4
// Pa1 Parent Component
// name is null

// pa2 child Component
// name2
// Place is null

// pa3 child Component
// place3

//when you click on buttons
// Pa1 Parent Component
// name is sita

// pa2 child Component
// name2
// Place is Kurnool

// pa3 child Component
// place3

//output5
//when code is 
// const incrementCount=()=>{
//   setCount(count+2);
// }

// Son Component
// count of son is 0

// increment
// Father Component
// 0
// GrandFather
// 0

// Son Component
// count of son is 12

// increment
// Father Component
// 12
// GrandFather
// 12


//output 6
//inc i when count<10 ,+2 count<20,+3 when count<30... 
// Son Component
// count of son is 14

// Father Component
// 14
// GrandFather
// 14

// increment based on value

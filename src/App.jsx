import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(5) 
  // let counter = 5 ;

  const addValue = () => {
    if(counter < 20){
      setcounter(counter+1)   
    }
    else{
      setcounter(20)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setcounter(counter-1)
    }
    else{
      setcounter(0)
    }
  } 


  return (
    <>
    <h1>Chai aur React</h1>             
    <h2> Counter Value : {counter}</h2>
    <button onClick={addValue} >Add Value {counter}</button>
    <br/>
    <button onClick={removeValue} >Remove Value {counter}</button>
    </>
  )
}

export default App

import React, { useState, useEffect } from "react"
import Sidebar from "./Components/Sidebar"
import Main from "./Components/Main"
import { bblSort } from "./Components/Algorithms/bubbleSort";

function generateArrays(size, max) {
  // generate array of elements between 10 to 100.
  const randomArray = [...new Array(size)].map(() => Math.round(Math.random() * max));
  // console.log(randomArray)
  return randomArray
}

function initialState(size, max) {
  let arr = generateArrays(size, max);
  let newArr = arr.map((element) => ({
    value: element,
    color: '#293451'
  }));
  return newArr
}

function App() {
  const [heading, setHeading1] = useState("bubble sort");
  const [count, setCount] = useState(10)
  const [state, setState] = useState([])
  const s = initialState(count, 99);
  useEffect(() => {
    setState(s)
  }, [count])


  return (
    <div className="App flex bg-stone-900">
      <Sidebar setHeading1={setHeading1} setCount={setCount} />
      <Main heading={heading} count={count} state={state} />
    </div>
  )
}

export default App

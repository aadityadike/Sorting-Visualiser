import React, { useState } from "react"
import Sidebar from "./Components/Sidebar"
import Main from "./Components/Main"

function generateArrays(size, max) {
  // generate array of elements between 10 to 100.
  return [...new Array(size)].map(() => Math.round(Math.random() * max));

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
  const [state, setState] = useState(initialState(count, 99))
  return (
    <div className="App flex bg-stone-900">
      <Sidebar setHeading1={setHeading1} setCount={setCount} setState={setState} />
      <Main heading={heading} count={count} state={state} />
    </div>
  )
}

export default App

import React, { useState, useEffect } from "react"
import Sidebar from "./Components/Sidebar"
import Logic from "./Components/Logic"
import { bblSort } from "./Components/Algorithms/bubbleSort";

// generate array of elements between 10 to 100.
function generateArrays(size, max) {
  const randomArray = [...new Array(size)].map(() => (Math.round(Math.random() * max)))
  // console.log(randomArray)
  return randomArray
}

function initialState(size, max) {
  let arr = generateArrays(size, max);
  let newArr = arr.map((element) => ({
    value: element,
    color: '#293451'
  }));
  // console.log(newArr)
  return newArr
}

function App() {
  const [heading, setHeading] = useState("bubble sort");
  const [count, setCount] = useState(10)
  const [state, setState] = useState([])
  const [algorithm, setAlgorithm] = useState()
  const [playing, setPlaying] = useState(false)
  const [index, setIndex] = useState(0)
  const [history, setHistory] = useState([])


  const store = initialState(count, 99);
  useEffect(() => {
    setState(store)
  }, [count])

  useEffect(() => {
    if (index > 0) setState(history[index])
  }, [index])


  useEffect(() => {
    console.log(history.length, index)
  }, [index, playing])

  return (
    <div className="App flex bg-stone-900">
      <Sidebar setHeading={setHeading} setCount={setCount} setAlgorithm={setAlgorithm} setPlaying={setPlaying} playing={playing} />
      <Logic heading={heading} count={count} state={state} algorithm={algorithm} />
    </div>
  )
}

export default App

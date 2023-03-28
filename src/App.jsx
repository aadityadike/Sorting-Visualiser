import React, { useState, useEffect, useRef } from "react"
import Sidebar from "./Components/Sidebar"
import Logic from "./Components/Logic"
import { bubbleSort } from "./Components/Algorithms/bubbleSort";
// import { SelectionSort } from "./Components/Algorithms/SelectionSort";
import { InsertionSort } from "./Components/Algorithms/InsertionSort";


// generate array of random elements between 10 to 100.
function generateArrays(size, max) {
  const randomArray = [...new Array(size)].map(() => (Math.round(Math.random() * max)))
  return randomArray
}

// Array containing objects
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
  const [speed, setSpeed] = useState(300)
  const timeOut = useRef()


  const handleClick = () => {
    switch (algorithm) {
      case "Insertion sort": {
        console.log("inside Insertion Sort")
        setHistory(InsertionSort(state))
        setPlaying(true)
        break;
      }
      case "Bubble sort": {
        console.log("inside Bubble Sort")
        setHistory(bubbleSort(state))
        setPlaying(true)
        break;
      }
      // case "Selection sort": {
      //   console.log("inside Selection Sort")
      //   setHistory(SelectionSort(state))
      //   setPlaying(true)
      //   break;
      // }
      default: {
        setHistory([InsertionSort(state)])
        setPlaying(false)
        break;
      }
    }
  }
  // when count changes the no. of bars will change.
  const store = initialState(count, 99);
  useEffect(() => {
    setState(store)
  }, [count])


  useEffect(() => {
    setIndex(0)
    setPlaying(false)
    clearTimeout(timeOut.current)
    setHistory([])
    setState(initialState(count, 99))
    setHistory([])
  }, [count])


  useEffect(() => {
    if (index > 0)
      setState(history[index])
  }, [index])


  useEffect(() => {
    if (playing && index < history.length - 1) {
      clearTimeout(timeOut.current)
      timeOut.current = setTimeout(() => {
        setIndex((index) => index + 1)
      }, speed)
    }
    else {
      if (index >= history.length)
        setPlaying(false)
    }
  }, [index, playing])


  return (
    <div className="App flex bg-stone-900">
      <Sidebar setHeading={setHeading} setCount={setCount} setAlgorithm={setAlgorithm} setPlaying={setPlaying} playing={playing} setHistory={setHistory} setSpeed={setSpeed} handleClick={handleClick} />
      <Logic heading={heading} count={count} state={state} algorithm={algorithm} />
    </div>
  )
}

export default App

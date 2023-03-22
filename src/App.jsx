import React, { useState } from "react"
import Sidebar from "./Components/Sidebar"
import Main from "./Components/Main"

function App() {
  const [heading, setHeading1] = useState("bubble sort");
  const [count, setCount] = useState(10)
  return (
    <div className="App flex">
      <Sidebar setHeading1={setHeading1} setCount={setCount} />
      <Main heading={heading} count={count} />
    </div>
  )
}

export default App

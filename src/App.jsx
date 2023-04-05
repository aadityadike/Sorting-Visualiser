import React, { useState, useEffect, useRef, useContext } from "react"
import Logic from "./Components/Logic"

import Sidebar from "./Components/Sidebar";
import { Sidebar_Context } from "./Sidebar_Context";

const App = () => {

  return (
    <Sidebar_Context>
      <div className="App flex bg-stone-900">
        <Sidebar />
        <Logic />
      </div>
    </Sidebar_Context>
  )
}

export default App

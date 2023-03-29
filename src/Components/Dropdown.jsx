import React, { useState } from 'react'

const Dropdown = ({ setHeading, setCount, setAlgorithm, setSpeed }) => {
    const [title, setTitle] = useState("Customization")

    return (
        <div className='text-black bg_gradient-1 translate-x-10 flex flex-col h-full w-96 py-10 px-10 fixed top-0 z-10' >
            <h1 className='text-xl font-bold mb-20'>{title}</h1>
            <div className='flex flex-col gap-10'>

                <button className='flex flex-col items-start cursor-pointer' onChange={(e) => {
                    setTitle("Algorithms")
                    setHeading(e.target.value)
                    setAlgorithm(e.target.value)
                }}>
                    <label>Algorithms</label>
                    <select name="Algorithms" id="algorithms" className='w-72 h-10 rounded-md p-1'>
                        <option value="Bubble sort">Bubble Sort</option>
                        <option value="Insertion sort">Insertion Sort</option>
                        <option value="Merge sort">Merge Sort</option>
                    </select>
                </button>

                <button className='flex flex-col items-start cursor-pointer' onChange={(e) => {
                    setTitle("Count")
                    setCount(Math.round(e.target.value))
                }}>
                    <label>Count</label>
                    <select name="Count" id="count" className='w-72 h-10 rounded-md p-1'>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
                </button>

                <button className='flex flex-col items-start cursor-pointer' onChange={(e) => {
                    setTitle("Speed")
                    setSpeed(Math.round(e.target.value))
                }}>
                    <label>Speed</label>
                    <select name="Speed" id="speed" className='w-72 h-10 rounded-md p-1'>
                        <option value="200">Normal</option>
                        <option value="400">Fast</option>
                        <option value="500">Slow</option>
                    </select>
                </button>

                <button className='flex flex-col items-start cursor-pointer' onChange={() => {
                    setTitle("Animation")
                }}>
                    <label>Animation</label>
                    <select name="Animation" id="animation" className='w-72 h-10 rounded-md p-1'>
                        <option value="Smooth">Smooth</option>
                        <option value="different">different</option>
                        <option value="beautiful">beautiful</option>
                    </select>
                </button>
            </div>
        </div>
    )
}

export default Dropdown
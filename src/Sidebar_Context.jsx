import { useState, useRef, useEffect, createContext } from "react"
import { BubbleSort } from "./Components/Algorithms/BubbleSort";
import { MergeSort } from "./Components/Algorithms/MergeSort";
import { InsertionSort } from "./Components/Algorithms/InsertionSort";

export const SideBar_Context_Api = createContext()
export const Logic_Context_Api = createContext()

// generate array of random elements between 10 to 100.
function generateArrays(size, max) {
    const randomArray = [...new Array(size)].map(() => (Math.round(Math.random() * max)))
    return randomArray
}

// put Objects inside that random array that we created recently via generateArrays function.
function initialState(size, max) {
    let arr = generateArrays(size, max);
    let newArr = arr.map((element) => ({
        value: element,
        color: '#293451'
    }));
    return newArr
}

export const Sidebar_Context = ({ children }) => {
    const [state, setState] = useState([])
    const [heading, setHeading] = useState("bubble sort");
    const [count, setCount] = useState(10)
    const [algorithm, setAlgorithm] = useState("Bubble sort")
    const [playing, setPlaying] = useState(false)
    const [index, setIndex] = useState(0)
    const [history, setHistory] = useState([])
    const [speed, setSpeed] = useState(300)
    const timeOut = useRef()


    const handleClick = () => {
        switch (algorithm) {
            case "Insertion sort": {
                setHistory(InsertionSort(state))
                setPlaying(true)
                break;
            }
            case "Bubble sort": {
                setHistory(BubbleSort(state))
                setPlaying(true)
                break;
            }
            case "Merge sort": {
                setHistory(MergeSort(state))
                setPlaying(true)
                break;
            }
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
        <SideBar_Context_Api.Provider value={{ setHeading, setAlgorithm, setCount, setSpeed, handleClick }} >
            <Logic_Context_Api.Provider value={{ state, heading }}>
                {children}
            </Logic_Context_Api.Provider>
        </SideBar_Context_Api.Provider>
    )
}
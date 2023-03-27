import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { FaPlay } from 'react-icons/fa'
import { TfiMenuAlt } from 'react-icons/tfi'
// import { BsFillFileBarGraphFill } from 'react-icons/bs'
// import { IoColorPaletteOutline } from 'react-icons/io5'
// import { AiFillSound } from 'react-icons/ai'
// import { AiOutlineUser } from 'react-icons/ai'

const Sidebar = ({ setHeading, setCount, setAlgorithm, setPlaying, playing }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <ul className='py-10 px-10 bg_gradient flex flex-col'>
                <li className='mb-10'>
                    <a href="#" onClick={() => { setPlaying(!playing) }}>{<FaPlay />}</a>
                </li>
                <li className='flex flex-col'>
                    <a href="#" onClick={() => { setOpen(!open) }}>{<TfiMenuAlt />}</a>
                    {open && <Dropdown setHeading={setHeading} setCount={setCount} setAlgorithm={setAlgorithm} />}
                </li>
            </ul>
        </>
    )
}

export default Sidebar
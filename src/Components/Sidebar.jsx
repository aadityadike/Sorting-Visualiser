import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { FaPlay } from 'react-icons/fa'
import { TfiMenuAlt } from 'react-icons/tfi'

const Sidebar = ({ setHeading, setCount, setAlgorithm, handleClick, setSpeed }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <ul className='py-10 px-10 bg_gradient flex flex-col'>
                <li className='mb-10'>
                    <a href="#" onClick={handleClick}>{<FaPlay />}</a>
                </li>
                <li className='flex flex-col'>
                    <a href="#" onClick={() => { setOpen(!open) }}>{<TfiMenuAlt />}</a>
                    {open && <Dropdown {...{ setHeading, setCount, setAlgorithm, setSpeed }} />}
                </li>
            </ul>
        </>
    )
}

export default Sidebar
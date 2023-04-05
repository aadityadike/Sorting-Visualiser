import React, { useState, useContext } from 'react'
import Dropdown from './Dropdown'
import { FaPlay } from 'react-icons/fa'
import { TfiMenuAlt } from 'react-icons/tfi'
import { SideBar_Context_Api } from '../Sidebar_Context'

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const { setHeading, setAlgorithm, setCount, setSpeed, handleClick } = useContext(SideBar_Context_Api);
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
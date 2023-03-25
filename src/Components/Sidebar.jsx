import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { FaPlay } from 'react-icons/fa'
// import { BsFillFileBarGraphFill } from 'react-icons/bs'
// import { IoColorPaletteOutline } from 'react-icons/io5'
// import { AiFillSound } from 'react-icons/ai'
// import { AiOutlineUser } from 'react-icons/ai'

const Sidebar = ({ setHeading1, setCount, setState }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <ul className='py-10 px-10 bg_gradient flex flex-col'>
                <li className='flex flex-col'>
                    <a href="#" onClick={() => { setOpen(!open) }}>{<FaPlay />}</a>
                    {open && <Dropdown setHeading1={setHeading1} setCount={setCount} />}
                </li>
            </ul>
        </>
    )
}

export default Sidebar
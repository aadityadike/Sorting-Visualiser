import React from 'react'

const Main = ({ heading, count, state }) => {
    return (
        <div className='m-10 p-10 flex flex-col bg_gradient'>

            <div>
                <h1>Sorting Algorithm</h1>
                <h1>{heading}</h1>
            </div>


            <div className='flex gap-1 w-[1100px] h-[450px] rotate-180'>
                {state.map((obj, index) =>
                (
                    <div style={{
                        height: `${obj.value}%`,
                        width: `${20}%`,
                        backgroundColor: `${obj.color}`
                    }} key={index}>
                    </div >
                ))
                }
            </div>
        </div >
    )
}

export default Main
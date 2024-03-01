import React from 'react'
import Navbar from './Navbar'
import './../App.css'

export default function Crew(props) {
    

    return (
        <div className='bgcrew w-screen overflow-x-hidden h-screen flex flex-col bg-slate-400'>
            <Navbar></Navbar>
            <div className='w-full h-[800px] flex justify-center items-center'>
                <div className='w-1/2  h-full gap-24 flex items-center justify-center flex-col'>
                 <h1 className='text-4xl  text-[#494A53]'>02 <span className='text-white'> MEET YOUR CREW</span></h1>
                 <div className='h-[33rem]'></div>

                </div>
                <div className=' w-1/2 h-full flex flex-col items-center justify-center gap-4'>
                    
                </div>
            </div>
        </div>
    )
}
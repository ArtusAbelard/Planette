import React from 'react'
import { createBrowserRouter , RouterProvider , Link } from 'react-router-dom'

export default function Navdestination(props) {
    

    return (
        <div className='mt-20 me-[13rem] w-[33rem] h-[4rem] '>
            <nav className='gap-4 h-full flex'>
                <div onClick={props.setindex(0)} className='h-full w-[5rem]  text-white tracking-widest flex items-center justify-center'><Link >MOON</Link></div>
                <div onClick={props.setindex(1)} className='h-full w-[5rem]  text-white tracking-widest flex items-center justify-center'><Link >MARS</Link></div>
                <div className='h-full w-[5rem]  text-white tracking-widest flex items-center justify-center'><Link to="/Destination/2">EUROPA</Link></div>
                <div className='h-full w-[5rem]  text-white tracking-widest flex items-center justify-center'><Link to="/Destination/3">TITAN</Link></div>
            </nav>
        </div>
    )
}

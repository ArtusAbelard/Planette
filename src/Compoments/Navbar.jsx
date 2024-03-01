import React from 'react'
import logonav from './../assets/img/shared/logo.svg'
import './../App.css'
import { createBrowserRouter , RouterProvider , Link } from 'react-router-dom'

export default function Navbar(props) {
    

    return (
        <div className='mt-10 w-full h-[105px] flex'>
            <div className='w-[35.5%] h-full flex'>
                <div className='flex items-center justify-center w-[27%] h-full'>
                    <img className='h-[50%]' src={logonav} alt="" />
                </div>
                <div className='w-[73%] h-full flex justify-center items-center'>
                    <div className='w-[86%] h-[2px] border-b-[2px]'></div>
                </div>
            </div>
            
            <div className='divnav w-[64.5%] h-full backdrop-blur-sm bg-white brightness-110 flex items-center justify-center'>
                <nav className='flex me-6 items-center justify-around w-[70%] h-full'>
                    <div className=''><Link className='text-white text-xl' to="/Planette">00 HOME</Link></div>
                    <div><Link className='text-white text-xl' to="/Destination/Planete/0">01 DESTINATION</Link></div>
                    <div><Link className='text-white text-xl' to="/Crew">02 CREW</Link></div>
                    <div><Link className='text-white text-xl' to="/Technology">03 TECHNOLOGY</Link></div>
                </nav>
            </div>
            
        </div>
    )
}

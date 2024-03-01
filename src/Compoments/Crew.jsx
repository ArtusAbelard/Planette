import React from 'react'
import Navbar from './Navbar'
import './../App.css'
import { Outlet } from 'react-router-dom'

export default function Crew(props) {
    
    return (
        <div className='bgcrew w-screen overflow-x-hidden h-screen flex flex-col bg-slate-400'>
            <Navbar></Navbar>
            <Outlet></Outlet>  
        </div>
    )
}
import React from 'react'
import Navbar from './Navbar'
import './../App.css'
import { Outlet } from 'react-router-dom'

export default function Technology(props) {

    return (
        <div className='bgtechno w-screen overflow-x-hidden h-screen flex flex-col bg-slate-300'>
            <Navbar></Navbar>
            <Outlet></Outlet> 
        </div>
    )
}
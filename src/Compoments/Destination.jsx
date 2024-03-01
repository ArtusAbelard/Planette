import React from 'react'
import Navbar from './Navbar'
import './../App.css'
import Navdestination from './Navdestination'
import data from './../../public/json/data.json'
import moon from './../assets/img/destination/image-moon.png'
import mars from './../assets/img/destination/image-mars.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Planete from './Planete'

export default function Destination() {
    
    const {id} = useParams()
    const product = data[id]
    const [index, setindex] = useState(1)
    const imgplanette = [moon,mars]
   
    return (
        <div className='bgdesti w-screen overflow-x-hidden h-screen flex flex-col bg-slate-600'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
import React from 'react'
import './../App.css'
import data from '../../public/json/data.json'
import { Link } from 'react-router-dom'
import imgsoyous from './../assets/img/technology/image-launch-vehicle-portrait.jpg'
import spaceport from './../assets/img/technology/image-spaceport-portrait.jpg'
import spacecapsule from './../assets/img/technology/image-space-capsule-portrait.jpg'
import { useParams } from 'react-router-dom'

export default function Technologycarousel(props) {
    const nav = ["1","2","3"]
    const imgtechno = [imgsoyous,spaceport,spacecapsule]
    const {id} = useParams()

    return (
        <div className='w-full h-[800px] flex justify-center items-center'>
        <div className='w-1/2  h-full gap-19 flex items-center justify-center flex-col'>
            <h1 className='text-4xl tracking-widest text-[#494A53] pe-20'>03 <span className='text-white tracking-widest'> SPACE LAUNCH 101</span></h1>
            <div className='ms-40  h-[39rem] w-[50rem] flex  justify-center items-center'>
                <div className='h-full w-1/5 0 flex flex-col justify-center items-center gap-7 '>
                   {
                    data.technology.map((Element,id)=>{
                        return(
                            <Link className='w-[100px] h-[100px] rounded-full text-black bg-white text-center flex items-center justify-center text-3xl' id={id} to={`/Technology/Technologycarousel/${id}`}>{nav[id]}</Link>
                        )
                    })
                   } 
                </div>
                <div className='h-full w-4/5 flex flex-col items-center justify-center'>
                   <h6 className='w-[34rem] text-sm text-white'>THE TERMOLOGY... </h6>
                   <h1 className='w-[34rem] text-[5rem] text-white'>{data.technology[id].name}</h1>
                   <p className='w-[34rem] text-2xl pt-4 text-white h-[200px]'>{data.technology[id].description}</p>
                </div>
            </div>
        </div>
        <div className=' w-1/2  h-full flex flex-col items-center justify-center gap-4'>
        <img src={imgtechno[id]} alt="" />
        </div>
        </div>
    )
}

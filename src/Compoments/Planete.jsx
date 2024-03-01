import React from 'react'
import data from '../../public/json/data.json'
import moon from './../assets/img/destination/image-moon.png'
import mars from './../assets/img/destination/image-mars.png'
import europa from './../assets/img/destination/image-europa.png'
import titan from './../assets/img/destination/image-titan.png'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function Planette(props) {
    const imgplanette = [moon,mars,europa,titan]
    const {id} = useParams()
    return (
        <div className='w-full h-[800px] flex justify-center items-center'>
            <div className='w-1/2  h-full gap-24 flex items-center justify-center flex-col'>
                <h1 className='text-4xl  text-[#494A53]'>01 <span className='text-white'> PICK YOUR DESTINATION</span></h1>
                <img className='w-[33rem] rotating rounded-full overflow-hidden' src={imgplanette[id]} alt="" />
            </div>
            <div className=' w-1/2 h-30 flex flex-col items-center justify-center gap-4'>
                <div className='mt-[30px] me-[220px] w-[33rem] h-[4rem] '>
                    <nav className='gap-4 h-full flex'>
                        {
                            data.destinations.map((Element,id)=>{
                                return(
                                    <div className='h-full w-[5rem]  text-white tracking-widest flex items-center justify-center'><Link id={id} to={`/Destination/Planete/${id}`}>{data.destinations[id].name}</Link></div>    
                                )
                            })
                        } 
                    </nav>
                </div>
                <h1 className='mt-[10px] me-[220px] w-[33rem] text-9xl text-white h-19'>{data.destinations[id].name.toUpperCase()}</h1>
                <p className='pt-[40px] me-[220px] w-[33rem] h-[210px] text-white text-2xl '>{data.destinations[id].description}</p>
                <div className='mt-[20px] me-[220px] w-[33rem] h-[2px] bg-white'></div>
                <p className='me-[220px] w-[33rem] text-center h-19 text-white tracking-wide'>EST.TRAVEL TIME</p>
                <p className='me-[220px] w-[33rem] text-center h-16 text-white text-3xl'>{data.destinations[id].travel.toUpperCase()}</p>
            </div>
        </div>
    )
}

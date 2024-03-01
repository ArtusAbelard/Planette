import React from 'react'
import data from '../../public/json/data.json'
import { Link } from 'react-router-dom'
import imgcrew1 from './../assets/img/crew/image-douglas-hurley.png'
import imgcrew2 from './../assets/img/crew/image-mark-shuttleworth.png'
import imgcrew3 from './../assets/img/crew/image-victor-glover.png'
import imgcrew4 from './../assets/img/crew/image-anousheh-ansari.png'
import { useParams } from 'react-router-dom'
export default function Crewcarousel(props) {
    const imgcrew = [imgcrew1,imgcrew2,imgcrew3,imgcrew4]
    const {id} = useParams()
    
    return (
        <div className='w-full h-[800px] flex justify-center items-center'>
                <div className='w-1/2  h-full gap-19 flex items-center justify-center flex-col'>
                 <h1 className='text-4xl tracking-widest text-[#494A53]'>02 <span className='text-white tracking-widest'> MEET YOUR CREW</span></h1>
                 <div className='ms-40 h-[39rem] w-[50rem] flex flex-col justify-center items-center'>
                    <h5 className='w-[34rem] text-start text-white text-5xl'>{data.crew[id].role}</h5>
                    <h1 className='w-[34rem] text-start text-white text-[4rem] '>{data.crew[id].name}</h1>
                    <p className='w-[34rem] pt-7 text-white text-2xl h-[250px]'>{data.crew[id].bio}</p>
                    <nav className='flex pt-[60px] w-[34rem] gap-7 items-start justify-start'>
                    {
                        data.crew.map((Element,id)=>{
                            return(
                                <Link className='w-[20px] h-[20px] bg-white rounded-full' id={id} to={`/Crew/Crewcarousel/${id}`}></Link>
                            )}
                        )
                    }
                    </nav>
                 </div>
                </div>
                <div className=' w-1/2 h-full flex flex-col items-center justify-center gap-4'>
                    <img className='h-[42rem]' src={imgcrew[id]} alt="" />
                </div>
        </div>
    )
}

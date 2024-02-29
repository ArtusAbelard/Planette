import React from 'react'
import Navbar from './Navbar'
import './../App.css'

export default function Body(props) {
    

    return (
        <div className='w-screen overflow-x-hidden h-screen flex flex-col bg-slate-600 bghome'>
            <Navbar></Navbar>
            <div className='w-full h-[800px] flex justify-center items-center'>
                <div className='w-1/2 h-full  flex items-center justify-center flex-col'>
                    <h1 className='text-white text-4xl ms-20 ps-10 w-[77%]'>SO, YOU WANT TO TRAVEL TO</h1>
                    <h1 className='text-white text-[14rem] ms-20 ps-10 w-[77%]'>SPACE</h1>
                    <p className='text-white ms-20 ps-10 w-[77%] text-2xl'>Let's face it; if you want to go to space, you might as well <br />
                    genuinely go to outer space and not hover kind of on the <br />
                    edgeof it. Well sit back,and relax because we'il give you a <br />
                    truly out of this world experience!</p>
                </div>
                <div className='w-1/2 h-full flex items-center justify-center'>
                    <div className='w-[370px] h-[370px] rounded-full bg-white flex items-center justify-center text-5xl'>EXPLORE</div>
                </div>
            </div>
        </div>
    )
}

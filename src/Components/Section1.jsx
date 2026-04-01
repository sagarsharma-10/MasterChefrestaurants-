import React from 'react'
import { Link } from 'react-router-dom'
import Banner1 from '../img/img2/picbanner4.png'
// import Banner2 from '../img/img2/picbanner2.png'


function Section1() {
    return (
        <div className='flex flex-col items-center md:flex-row  md:justify-evenly'>
            <div className='ml-9 justify-evenly flex flex-col items-start min-h-70 max-w-98  md:ml-15  md:justify-between md:p-6'>
                <p className='  font-semibold text-3xl  text-shadow-black [text-shadow:0px_1px_3px_rgba(0,0,0,0.9)] md:text-5xl md:pb-10'>Enjoy the perfect balance of taste and freshness!</p>
                <Link to='/menu'><button className='p-2 pl-6 pr-6 rounded-2xl bg-amber-950 text-white cursor-pointer'> View Menu</button></Link>
            </div>

            <img src={Banner1} alt="" className=' h-80  max-w-2xl md:h-100' />


        </div>
    )
}

export default Section1

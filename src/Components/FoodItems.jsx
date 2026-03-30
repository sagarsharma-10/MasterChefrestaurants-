import React, { useContext, useEffect } from 'react'
import { CiStar } from "react-icons/ci";
import Dishes from '../Data';
import { data } from '../UseContext';

function FoodItems() {

    const { Dishes, addToCart, fil } = useContext(data)

    const Data = fil && fil.length > 0 ? fil : Dishes;



    return (
        <>
            <p className=' pl-10 p-2 pb-6 text-3xl text-shadow-black [text-shadow:0px_1px_3px_rgba(0,0,0,0.9)] md:pl-20 md:p-10'>Delicious food, unforgettable taste</p>
            <div className='flex gap-5 flex-wrap  justify-center items-center'>

                {
                    Data.map((items, index) => {
                        return <div key={index} className=' border-amber-400  border-2   flex flex-col  items-center rounded-2xl justify-center shadow-xl p-2 h-80 w-40  md:w-70 md:h-105 '>
                            <img src={items.img} alt="pics" className='h-27 w-35 md:h-50 md:w-55 rounded-2xl object-cover' />
                            <div className='  md:p-4 flex flex-col justify-center gap-3 '>
                                <h1 className='md:text-xl'>{items.name}</h1>
                                <h4 className='text-[11px] md:text-[13px]'>{items.description}</h4>
                                <div className='flex justify-between'>
                                    <h3 className='md:text-xl text-amber-700'>₹{items.price}</h3>
                                    <div className='flex text-amber-700 '>
                                        <CiStar />
                                        <CiStar />
                                        <CiStar />
                                        <CiStar />
                                        <CiStar />
                                    </div>
                                </div>
                                <button
                                    className='border-2 border-amber-700 rounded-2xl p-1.5 hover:scale-98  hover:text-white hover:bg-amber-950 cursor-pointer'
                                    onClick={() => addToCart(items)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    })
                }



            </div >
        </>
    )
}

export default FoodItems

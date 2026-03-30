import React, { useState } from 'react'

import { useContext } from 'react'
import { data } from "../UseContext";
function Menu() {
    const [show, setShow] = useState(false)
    const { MenuDishes, FilteredItems, fil } = useContext(data);
    function MoveFooditems(category) {
        FilteredItems(category); // 👈 filter lagao

        setTimeout(() => {
            document.getElementById("food")
                ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }
    return (
        <>
            <div className=' w-full '>
                <span className=' pl-10  text-3xl   text-shadow-black [text-shadow:0px_1px_3px_rgba(0,0,0,0.9)] md:pl-20'>Taste Starts Here</span>
                <p className=' pl-10 text-[14px] p-2  pt-5  text-shadow-cyan-800 [text-shadow:0px_1px_3px_rgba(0,0,0,0.9)] md:pl-20'>Enjoy fresh flavors crafted with care, designed to satisfy your cravings.</p>
                <div className='pt-5  flex justify-evenly items-center  flex-wrap gap-5 md:pl-10 md:pr-10 md:pt-4 md:gap-1'>
                    {MenuDishes.map((item, index) => {
                        return <div key={index}>
                            <div className=' flex flex-col items-center justify-evenly rounded-xl cursor-pointer  md:w-30 md:h-40 ' onClick={() => {
                                FilteredItems(item.catagories);

                                setTimeout(() => {
                                    document.getElementById("food")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }, 100);
                            }}>

                                <img src={item.img} alt="" className='h-[100px] w-[100px] object-cover rounded-full border-5 border-amber-900 ' />

                                <span className='text-shadow-black [text-shadow:0px_1px_3px_rgba(0,0,0,0.9)] '>
                                    {item.catagories}
                                </span>


                            </div>

                        </div>

                    })

                    }
                    {<hr className='w-[95%] ' />}
                </div>

            </div >
        </>
    )
}

export default Menu

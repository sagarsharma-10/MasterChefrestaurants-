import React, { useContext } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { data } from '../UseContext'

function TotalAmount() {
    const { cart } = useContext(data)
    let totalAmount = cart.reduce((acc, curr) => {
        return acc + (curr.price * curr.qty)
    }, 0)

    let finalAmount = totalAmount + 50;
    return (
        <div className='flex justify-center items-center pl-10 flex-col  w-full p-10'>

            <div className='flex flex-col justify-evenly items-center mt-2 md:p-10  md:flex-row  md:w-full'>
                <div className=' flex flex-col justify-around h-50'>
                    <div className="box1 ">
                        <button className='  bg-black items-center justify-evenly md:text-xl flex pl-4 pr-4 pt-3 pb-3 rounded-2xl text-white '>Add Items <FaShoppingBag className='text-amber-200 ml-2 ' /> </button>
                    </div>
                    <div className="Promo  ">
                        <h2 className=' md:text-xl md:font-semibold mb-5'>If you have a promo code, enter it here</h2>
                        <input type="text" placeholder='Promo Code' className='border-2 p-1.5' /><button className='bg-black text-white p-2'> Submit</button>
                    </div>

                </div>
                <div className="box3  md:w-99 flex flex-col gap-5 w-56 mt-5 ">

                    <h1 className='text-2xl md:text-3xl '>Cart Totals</h1>
                    <div className="totalamount ">

                        <div className="subtotal flex justify-between items-center md:text-xl">
                            <h3 className=''>Subtotal</h3>
                            <h3>{totalAmount}</h3>
                        </div>
                        <div className="delivery flex justify-between items-center pt-3 pb-3 md:text-xl">
                            <h3 className='' >Delivery Fee</h3>
                            <h3>{
                                totalAmount ? '50' : '0'
                            }</h3>

                        </div>
                        <hr />
                        <div className='TotalPay font-semibold flex justify-between items-center '>
                            <h3 className='text-xl'>Total </h3>
                            <h3>{
                                totalAmount ? finalAmount : 0
                            } </h3>

                        </div>
                    </div>

                </div>

            </div>
            <button className='mt-7 p-3 bg-amber-600 rounded-2xl text-amber-50 font-semibold cursor-pointer text-xs hover:bg-amber-700 hover:scale-98 md:text-[16px]'> Proceed to checkout</button>
        </div>
    )
}

export default TotalAmount


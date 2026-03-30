import React, { useContext, useEffect, useState } from 'react'
import TotalAmount from './TotalAmount'
import { CiCircleRemove } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";




import { data } from '../UseContext'
// useState

function CartItems() {
    const { cart, decreaseQty, increaseQty, removeItem } = useContext(data)


    return (
        <div className="max-w-5xl mx-auto p-4">

            <h1 className="text-3xl font-bold text-center mb-10">
                Your Order
            </h1>

            {/* Header */}
            <div className="hidden md:grid grid-cols-6 gap-4 border-b pb-3 pt-10 text-center text-xl  text-shadow-black [text-shadow:0px_1px_3px_rgba(0,0,0,0.9)]">
                <div>Item</div>
                <div>Title</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div>Remove</div>
            </div>
            <h1 className='block md:hidden text-2xl text-center  text-shadow-black [text-shadow:0px_1px_3px_rgba(0,0,0,0.9)]'>
                Total Items
            </h1>

            {/* Cart Items */}
            {cart.length === 0 ? (
                <p className="text-center text-xl mt-10 underline">
                    Cart is empty
                </p>
            ) : (
                cart.map((items) => (
                    <div
                        key={items.id}
                        className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center border-b py-4 text-center"
                    >

                        {/* Image */}
                        <div className="flex justify-center">
                            <img
                                src={items.img}
                                alt=""
                                className="h-16 w-20 object-cover"
                            />
                        </div>

                        {/* Title */}
                        <div>{items.name}</div>

                        {/* Price */}
                        <div>₹{items.price}</div>

                        {/* Quantity */}
                        <div className="flex justify-center items-center gap-2">
                            <span className=" text-xl text-gray-800 " onClick={() => decreaseQty(items.id)}><GrSubtractCircle />
                            </span>
                            {

                                <span>{items.qty}</span>
                            }
                            <span className=" text-cyan-800  text-xl" onClick={() => increaseQty(items.id)} ><IoMdAddCircleOutline />
                            </span>
                        </div>

                        {/* Total */}
                        <div>₹{items.price * items.qty}</div>

                        {/* Remove */}
                        <div>
                            <button className=" px-2 text-red-800 text-2xl " onClick={() => removeItem(items.id)}><CiCircleRemove /></button>
                        </div>
                    </div>
                ))
            )}

            {/* Total */}
            <div className="mt-6">
                <TotalAmount />
            </div>

        </div>
    )
}

export default CartItems
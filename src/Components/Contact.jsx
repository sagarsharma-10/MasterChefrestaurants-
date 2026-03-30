import React from 'react'
import Logo from '../img/img2/masterchef-removebg-preview.png'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";



function Contact() {
    return (
        <div className='flex justify-between p-5 bg-black text-white flex-wrap items-center mt-2'>
            <div className=' w-80 flex flex-col justify-evenly gap-5  border-amber-50'>
                <img src={Logo} alt="" className='h-30 w-50' />
                <p className='text-xl'>Your favorite dishes, just a click away — fresh food, fast delivery, and unbeatable taste.</p>
            </div>
            <div className=''>
                <span className='text-2xl font-semibold '>Company</span>
                <ul className='flex flex-col gap-3 text-xl pt-5 text-gray-400'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>
            <div className='flex flex-col gap-4 text-xl'>
                <span className="text-2xl font-semibold ">Get In Touch</span>
                <span>+9112345678</span>
                <span>mrchefgmail.com</span>

                <div className='flex gap-3 text-3xl justify-evenly'>
                    <CiFacebook />
                    <CiTwitter />
                    <CiInstagram />
                </div>
            </div>

        </div>
    )
}

export default Contact

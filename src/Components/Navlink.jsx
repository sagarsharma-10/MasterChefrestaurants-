import React, { useContext, useState } from 'react'
import Logo from '../img/img2/masterchef-removebg-preview.png'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link, Links } from 'react-router'
import { Route, Routes } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from '../UseContext';
import { GiTireIronCross } from "react-icons/gi";
import { FaCircle } from "react-icons/fa6";



function Navlink() {
    const { cart } = useContext(data)
    const [showNav, setShowNav] = useState(false)
    const [active, setActive] = useState('home')



    let cartSymbol = cart.length > 0;


    return (
        <>
            <div className='flex p-3 shadow-2xl justify-evenly fixed w-full  items-center  bg-white '>
                <div className="">
                    <Link to={"/"}>
                        <img src={Logo} alt="" className='h-12  w-18' />
                    </Link>
                </div>
                <ul className={` md:flex  flex-col hidden gap-10  lg:text-xl font-semibold  cursor-pointer md:flex-row text-[16px] `}>
                    <a href="#Home"><li className={active === 'home' ? 'underline underline-offset-7 text-amber-900' : ''} onClick={() => setActive('home')}>Home</li></a>
                    <a href='#Menu'><li className={active === 'menu' ? 'underline underline-offset-7 text-amber-900' : ''} onClick={() => setActive('menu')}>Menu</li></a>
                    <a href="#food"><li className={active === 'food' ? 'underline underline-offset-7 text-amber-900' : ''} onClick={() => setActive('food')}>Foods</li></a>
                    <a href="#Contact"> <li className={active === 'contact' ? 'underline underline-offset-7 text-amber-900' : ''} onClick={() => setActive('contact')}>Contact us</li></a>

                </ul>

                <div className='text-2xl flex gap-3 items-center text-amber-900 cursor-pointer md:text-4xl md:gap-6'>
                    <CiSearch />
                    <Link to='/cart'>
                        <div className='relative flex'>
                            <CiShoppingCart className='font-extrabold flex relative ' />
                            {
                                cartSymbol ? <div className='text-red-800  absolute
                                right-0  top-1 text-[7px] md:text-[10px] '><FaCircle /></div> : null

                            }
                        </div>
                    </Link>

                    <button className=' text-[16px] md:text-[19px] bg-amber-900  text-white border-2 pl-3 pr-3 pt-1 pb-1.5 rounded-2xl cursor-pointer hover:scale-97 '>SignUp</button>
                    <div className={`md:hidden text-xl`} onClick={() => setShowNav(!showNav)}>

                        {
                            showNav === true ? <GiTireIronCross /> : <GiHamburgerMenu />
                        }


                    </div>
                    <div className={`${showNav ? 'block' : 'hidden'} md:hidden bg-amber-300 absolute top-17 left-0 right-[50%] w-full `}>

                        <ul className={` flex-col p-5 gap-6 justify-center items-center flex lg:text-xl font-semibold cursor-pointer w-full  transition-all text-[16px]  bg-amber-100 md:hidden `}
                            onClick={() => setShowNav(false)}>

                            <li className='w-full border-b border-amber-200  py-2 flex item-center justify-center'>
                                <a href="#Home" >Home</a>
                            </li>
                            <li className='w-full border-b border-amber-200 py-2 flex item-center justify-center'>
                                <a href='#Menu'>Menu</a></li>
                            <li className='w-full border-b border-amber-200 py-2 flex item-center justify-center'>
                                <a href="#food">Foods</a></li>
                            <li className='w-full border-b border-amber-200 py-2 flex item-center justify-center'>
                                <a href="#Contact">Contact us</a></li>

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navlink

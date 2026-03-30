import React from 'react'
import Section1 from './Section1'
import FoodItems from './FoodItems'
import Menu from './Menu'
import Contact from './Contact'

function Home() {
    
    return (
        <>

            <div >
                <section id="Home" className='pt-20 '>
                    <Section1 />
                </section >
                <section id='Menu' className='  pt-10'>
                    <Menu />
                </section>
                <section id="food" className='pt-15'>
                    <FoodItems />
                </section>

                <section id='Contact'>
                    <Contact />
                </section>

            </div>
        </>
    )
}

export default Home



import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links=[
    {name:'Home' , href:'/'},
    {name:'Clocks' , href:'/Clocks'},
    {name:'Lamps' , href:'/Lamps'},
    {name:'Artifacts' , href:'/Artifacts'},
    {name:'Designs' , href:'/Designs'}
]


 const  Hero = async () => {
  return (
    <main className='bg-white dark:bg-inherit grid gap-3 max-w-7xl mx-auto'>
        <section className=' grid md:grid-cols-2 '>
            <div className='my-auto gap-3 px-2 py-3'>
                <h1 className='font bold text-3xl md:text-4xl text-black dark:text-white '>Home and office decors, Ornaments, Gift Item and Accessories for high personnels with high taste.</h1>
                <p className='text-lg font-normal text-gray-800 dark:text-gray-400 py-3'>We sell only the most exclusive and high quality product for you,<br/>We are the best so come and buy from us. </p>
            </div>
            <div className='relative p-0'>
                <Image src='/hero.JPG' alt='hero image' height={500} width={500} priority className=' object-contain h-full'/>
            </div>
        </section>
        <div className='flex flex-wrap gap-3 px-2 '>
        {links.map((link)=>
            <div key={link.name} className='p-4 rounded-xl border-2 text-primary font-semibold'>
                <Link href={link.href}>
                {link.name}
                </Link>
            </div>
            )}
        </div>
    </main>
  )
}

export default Hero
'use client'

import { Button } from '@/components/ui/button'
import Mobile from '@/components/mobilemenu'
import Menu from '@/components/mobilemenu'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ModeToggle } from './moodtoggle'
import { useShoppingCart } from 'use-shopping-cart'

const links=[
    {name:'Home' , href:'/'},
    {name:'Clocks' , href:'/Clocks'},
    {name:'Lamps' , href:'/Lamps'},
    {name:'Artifacts' , href:'/Artifacts'},
    {name:'Designs' , href:'/Designs'}
]


const NavBar = () => {
    const pathname = usePathname()
    const { handleCartClick } = useShoppingCart();

  return (
    <nav className='border-b w-full  h-[14vh] bg-white dark:bg-inherit '>
    <div className=' h-full md:max-w-7xl mx-auto  flex justify-between items-center text-xl font-semibold font-sans '>
        <div className='text-xl md:text-[35px] font-bold font-serif item center p-3 md:p-5 '>
            <Link href='/'>
                <h1>Ok<span className='text-primary'>Shopify</span></h1>
            </Link>           
        </div>
        <div className='md:flex gap-3 lg:gap-7 hidden p-3 md:p-5'>
            {links.map((link,idx)=>
            <div key={idx}>
                {pathname == link.href ?
                <Link href={link.href} className='text-primary '>
                    {link.name}
                </Link>
                :
                <Link href={link.href} className='text-black dark:text-white'>
                    {link.name}
                </Link>
                }
            </div>
            )}
        </div>
        <div >
            <Button variant='outline'
                onClick={() => handleCartClick()}
              className='border-r border-l p-6 rounded-lg h-full border-2 dark:border-white '>
                <Link href='/' className='flex flex-col justify-center gap-2 items-center'>
                <ShoppingBag size={40}/>
                <span className='block'>Cart</span>
                </Link>
            </Button>
        </div>
        <div className='md:hidden'>
            <Mobile/>
        </div>
        <ModeToggle/>
    </div>
    </nav>
  )
}

export default NavBar
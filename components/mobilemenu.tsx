import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
  
const links=[
    {name:'Home' , href:'/'},
    {name:'Clocks' , href:'/Clocks'},
    {name:'Lamps' , href:'/Lamps'},
    {name:'Artifacts' , href:'/Artifacts'},
    {name:'Designs' , href:'/Designs'}
]

const Mobile = () => {
    const pathname = usePathname()
  return (
    <div className='bg-white dark:bg-inherit'>
        <Menubar>
            <MenubarMenu >
                <MenubarTrigger className='border-none'>
                    <Menu size={30}/>
                </MenubarTrigger>
                <MenubarContent className='grid gap-3 lg:gap-7 md:hidden p-3 md:p-5 h-2/3' >  
                
                    {links.map((link,idx)=>
                    <MenubarItem key={idx}>
                        {pathname == link.href ?
                        <Link href={link.href} className='text-primary '>
                            {link.name}
                        </Link>
                        :
                        <Link href={link.href} className='text-black dark:text-white'>
                            {link.name}
                        </Link>
                        }
                    </MenubarItem>
                    )}
                
                </MenubarContent>
            </MenubarMenu>
        </Menubar>

    </div>
  )
}

export default Mobile
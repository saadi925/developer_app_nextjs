'use client'
import { ThemeProvider } from 'next-themes'
import React, { useState } from 'react'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import MenuIcon from '@/assets/MenuIcon'
import { ICON_SIZE } from '@/conf/keys'
export default function Provider({
    children
}: {
    children: React.ReactNode
}) {
   const [isOpenSidebar , setSidebar] = useState(false)
   const toggleSidebar = () => setSidebar(!isOpenSidebar)
    return (


        <ThemeProvider attribute='class' defaultTheme="system" enableSystem>
            <Header>
            <button onClick={toggleSidebar} className=" md:hidden border rounded-full p-1 border-borderDark bg-dark  text-secondary focus:outline-none">
           <MenuIcon size={ICON_SIZE} fill='#fff' />
        </button >
            </Header>
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpenSidebar}>
                Sidebar
            </Sidebar>
            {children}
        </ThemeProvider>
    )
}

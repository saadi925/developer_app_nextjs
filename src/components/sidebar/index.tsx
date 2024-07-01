import { SidebarIcon } from '@/assets/SidebarIcon';
import {useEffect, useRef} from 'react'
import React from 'react'
import useClickOutside from '../hooks/useClickOutside';
export default function Sidebar({isOpen , toggleSidebar, children} :{
    isOpen : boolean, toggleSidebar : () => void, children : React.ReactNode
}) {
  const sidebarRef = useRef<HTMLDivElement>(null)
  useClickOutside(sidebarRef, toggleSidebar, isOpen)
    return (
    <div ref={sidebarRef} className={`h-screen max-w-sm w-full bg-light  dark:bg-dark fixed transition-all duration-300  top-0 ${isOpen ? "right-0 z-50 opacity-100":"-right-full opacity-0 "}`}>
     <div className="relative h-full">
     <button onClick={toggleSidebar} className='py-6'>
          <SidebarIcon color={'#805AF5'} size={20}/>
        </button>
    {children}
     </div>
    </div>
  )
}

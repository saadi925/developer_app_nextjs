'use client'
import React from 'react';
import Link from 'next/link';
import HeaderLink from './HeaderLink/HeaderLink'
import { Search } from '@/assets';
import { usePathname } from 'next/navigation';
const Header = ({children} : {children : React.ReactNode}) => {
  const pathname = usePathname()

  const navlinks = [
    {
      href  : "/explore",
      name : "Explore"
    },
    {
      href : "/about",
      name : "About"
    }
  ]
  const HideWhenPages = '/auth/signup' === pathname || '/auth/signin' === pathname
  return (
   <header className={`bg-blackest text-secondary p-4 ${HideWhenPages && "hidden"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
          CodeStack
          </Link>
        </div>
        <nav className="flex gap-2  items-center">
        <div className="hidden md:flex items-center lg:border border-borderDark focus-within:border-borderLight rounded-full px-4 ">
        <Search size={20}/>
        <input type="text" placeholder='Search SnapFeeds' className='px-2 hidden lg:flex bg-transparent outline-none py-1' />
        </div>
        <ul className='hidden md:flex items-center gap-2'>
        {
            navlinks.map((link, index) =>(
              <HeaderLink {...link} key={index} />
            ))
          }
        </ul>
         <div className="flex items-center gap-2">
         <Link href={'/auth/signin'}  className='base_btn bg-dark border-primary border text-white '>
            Login
          </Link >
          <Link href={'/auth/signup'}  className='base_btn bg-primary text-white '>
            SignUp
          </Link >
     {children}
        </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

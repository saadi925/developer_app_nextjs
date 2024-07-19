'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeaderLink from './HeaderLink/HeaderLink';
import { Search } from '@/assets';
import { usePathname } from 'next/navigation';
import ThemeSwitch from '../common/themeSwitch/ThemeSwitch';
// import imagelogo from '@/assets/images/ic_launcher.png'
import Image from 'next/image';
const Header = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const navlinks = [
    { href: "/", name: "Home" },
    { href: "/courses", name: "Courses" },
    { href: "/membership", name: "Membership" },
    { href: "/blogs", name: "Blogs" }
  ];

  const HideWhenPages = ['/auth/signup', '/auth/signin'].includes(pathname);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) { // if scrolling down
      setIsVisible(false);
    } else { // if scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`bg-blackest text-secondary p-4 fixed w-full top-0 z-50 transition-transform duration-300 ${HideWhenPages ? "hidden" : ""} ${isVisible ? "transform translate-y-0" : "transform -translate-y-full "}`}>
      <div className="w-full flex justify-between px-2 items-center">
        <div className="text-xl sm:text-2xl font-bold">
          <Link href="/" className='relative w-full '>
       {/* <Image src={imagelogo} alt='Image' className='w-full h-full !grayscale' width={40}/> */}
       <div className="font-sans font-bold shadow shadow-primary px-3 rounded-full">
        codestacklab
       </div>

          </Link>
        </div>
        <nav className="flex gap-2 items-center">
          <div className="hidden md:flex items-center lg:border border-borderDark focus-within:border-borderLight rounded-full px-4">
            <Search size={20} />
            <input type="text" placeholder='Search SnapFeeds' className='px-2 hidden lg:flex bg-transparent outline-none py-1' />
          </div>
          <ul className='hidden md:flex items-center gap-2'>
            {navlinks.map((link, index) => (
              <HeaderLink {...link} key={index} />
            ))}
          </ul>
          <div className="flex items-center gap-1 sm:gap-2">
            <Link href={'/auth/signin'} className='base_btn bg-dark border-primary border text-white'>
              Login
            </Link>
            <Link href={'/auth/signup'} className='base_btn bg-primary text-white'>
              SignUp
            </Link>
            <ThemeSwitch />
            {children}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

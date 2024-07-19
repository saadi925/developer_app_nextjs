import Hero from '@/components/hero/Hero'
import React from 'react'

export default function page() {
  return (
    <div className='px-6 sm:px-12'>
      <Hero />
     <div className="relative top-16 ">
       <h2 className='text-3xl font-semibold'>
        Explore Courses
       </h2>
       <div className="flex gap-2 justify-center flex-wrap">
       <div className="w-80 aspect-square bg-white dark:bg-transparent  border-borderLight dark:border-borderDark dark:bg-gradient-to-t rounded-lg dark:from-slate-800 to-neutral-800  "></div>
       <div className="w-80 aspect-square bg-white dark:bg-transparent  border-borderLight dark:border-borderDark dark:bg-gradient-to-t rounded-lg dark:from-slate-800 to-neutral-800  "></div>
       <div className="w-80 aspect-square bg-white dark:bg-transparent  border-borderLight dark:border-borderDark dark:bg-gradient-to-t rounded-lg dark:from-slate-800 to-neutral-800  "></div>

       </div>
     </div>
    </div>
  )
}

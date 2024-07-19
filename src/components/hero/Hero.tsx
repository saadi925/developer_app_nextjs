import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 px-6 sm:px-12 min-h-screen flex flex-col relative top-16 items-center ">
            <div className="flex flex-col gap-2 pt-16 sm:text-center  justify-center max-w-2xl">
                <h1 className='text-4xl md:text-5xl text-black dark:text-body font-bold leading-none tracking-tighter'>
                    Hi! I am a Software Developer,
                    Mentor, <span className='text-primary'>
                        Coder
                    </span>
                </h1>
                <p className=''>
                    Write <span> Faster</span>
                    <span> Better</span> and
                    <span className='dark:text-red-400'> Performant</span>
                    <span className='text-primary px-2'>
                        Code
                    </span>
                </p>
            </div>

            <p className="text-black dark:text-body py-4">
                Want to take your development experience to Next Level? 
            </p>
            <div className=" flex mb-4 gap-2 items-center flex-wrap">
                <button className='px-3 py-2 bg-primary hover:bg-opacity-70 text-white rounded-2xl'>
                    Explore Courses
                </button>
                <button className='px-3 text-red-500 py-2 border border-borderLight dark:border-borderDark hover:!border-red-500 rounded-2xl'>
                🫀 Join Community 
                </button>
            </div>
         <div className="w-full px-4 md:px-12 lg:px-32 py-4">
         <div className="w-full relative aspect-video  shadow-2xl shadow-primary max-h-[32rem] py-4 rounded-2xl ">
            <Image src={'https://preview.cruip.com/open-pro/images/hero-image-01.jpg'} alt='Thumbnail' className='w-full h-full rounded-2xl' fill/>
            <div className=" translate-x-1/2 translate-y-1/2 ">
            </div>
            </div>
         </div>
        </div>
    );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import bannerimg from '../assets/images/bannerimg.jpg'
import content from './content.jsx'
import { GoDotFill } from "react-icons/go";

const Banner = () => {
  


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const prevContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };

  // Automatically change the slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextContent();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  


  return (
    <div className='w-full'>
      <div className='w-full h-[650px] bg-black/50 absolute'></div>
      <img src={bannerimg} alt="banimg" className='w-full h-[650px]' />
      <div className='transition-transform ease-in-out duration-300 transform translate-x-[-${currentIndex * 100}%]
       absolute top-[30%] text-white md:px-20 md:py-3 p-2 w-[60%]'>
      
            <p className='md:text-6xl DancingScript md:py-4'>
          {content[currentIndex].title}
        </p>
        <p className=' md:leading-6 md:py-4'>
          {content[currentIndex].des}
        </p>
        <button className='md:p-2 md:w-[150px] w-[70px] p-1 rounded-full bg-yellow-300  hover:bg-yellow-400 justify-center items-center'>
          <a href="#booknow" className="block lg:inline-block  lg:mt-0 md:text-lg text-xs no-underline text-white  ">
            Book Now
          </a>
        </button>
         <div className='flex md:py-5'>
          <a href={content[0]} className='text-white text-2xl active:text-yellow-500'><GoDotFill /></a>
          <a href={content[1]} className='text-white text-2xl active:text-yellow-500'><GoDotFill /></a>
          <a href={content[2]} className='text-white text-2xl active:text-yellow-500'><GoDotFill /></a>
        </div>  
        
      </div>
    </div>
  )
}

export default Banner




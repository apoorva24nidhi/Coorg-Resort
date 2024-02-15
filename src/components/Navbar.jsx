import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import bannerimg from '../assets/images/bannerimg.jpg'



const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  

  return ( 
    <div className=''>
      <img src={bannerimg} alt="banimg" className='h-[15%] absolute w-full object-cover object-top' />
            <div className='w-full h-[15%] bg-black/40 absolute'></div>
    <div className='w-full z-50 absolute'>
      <nav className="md:px-20 md:py-3 p-2 ">

      <div className="w-full mx-auto flex justify-between items-center">
        <a href="home" className="flex items-center space-x-3 no-underline ">
          <span
            className="DancingScript self-center text-lg md:text-4xl font-semibold text-white md:py-4 
           whitespace-nowrap dark:text-white">
            Coorg Green Form Resort
          </span>
        </a>
        <div className="lg:hidden w-[50px] ">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-rose-800 p-2"
                  >
                      <CiMenuBurger className='text-xl'/>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center`}
        >
          <Link onClick={()=>{navigate('/');}} to="/" className="block lg:inline-block md:pr-4 lg:mt-0 md:text-lg text-xs no-underline text-white hover:text-yellow-400 mr-4">
              HOME
            </Link>
            
            <Link onClick={()=>{navigate('/rooms');}} to="/rooms" className="block lg:inline-block md:pr-4 lg:mt-0 md:text-lg text-xs no-underline text-white hover:text-yellow-400 mr-4">
              ROOMS
            </Link>
            <Link onClick={()=>{navigate('/inaround');}} to="/inaround" className="block lg:inline-block md:pr-4 lg:mt-0 md:text-lg text-xs no-underline text-white hover:text-yellow-400 mr-4">
              IN & AROUND
            </Link>
            <Link onClick={()=>{navigate('/gallery');}} to="/gallery" className="block lg:inline-block md:pr-4 lg:mt-0 md:text-lg text-xs no-underline text-white hover:text-yellow-400 mr-4">
              GALLERY
            </Link>
            

            <button className='md:p-3 p-1 rounded-full bg-yellow-300  hover:bg-yellow-400 justify-center items-center'>
              <a href="#contact" className="block lg:inline-block  lg:mt-0 md:text-lg text-xs no-underline text-white  ">
                CONTACT
              </a>
            </button>
        </div>
      </div>
      </nav>
      </div>
      </div>
  );
};


export default Navbar
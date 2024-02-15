import React from 'react'
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterest } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const Contact = () => {
  return (
    <div id='contact' className='bg-slate-800 w-full p-20'>
    <div className='w-full flex justify-between'>
      <div className='text-white text-center'>
        <p className='DancingScript text-4xl py-4 text-center'>Contact Us</p>
        <p className='flex py-2 text-center justify-center'>
          <FaPhoneAlt /><span className='pl-2'>+91 77957 84234</span>
        </p>
        <p className='flex py-2 text-center justify-center'>
          <FaPhoneAlt /><span className='pl-2'>+91 77957 84234</span>
        </p>
        <p className='flex py-2 text-center justify-center'>
          <IoMdMail /><span className='pl-2'>greenform2120@gmail.com</span>
        </p>
      </div>
      <div className=''>
        <div className=" text-white items-center">
          <p className="md:text-5xl text-lg w-full DancingScript py-4 text-center justify-center">
            Coorg Green Form Resort
          </p>
          <p className='w-full text-center justify-center'>
            Near Cauvery Nisargadhama, Madapatana,<br/>Kodagu District, Kushalnagar, Karnataka <br/>- 571234
          </p>
          <p className='flex w-full text-center justify-center py-4'>
            <p className='p-1 mx-1 bg-white rounded-full text-slate-800 hover:text-yellow-300 cursor-pointer'><FaFacebookF /></p>
            <p className='p-1 mx-1 bg-white rounded-full text-slate-800 hover:text-yellow-300 cursor-pointer'><FaTwitter /></p>
            <p className='p-1 mx-1 bg-white rounded-full text-slate-800 hover:text-yellow-300 cursor-pointer'><FaLinkedinIn /></p>
            <p className='p-1 mx-1 bg-white rounded-full text-slate-800 hover:text-yellow-300 cursor-pointer'><FaInstagram /></p>
            <p className='p-1 mx-1 bg-white rounded-full text-slate-800 hover:text-yellow-300 cursor-pointer'><FaPinterest /></p>           
          </p>
        </div>
      </div>
      <div className=''>
        <div className=" text-white items-center">
          <p className="md:text-4xl text-lg w-full DancingScript py-4 text-center justify-center">
            Opening Hours
          </p>
          <p className='w-full text-center justify-center'>All Day</p>
          <p className='w-full text-center justify-center'>24 Hours</p>        
        </div>
      </div>
      </div>
      <div className='w-full text-center justify-center text-white pt-20'>
        <p>© 2024 All Rights Reserved By Coorg Home Stay Resort</p>
        </div>
      </div>
  )
}

export default Contact

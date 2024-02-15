import React from 'react'
import food from '../assets/images/food.jpg'
import { GoTriangleUp } from "react-icons/go";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";


const Review = () => {
  return (
    <div className='px-20 py-10'>
      <div className="w-full text-center">
        <h1 className="md:text-4xl text-lg mx-auto my-auto DancingScript font-semibold p-10">
          What Our Customer Says
        </h1>
      </div>
      <div className='flex'>
        <div className='w-1/2 pr-4'>
          <div className=' bg-slate-800 text-white rounded p-4'>
            <p className='pb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at turpis nec libero gravida
              fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Sed at metus eu odio mollis facilisis. Proin vel dui vel eros sollicitudin pretium.
              Aliquam erat volutpat.
            </p>
            <p className='text-lg font-medium'>Mike Hamell</p>
            <p>magna aliqua</p>
          </div>
          <div className='py-4 relative'>
            <img src={food} alt="food" className='h-[100px] w-[100px] rounded-full border-4 border-yellow-300' />
            <p className='absolute -top-1.5 left-[5%] text-yellow-300'><GoTriangleUp className='text-4xl' /></p>
          </div>
        </div>
        <div className='w-1/2 pl-4'>
          <div className=' bg-slate-800 text-white rounded p-4'>
            <p className='pb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at turpis nec libero gravida
              fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Sed at metus eu odio mollis facilisis. Proin vel dui vel eros sollicitudin pretium.
              Aliquam erat volutpat.
            </p>
            <p className='text-lg font-medium'>Mike Hamell</p>
            <p>magna aliqua</p>
          </div>
          <div className='py-4 relative'>
            <img src={food} alt="food" className='h-[100px] w-[100px] rounded-full border-4 border-yellow-300' />
            <p className='absolute -top-1.5 left-[5%] text-yellow-300'><GoTriangleUp className='text-4xl' /></p>
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <p className="md:text-4xl text-lg mx-auto my-auto font-semibold p-10 ">
          <button className=' md:p-5 p-2' onClick=''><GrFormPrevious className='md:text-4xl text-white bg-yellow-300 rounded-full text-xl' /></button>
          <button className='md:p-5 p-2' onClick=''><GrFormNext className='md:text-4xl text-white bg-yellow-300 rounded-full text-xl' /></button>

        </p>
      </div>
    </div>
  
  )
}

export default Review

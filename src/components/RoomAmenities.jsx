import React from 'react'
import bannerimg from '../assets/images/bannerimg.jpg'

const RoomAmenities = () => {
  return (
    <div className=' md:p-20 items-center justify-center font-semibold w-full mx-auto'>
      <div className="w-full text-center">
        <h1 className="md:text-4xl text-lg mx-auto my-auto DancingScript font-semibold">
          Rooms & Amenities
        </h1>
      </div>

      <div className='flex flex-wrap md:pt-20 justify-between'>
        <div className='pb-6'>
          <div className='w-[350px] bg-slate-800 rounded-xl'>
            <div className='bg-slate-200 borrad'>
              <img src={bannerimg} alt="img1" className=' cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
            </div>
            <div className='p-2'>
              <p className='text-white bg-gray-800 p-2 md:text-lg text-base'>Cottages</p>
            </div>
          </div>
        </div>

        <div className='pb-6'>
          <div className='w-[350px] bg-slate-800 rounded-xl'>
            <div className='bg-slate-200 borrad'>
              <img src={bannerimg} alt="img1" className=' cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
            </div>
            <div className='p-2'>
              <p className='text-white bg-gray-800 p-2 md:text-lg text-base'>Rooms</p>
            </div>
          </div>
        </div>

        <div className='pb-6'>
          <div className='w-[350px] bg-slate-800 rounded-xl'>
            <div className='bg-slate-200 borrad'>
              <img src={bannerimg} alt="img1" className=' cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
            </div>
            <div className='p-2'>
              <p className='text-white bg-gray-800 p-2 md:text-lg text-base'>Food</p>
            </div>
          </div>
        </div>

        <div className='pb-6'>
          <div className='w-[350px] bg-slate-800 rounded-xl'>
            <div className='bg-slate-200 borrad'>
              <img src={bannerimg} alt="img1" className=' cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
            </div>
            <div className='p-2'>
              <p className='text-white bg-gray-800 p-2 md:text-lg text-base'>Swiming Pool</p>
            </div>
          </div>
        </div>

        <div className='pb-6'>
          <div className='w-[350px] bg-slate-800 rounded-xl'>
            <div className='bg-slate-200 borrad'>
              <img src={bannerimg} alt="img1" className=' cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
            </div>
            <div className='p-2'>
              <p className='text-white bg-gray-800 p-2 md:text-lg text-base'>Outdoor Sports</p>
            </div>
          </div>
        </div>

        <div className='pb-6'>
          <div className='w-[350px] bg-slate-800 rounded-xl'>
            <div className='bg-slate-200 borrad'>
              <img src={bannerimg} alt="img1" className=' cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
            </div>
            <div className='p-2'>
              <p className='text-white bg-gray-800 p-2 md:text-lg text-base'>Indoor Activities</p>
            </div>
          </div>
        </div>
        
      </div>

        <div className='flex justify-center items-center text-center md:p-5 p-5'>
          <p className='md:p-2 md:w-[150px] w-[70px] p-1 rounded-full bg-yellow-300  hover:bg-yellow-400'>
            <a href='#fullmenu' className="md:text-lg text-[10px] items-center">
              View All
            </a>
          </p>
        </div>
      
    </div>
   
  )
}

export default RoomAmenities
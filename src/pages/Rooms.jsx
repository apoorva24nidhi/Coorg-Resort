import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const Rooms = () => {
    return (
        <div>
            <Navbar />
        <div className='p-20'>
            <div className="w-full text-center pt-20">
                <h1 className="md:text-4xl text-lg mx-auto my-auto DancingScript font-semibold">
                    Rooms & Amenities
                </h1>
            </div>
            <div className='py-20 flex flex-wrap justify-between'>
                <div className=' w-[570px] pb-10'>
                    <div className=' bg-slate-800 text-white rounded-2xl'>
                        <div className=' bg-slate-900 text-white card p-7'>
                            <p className='DancingScript md:text-4xl justify-center text-center'>Deluxe - AC</p>
                        </div>
                        <div className='p-7'>
                            <p className='py-2'>No of Beds: <span className='font-semibold'>1</span></p>
                            <p>Facilities: <span className='font-semibold'>AC, TV</span></p>
                        </div>
                    </div>
                </div>

                <div className=' w-[570px] pb-10'>
                    <div className=' bg-slate-800 text-white rounded-2xl'>
                        <div className=' bg-slate-900 text-white card p-7'>
                            <p className='DancingScript md:text-4xl justify-center text-center'>Deluxe -  Non AC</p>
                        </div>
                        <div className='p-7'>
                            <p className='py-2'>No of Beds: <span className='font-semibold'>2</span></p>
                            <p>Facilities: <span className='font-semibold'>Sofa, TV, Balcony, AC</span></p>
                        </div>
                    </div>
                </div>

                <div className=' w-[570px] pb-10'>
                    <div className=' bg-slate-800 text-white rounded-2xl'>
                        <div className=' bg-slate-900 text-white card p-7'>
                            <p className='DancingScript md:text-4xl justify-center text-center'>Standard Rooms</p>
                        </div>
                        <div className='p-7'>
                            <p className='py-2'>No of Beds: <span className='font-semibold'>2</span></p>
                            <p>Facilities: <span className='font-semibold'>AC, TV</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
<Contact />
        </div>
  )
}

export default Rooms

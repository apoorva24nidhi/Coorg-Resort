import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import pics from './Data'


const Gallery = () => {
    const [item, setItem] = useState(pics);

    const filterItems = (category) => {
        if (category === 'all') {
            setItem(pics)
        }
        else {
            const newItems = pics.filter((item) => item.category === category)
            setItem(newItems)
        }
        
    }

    return (
        <div>
            <Navbar />

      <div className='p-20'>
          <div className="w-full text-center py-10 pt-20">
              <h1 className="md:text-4xl text-lg mx-auto my-auto DancingScript font-semibold ">
                  Gallery
              </h1>
              <div className='py-10 w-full'>
                  <button onClick={()=>filterItems('all')} className=' active:bg-slate-800 active:rounded-full active:text-white text-lg px-4 py-2'>
                      <a href="">All</a>
                  </button>
                  <button onClick={()=>filterItems('cottages')} className=' active:bg-slate-800 active:rounded-full active:text-white text-lg px-4 py-2'>
                      <a href="">Cottages</a>
                  </button>
                  <button onClick={()=>filterItems('rooms')} className=' active:bg-slate-800 active:rounded-full active:text-white text-lg px-4 py-2'>
                      <a href="">Rooms</a>
                  </button>
                  <button onClick={()=>filterItems('amenities')} className=' active:bg-slate-800 active:rounded-full active:text-white text-lg px-4 py-2'>
                      <a href="">Amenities</a>
                  </button>
                  <button onClick={()=>filterItems('pool')} className=' active:bg-slate-800 active:rounded-full active:text-white text-lg px-4 py-2'>
                      <a href="">Pool</a>
                  </button>
              </div>
          </div>
                <div>
                    <div className='flex flex-wrap justify-between'>
                        {item.map((val) => (
                            <div key={val.id} className='w-[350px] pb-6'>
                                <div className='bg-slate-200 rounded-xl'>
                                    <img id='Rooms' src={val.img} alt="img1" className='cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
                                </div>
                             </div>   
                        ))}
                    </div>
                </div>
            </div>
            <Contact />
        </div>
        
  )
}

export default Gallery

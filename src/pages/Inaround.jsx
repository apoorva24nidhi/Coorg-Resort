import React from 'react'
import bannerimg from '../assets/images/bannerimg.jpg'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const Inaround = () => {
    return (
      <div>
            <Navbar />
      <div className='p-20 '>
          <div className="w-full text-center pb-20 pt-20">
              <h1 className="md:text-4xl text-lg mx-auto my-auto DancingScript font-semibold">
                  In & Around - Coorg Green Farm Resort
              </h1>
          </div>
          <div className='w-full py-20 px-10 bg-slate-900 text-white text'>
              <p className='text-lg'>
                  In & Around - Coorg Green Farm Resort, Coorg is one of the most sought-after holiday
                  destinations in South India, located in south-western part of Karnataka, sharing the
                  border with Kerala. It's very windy and wet throughout the year, henceforth, popularly
                  known as 'Scotland of India.' Besides a number of tourist attractions, Coorg is known
                  for its outdoor sports. Besides trekking, Coorg is great for white water rafting, rock
                  climbing, mountain hiking and boating. Here is a list of important tourist attractions
                  in and around Coorg that you can visit during your stay at Stay Simple Raj Gardenia Resort:
              </p>
          </div>
          <div className='flex flex-wrap md:pt-20 justify-between'>
              
              <div className='pb-6'>
                  <div className='w-[550px] h-[550px] bg-slate-800 rounded-xl'>
                      <div className='bg-slate-200 borrad'>
                          <img src={bannerimg} alt="img1"
                              className='w-[70%] cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
                      </div>
                      <div className='p-2 pb-10 text-white bg-gray-800 rounded-b-lg'>
                          <p className=' md:text-lg text-base p-2 font-semibold'>Tibetan Monastery and Golden Temple</p>
                          <p className='p-2'>
                              Established way back in 1961, Lugsung Samdupling Tibetan Settlement in Bylakuppe
                              is the oldest of all Tibetan settlements in India and one of the biggest Tibetan
                              refugee settlements in India on a span area of 3,210 acres. Besides this, Bylakuppe
                              houses one of the largest Buddhist universities called Sera Monastic University.
                              The Tibetan Settlement is 87 kms from Turtle Pond Homestay Coorg
                          </p>
                      </div>
                  </div>
              </div>
              <div className='pb-6'>
                  <div className='w-[550px] h-[550px] bg-slate-800 rounded-xl'>
                      <div className='bg-slate-200 borrad'>
                          <img src={bannerimg} alt="img1"
                              className='w-[70%] cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
                      </div>
                      <div className='p-2 pb-10 text-white bg-gray-800 rounded-b-lg'>
                          <p className=' md:text-lg text-base p-2 font-semibold'>Cauvery Nisargadhama</p>
                          <p className='p-2'>
                              Nisargadhama is a 25-acre island formed by river Cauvery. This island houses deer,
                              elephants, peacocks among other animals and has a number of bamboo, teak and sandalwood
                              trees as well as streams. Nisargadhama is also famous for the hanging bridge which
                              connects the island and helps travellers' cross the river Cauvery
                          </p>
                      </div>
                  </div>
              </div>
              <div className='pb-6'>
                  <div className='w-[550px] h-[550px] bg-slate-800 rounded-xl'>
                      <div className='bg-slate-200 borrad'>
                          <img src={bannerimg} alt="img1"
                              className='w-[70%] cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
                      </div>
                      <div className='p-2 pb-10 text-white bg-gray-800 rounded-b-lg'>
                          <p className=' md:text-lg text-base p-2 font-semibold'>Dubare Elephant Camp</p>
                          <p className='p-2'>
                              At Dubare Elephant Camp, you will not only see these giant creatures but also interact
                              with them. Here you will get an opportunity to roll up your sleeves and jump in for
                              grooming session - watch elephants being given a scrub-bath in the river, oil being
                              applied to their forehead, tusks and the other aspects of elephant grooming.
                          </p>
                      </div>
                  </div>
              </div>
              <div className='pb-6'>
                  <div className='w-[550px] h-[550px] bg-slate-800 rounded-xl'>
                      <div className='bg-slate-200 borrad'>
                          <img src={bannerimg} alt="img1"
                              className='w-[70%] cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
                      </div>
                      <div className='p-2 pb-10 text-white bg-gray-800 rounded-b-lg'>
                          <p className=' md:text-lg text-base p-2 font-semibold'>Raja's Seat (Seat of the King)</p>
                          <p className='p-2'>
                              Raja's Seat (Seat of the King) is a seasonal garden of flowers and artificial fountains
                              and is one of the most important tourist spots in Madikeri near Coorg. A pleasant
                              spectacle of refreshing layers of greenery, chain of high and low-rise-mountains attired
                              with mist, the Raja Garden is one-time-favourite of Kings of Kodagu who used to watch
                              the setting sun, and spend time with their queens here.
                          </p>
                      </div>
                  </div>
              </div>
              <div className='pb-6'>
                  <div className='w-[550px] h-[550px] bg-slate-800 rounded-xl'>
                      <div className='bg-slate-200 borrad'>
                          <img src={bannerimg} alt="img1"
                              className='w-[70%] cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
                      </div>
                      <div className='p-2 pb-10 text-white bg-gray-800 rounded-b-lg'>
                          <p className=' md:text-lg text-base p-2 font-semibold'>Nagarahole National Park (Rajiv Gandhi National Park)</p>
                          <p className='p-2'>
                              Stretched for over 643 sq. km. between Kodagu (Coorg) and Mysore district, Nagarahole
                              National Park, also known as Rajiv Gandhi National Park, has a rich forest cover, small
                              streams, hills, valleys and waterfalls. The park has a healthy tiger-predator ratio,
                              with many tigers, Indian bison and elephants.
                          </p>
                      </div>
                  </div>
              </div>
              <div className='pb-6'>
                  <div className='w-[550px] h-[550px] bg-slate-800 rounded-xl'>
                      <div className='bg-slate-200 borrad'>
                          <img src={bannerimg} alt="img1"
                              className='w-[70%] cursor-pointer object-cover  mx-auto my-auto p-10 hover:scale-[1.1]' />
                      </div>
                      <div className='p-2 pb-10 text-white bg-gray-800 rounded-b-lg'>
                          <p className=' md:text-lg text-base p-2 font-semibold'>Treks to Brahmagiri Hills</p>
                          <p className='p-2'>
                              Trek to Brahmagiri Hills will let you explore the thrill of trekking at an altitude of 
                              1,608 m, above sea level. The range of mountains is located in the Western Ghats which
                              act as the border between Karnataka and Kerala. The trek takes individuals deep inside
                              the Brahmagiri Wildlife Sanctuary, which is an abode to a number of elephants, and
                              passes through the densest of forests, small streams and rivers.
                          </p>
                      </div>
                  </div>
              </div>

          </div>
      
            </div>
            <Contact />
        </div>
  )
}

export default Inaround

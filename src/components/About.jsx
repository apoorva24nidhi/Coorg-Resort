import React from 'react'
import about from '../assets/images/about.jpg'

const About = () => {
  return (
    <div className='md:flex w-full h-full justify-between items-center p-20 bg-slate-900'>
      <div className="justify-center flex w-1/2">
        <img src={about} alt='about' className='object-fill h-[600px]'/>
      </div>
      <div className=' w-1/2 pl-20'>
        <p className="DancingScript text-lg md:text-4xl font-semibold text-white md:py-4">
            Coorg Green Form Resort
        </p>
        <p className='text-white pb-4'>
          Coorg Green Farm Resort, Coorg, is situated within a pristine 5-acre green area, in Coorg
          district and minutes away from the most popular destinations like Tibet Camp - The Golden
          Monastery and Tibetan Settlement, Cauvery Nisarghadhama, an island formed in river Cauvery;
          Coorg Green Farm Resort, is the preferred choice for travelers to this region. With 25 spacious
          rooms and cottages, an all-day diner catering to a multi-cuisine selection, a banquet hall that
          can host up to 100 people, swimming pool and a host of recreational activities,
          Coorg Green Farm Resort offers an exceptional experience to individual holidaymakers, families
          and group travellers alike.
        </p>
        <p className='text-white'>
          The resort offers multiple options for relaxation and activity. Be it a trampoline for children
          to jump on or trying to hit the bull's eye with a bow and arrow or take a cycle and explore the
          countryside, try your hand at table tennis or cricket and volleyball or just warm your feet by
          the campfire, or even better take a early morning plantation walk with the birds for company.
        </p>
      </div>
    </div>
  )
}

export default About
import React, { useState } from 'react'
import axios from 'axios';

const Booking = () => {

const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields here if needed

    // Send SMS using Twilio
    try {
      const response = await axios.post('/send-sms', {
        to: formData.contactNumber,
        body: `Booking Confirmation: Thank you, ${formData.name}, for booking a room on ${formData.date}.`,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error sending SMS:', error);
    }

    // Additional logic for booking confirmation or redirection can be added here
  };

  return (
    <div className='p-20 w-full h-full flex '>
      <div className="w-1/2">
        <h1 className="md:text-4xl text-lg  DancingScript font-semibold pb-4">
          Book A Rooms
        </h1>
        <div className="">
          <form className='w-full flex flex-col' onSubmit={handleSubmit}>
            <input
              className='p-2 md:p-3 md:my-2 my-1 rounded bg-slate-100 md:text-base text-xs md:rounded-xl'
              type='text'
              placeholder='Enter Your Name'
              autoComplete='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className='p-2 md:p-3 md:my-2 my-1 rounded bg-slate-100 md:text-base text-xs md:rounded-xl'
              type='tel'
              placeholder='Enter Contact Number'
              autoComplete='number'
              name='contactNumber'
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
            <input
              className='p-2 md:p-3 md:my-2 my-1 rounded bg-slate-100 md:text-base text-xs md:rounded-xl'
              type='email'
              placeholder='Enter Your Email'
              autoComplete='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className='p-2 md:p-3 md:my-2 my-1 rounded bg-slate-100 md:text-base text-xs md:rounded-xl'
              type='date'
              placeholder='dd-mm-yyyy'
              autoComplete='date'
              name='date'
              value={formData.date}
              onChange={handleChange}
              required
            />
            <button className='md:p-2 my-4 md:w-[150px] w-[70px] p-1 rounded-full bg-yellow-300  hover:bg-yellow-400 justify-center items-center' type='submit'>
              <a href="#booknow" className="block lg:inline-block  lg:mt-0 md:text-lg text-xs no-underline text-white  ">
                Book Now
              </a>
            </button>
          </form>



          {/* <form className='w-full flex flex-col'>
            <input
                className='p-2 md:p-3 md:my-2 my-1 rounded bg-slate-100 md:text-base text-xs md:rounded-xl'
                type='name'
                placeholder='Enter Your Name'
              autoComplete='name'
              required
            />
            <input
                className='p-2 md:p-3 md:my-2 my-1 rounded bg-slate-100 md:text-base text-xs md:rounded-xl'
                type='tel'
                placeholder='Enter Contact Number'
              autoComplete='number'
              required
            />
            <input
                className='p-2 md:p-3 md:my-2 my-1 rounded bg-slate-100 md:text-base text-xs md:rounded-xl'
                type='email'
                placeholder='Enter Your Email'
              autoComplete='number'
              required
                  />
            <input
                className='p-2 md:p-3 md:my-2 my-1 rounded bg-slate-100 md:text-base text-xs md:rounded-xl'
                type='date'
                placeholder='dd-mm-yyyy'
              autoComplete='number'
              required
                  />
            <button className='md:p-2 my-4 md:w-[150px] w-[70px] p-1 rounded-full bg-yellow-300  hover:bg-yellow-400 justify-center items-center'>
              <a href="#home" className="block lg:inline-block  lg:mt-0 md:text-lg text-xs no-underline text-white  ">
                Book Now
              </a>
            </button>
          </form> */}
        </div>
      </div>

      <div className='w-1/2'>
        <div id="display-google-map" className='w-full h-full p-6'>
            <iframe frameborder="0" className='w-full h-full'
              src="https://www.google.com/maps/embed/v1/place?q=Coorg+Green+Farm+Resort,+Madapatna+Road,+Kushalnagar,+Karnataka,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
            </iframe>
          </div>
        </div>
        {/* <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Near%20Cauvery%20Nisargadhama,%20Madapatana,%20Kodagu%20District,%20Kushalnagar,%20Karnataka%20-%20571234+(Coorg%20Green%20Farm%20Resort)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.gps.ie/">gps systems</a></iframe> */}
  
    </div>
  )
}

export default Booking
